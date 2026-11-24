import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  company: z.string().max(120, "Company name is too long").optional(),
  inquiry: z.enum(
    ["General Information Request", "Partner Relations", "Careers", "I need help"],
    { error: "Please select what your inquiry is about" }
  ),
  message: z.string().max(2000, "Message must be 2000 characters or fewer").optional(),
  // Honeypot: real users never fill this hidden field.
  website: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
