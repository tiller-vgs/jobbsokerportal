"use server";

import { CreateApplicationSchema } from "@/Schemas";
import { db } from "@/lib/db";

export const CreateApplication = async (values) => {
  const validatedFields = CreateApplicationSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { Stilling, beskrivelse, utlopsdato, picture, stillingstittel } =
    validatedFields.data;

  await db.Utlysninger.create({
    data: {
      Stilling,
      beskrivelse,
      utlopsdato,
      picture,
      stillingstittel,
    },
  });

  return { success: "Successful registration!" }; // Corrected typo in the message
};
