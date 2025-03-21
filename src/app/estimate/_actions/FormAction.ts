"use server"

import { z } from "zod";
import { Resend } from "resend";
import EstimateRequestEmail from "@/email/EstimateRequstEmail"
import { supabase } from "@/lib/supabase";
import pino from 'pino';
import { generateVerificationToken } from "@/lib/utils";
import EmailVerification from "@/email/EmailVerfication";

const logger = pino();
logger.info("FormAction.ts");

const resend = new Resend(process.env.RESEND_API_KEY)

// Define the service options
const serviceOptions = [
  "Surfaces",
  "Siding",
  "Decks",
  "Fences",
  "Roofs",
  "Gutters",
  "Waste Bins",
  "Commercial",
] as const; // Use 'as const' for better type safety

const singleServiceSchema = z.enum(serviceOptions);

// Use z.preprocess to *always* ensure custServices is an array
const custServicesSchema = z.preprocess((val) => {
  if (typeof val === "string") {
    return [val]; // Convert single string to an array
  }
  if (Array.isArray(val)) {
    return val.filter(item => serviceOptions.includes(item as typeof serviceOptions[number])); // Validate array elements and filter out invalid options.
  }
  return val; // Let Zod handle other invalid input types
}, z.array(singleServiceSchema).min(1, { message: "At least one service must be selected" }));


// zod schema for Services Types
const referralSchema = z.enum([
  "Angie",
  "Business Card",
  "Facebook",
  "Google",
  "Instagram",
  "Nextdoor",
  "Flyer",
  "Yard Sign",
  "Referral",
  "Truck",
  "Yard Sign"
]).optional();



// Zod schema for the form
const requestFormSchema = z.object({
  custFirstName: z.string().min(1, { message: "First Name is required" }),
  custLastName: z.string().min(1, { message: "Last Name is required" }),
  custEmail: z.string().email({ message: "Invalid email address" }),
  custPhone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number cannot exceed 15 digits" }),
  custAddress: z.string().min(1, { message: "Address is required" }),
  custServices: custServicesSchema, // Uses the preprocessed schema
  custDesc: z.string().optional(),
  custContactType: z.enum([
    "Residential",
    "Commercial",
  ]),
  custReferral: referralSchema,
  custPromo: z.string().optional(),
});

// Search db to see if contact exists
async function getContactId(email: string): Promise<{ contactId: string | undefined, repeatCustomer: boolean, error: string | null }> {
  const { data: existingContact, error: contactError } = await supabase
    .from("Contacts")
    .select("contact_id")
    .eq("Email", email);

  if (contactError) {
    console.error("Supabase error checking for existing contact:", contactError);
    return { contactId: undefined, repeatCustomer: false, error: "Database error checking for existing contact." };
  }

  if (existingContact && existingContact.length > 0) {
    return { contactId: existingContact[0].contact_id, repeatCustomer: true, error: null };
  } else {
    return { contactId: undefined, repeatCustomer: false, error: null };
  }
}

// Create a new contact
async function createContact(parsedData: z.infer<typeof requestFormSchema>): Promise<{ contactId: string | undefined, verificationToken: string | undefined, error: string | null }> {
  const verificationToken = generateVerificationToken(); // Generate token

  const { data: newContact, error: newContactError } = await supabase
    .from("Contacts")
    .insert([
      {
        FirstName: parsedData.custFirstName,
        LastName: parsedData.custLastName,
        Email: parsedData.custEmail,
        Phone: parsedData.custPhone,
        Contact_Type: parsedData.custContactType,
        Address: parsedData.custAddress,
        verification_token: verificationToken,
        is_verified: false

      },
    ])
    .select("contact_id");

  if (newContactError) {
    console.error("Supabase error creating new contact:", newContactError);
    return { contactId: undefined, verificationToken: undefined, error: "Failed to save contact information." };
  }
  if (!newContact || newContact.length === 0) {
    logger.error("No contact_id returned after contact insertion.");
    return { contactId: undefined, verificationToken: undefined, error: "Failed to save contact information (no ID returned)." };
  }
  return { contactId: newContact[0].contact_id, verificationToken: verificationToken, error: null };
}


// Create a new deal
async function insertDeal(contactId: string, repeatCustomer: boolean, parsedData: z.infer<typeof requestFormSchema>, dealStatus: string): Promise<{ success: boolean, error: string | null }> {
  const { data: dealData, error: dealError } = await supabase
    .from("Deals")
    .insert([
      {
        contact_id: contactId,
        address: parsedData.custAddress,
        services: parsedData.custServices,
        description: parsedData.custDesc,
        referral: parsedData.custReferral,
        promo_code: parsedData.custPromo,
        deal_status: dealStatus,
      },
    ])
    .select();

  if (dealError) {
    logger.error({ dealError }, "Supabase error inserting deal:");
    return { success: false, error: "Failed to save estimate request." };
  }

  if (!dealData) {
    logger.error("No data returned from Supabase after deal insertion.");
    return { success: false, error: "Data was not saved correctly (deal data missing)." };
  }
  return { success: true, error: null };
}

// Send verification email
async function sendVerificationEmail(email: string, verificationToken: string): Promise<{ success: boolean, error: string | null }> {
  if (process.env.SEND_EMAIL !== "true") {
    return { success: true, error: null }; // Skip email sending if disabled
  }

  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${verificationToken}&email=${email}`; // Construct verification link
  console.log("Verification Link:", verificationLink); // Log the link for debugging

  // Assuming you have a VerificationEmail component (create in step 5)
  const emailResult = await resend.emails.send({
    from: "sales@orangesoftwash.com", // Adjust your from email
    to: email, // Send to the customer's email
    subject: "Verify Your Email for Orange Softwash Estimate Request",
    react: EmailVerification({ verificationLink }), // Pass the link to the email template
  });

  if (emailResult.error) {
    logger.error("Resend Verification Email error:", emailResult.error);
    return { success: false, error: "Failed to send verification email." };
  }
  return { success: true, error: null };
}


// Send email notifications that form was submitted.
async function sendEmailNotification(parsedData: z.infer<typeof requestFormSchema>): Promise<{ success: boolean, error: string | null }> {
  if (process.env.SEND_EMAIL !== "true") {
    return { success: true, error: null }; // Skip email sending if disabled
  }

  const emailResult = await resend.emails.send({
    from: "OSW System <admin@orangesoftwash.com>",
    to: "sales@orangesoftwash.com",
    subject: "OSW: New Estimate Request",
    react: EstimateRequestEmail(parsedData)
  });

  if (emailResult.error) {
    console.error("Resend Email error:", emailResult.error);
    return { success: false, error: "Failed to send email notification." };
  }
  return { success: true, error: null };
}

//-----------------------------------------------------------------------------
// Process the form action
//-----------------------------------------------------------------------------
export async function FormAction(formData: FormData) {
  logger.info("FormAction")


  // 1. Parse FormData
  const fData: Record<string, any> = {};
  for (const [key, value] of formData.entries()) {
    if (fData[key] !== undefined) {
      // If the key already exists, make it an array (or add to existing array)
      if (!Array.isArray(fData[key])) {
        fData[key] = [fData[key]];
      }
      fData[key].push(value);
    } else {
      fData[key] = value;
    }
  }

  // 2. Validate with Zod
  const result = requestFormSchema.safeParse(fData)
  //console.log("zod result:")
  if (result.success === false) {
    //console.log("result failed")
    console.error(result.error.formErrors.fieldErrors)
    return { success: false, error: result.error.formErrors.fieldErrors }
  }
  const { data: validatedData } = result;


  // 3. Check for Existing Contact
  const {
    contactId: existingContactId,
    repeatCustomer,
    error: contactCheckError
  } = await getContactId(validatedData.custEmail);

  if (contactCheckError) {
    return { success: false, error: contactCheckError };
  }

  let contactIdToUse: string | undefined = existingContactId;
  let isRepeatCustomer = repeatCustomer;
  let verificationNeeded = false;


  // 4. Create new contact if not existing
  if (!existingContactId) {
    const { contactId: newContactId, verificationToken, error: contactCreateError } = await createContact(validatedData);

    if (contactCreateError) {
      return { success: false, error: contactCreateError };
    }
    contactIdToUse = newContactId;
    isRepeatCustomer = false;
    verificationNeeded = true;

    // 5. Send Verification Email (for new customers)
    if (verificationToken) { // Check if token is available
      const { success: verificationEmailSuccess, error: verificationEmailError } = await sendVerificationEmail(validatedData.custEmail, verificationToken);
      if (!verificationEmailSuccess) {
        logger.error("Verification email sending failed, but contact and deal created. Consider handling this.");
        // Decide how to handle email sending failure.  Maybe log it and still proceed with "Pending Verification" status?
      }
    } else {
      logger.error("Verification token was not generated for new contact.");
      // Handle case where token generation failed.
    }
  }

  if (!contactIdToUse) {
    return { success: false, error: "Contact ID not obtained." }; // Should not happen, but for safety
  }

  // 6. Insert Deal Record
  const dealStatus = verificationNeeded ? "Pending Verification" : "New Request";

  const { success: dealInsertSuccess, error: dealInsertError } = await insertDeal(contactIdToUse, isRepeatCustomer, validatedData, dealStatus);
  if (!dealInsertSuccess) {
    return { success: false, error: dealInsertError };
  }

  // 6. Send Email Notification
  const { success: emailSuccess, error: emailError } = await sendEmailNotification(validatedData);
  if (!emailSuccess) {
    return { success: false, error: emailError };
  }

  //Form process successfully
  return { success: true, message: "Form submitted successfully!" }
}

