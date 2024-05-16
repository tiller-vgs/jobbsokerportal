// zod
import { z } from "zod";

export const jobApplicationSchema = z.object({
  job_title: z.string().nonempty(),
  description: z.string(),
  expiry_date: z.date(),
  original_link: z.string().url(),
  image_url: z.string().url(),
  position_title: z.string(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password cannot be empty!",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password cannot be less than 6 characters!",
  }),
  name: z.string().min(1, {
    message: "Name is required!",
  }),
});
// test commit
