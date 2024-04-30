// pages/api/submit.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { jobApplicationSchema } from "../FrontPage/components/schemas";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const formData = jobApplicationSchema.parse(req.body);
    const createdJobApplication = await prisma.job_applications.create({
      data: {
        ...formData,
        expiry_date: new Date(formData.expiry_date),
      },
    });
    res.status(201).json(createdJobApplication);
  } catch (error) {
    console.error("Error processing job application:", error);
    res.status(400).json({ message: "Invalid data" });
  }
}
// test commit
