"use server"

import { z } from "zod";
import nodemailer from 'nodemailer';
import { redirect } from "next/navigation";

// const transporter = nodemailer.createTransport({
//     host: '',
//     port: ,
//     secure: ,
//     auth: {
//         user: '',
//         pass: '',
//     },
// })

const mailOptions = {
    from: 'scott@orangesoftwash.com',
    to: 'scott@orangesoftwash.com',
    subject: 'This is a test',
    text: 'Body of email with data soon'
}

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
    custServices: z
      .array(z.enum(["Surfaces", "Siding", "Decks", "Fences", "Roofs", "Gutters", "Waste Bins", "Commercial"]))
      .min(1, { message: "At least one service must be selected" }),
    custDesc: z.string().optional(),
    custReferral: z.enum([
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
    ]).optional(),
    custPromo: z.string().optional(),
  });

export async function RequestFormAction(prevState: unknown, formData: FormData){
  
    console.log(formData)
    
    //const fData = Object.fromEntries(formData.entries());

    const fData = Array.from(formData.entries()).reduce<Record<string, string | string[]>>((acc, [key, value]) => {
      if (!acc[key]) {
        acc[key] = formData.getAll(key).length > 1 
          ? formData.getAll(key) as string[]
          : value as string;
      }
      return acc;
    }, {});
    console.log(fData)

    const testData = { custFirstName: 'Scott' }

    try {
        //requestFormSchema.parse(testData);
        //requestFormSchema.parse(formData);
        requestFormSchema.parse(fData);
        console.log("Form is valid");
    } catch (e) {
        if (e instanceof z.ZodError) {
        console.error("Form validation failed:", e.errors);
        }
    }

    const result = requestFormSchema.safeParse(fData)
    console.log("zod result:" + result);
    
    if(result.success === false){
      //console.log("result failed")
      return result.error.formErrors.fieldErrors
    }

    const data = result.data

    //TODO process the data
    //console.log("let's go")
    redirect("/estimate/thankyou")
}