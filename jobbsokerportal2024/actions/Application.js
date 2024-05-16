"use server";

import { CreateApplicationSchema } from "../schemas";

export const CreateApplication = async (values) => {
  const validatedFields = CreateApplicationSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "invalid fields!" };
  }

  return { success: "Successfull!" };
};
