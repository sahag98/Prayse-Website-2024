"use server";

import { revalidatePath } from "next/cache";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createMessage(formData: FormData) {
  try {
    const name = formData.get("name") || "No Name"; // Assuming there's a 'name' field
    const email = formData.get("email") || "No Name"; // Assuming there's a 'name' field
    const message = formData.get("message") || "No Message"; // Assuming there's a 'message' field

    const { data, error } = await resend.emails.send({
      from: `Website <contact@prayse.app>`,
      to: ["prayse.app@gmail.com"],
      subject: "New Message From Website",

      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.log("resend error: ", error);
    }

    // Create the message in Sanity

    // Revalidate the page to show the new message
    // revalidatePath(`/contact`);
  } catch (error) {
    console.error("Error creating message:", error);
  }
}
