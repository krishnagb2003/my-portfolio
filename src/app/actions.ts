'use server';

import { z } from 'zod';
import { contactSchema } from '@/lib/schemas';

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  // Here you would typically send an email, e.g., using Nodemailer or a service like Resend.
  // For this example, we'll just log the data to the console and simulate a success response.
  try {
    console.log('New contact form submission:', data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
