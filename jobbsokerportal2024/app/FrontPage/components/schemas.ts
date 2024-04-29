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
