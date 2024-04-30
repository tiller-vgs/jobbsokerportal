"use client";
import React, { useState } from "react";
import { jobApplicationSchema } from "./schemas";

// Form
const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    description: "",
    expiry_date: "",
    original_link: "",
    image_url: "",
    position_title: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedData = jobApplicationSchema.parse(formData);
      // Send validatedData
      console.log("Form data:", validatedData);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='job_title'
        value={formData.job_title}
        onChange={handleChange}
      />
      <textarea
        name='description'
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type='date'
        name='expiry_date'
        value={formData.expiry_date}
        onChange={handleChange}
      />
      <input
        type='text'
        name='original_link'
        value={formData.original_link}
        onChange={handleChange}
      />
      <input
        type='text'
        name='image_url'
        value={formData.image_url}
        onChange={handleChange}
      />
      <input
        type='text'
        name='position_title'
        value={formData.position_title}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default JobApplicationForm;
// test commit
