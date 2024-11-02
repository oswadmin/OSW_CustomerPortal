"use server"

import { z } from "zod";
import nodemailer from 'nodemailer';

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
      "Google",
      "Nextdoor",
      "Promotional",
      "Facebook",
      "Instagram",
      "Yard Sign",
      "Referral",
      "Business Card",
      "",
    ]).optional(),
    custPromo: z.string().optional(),
  });

export async function submitRequest(formData: FormData){
  
    try {
        requestFormSchema.parse(formData);
        console.log("Form is valid");
    } catch (e) {
        if (e instanceof z.ZodError) {
        console.error("Form validation failed:", e.errors);
        }
    }

    const result = requestFormSchema.safeParse(Object.fromEntries(formData.entries()))

    console.log(formData)

    const data = result.data




}