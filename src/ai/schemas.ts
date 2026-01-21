import {z} from 'genkit';

export const GenerateWebsiteLayoutInputSchema = z.object({
  name: z.string().describe('The name of the developer.'),
  specialization: z.string().describe('The area of specialization (e.g., React, TypeScript, Java).'),
  topProject: z.string().describe('The top project of the developer.'),
  style: z.string().describe('The desired website style (e.g., minimalist, technical).'),
  aboutMe: z.string().describe('A brief description about the developer.'),
  experience: z.string().describe('The developer experience.'),
  projects: z.string().describe('The developer projects.'),
  contact: z.string().describe('The contact information of the developer.'),
});

export const GenerateWebsiteLayoutOutputSchema = z.object({
  layoutDescription: z.string().describe('The generated website layout description.'),
});

export const GenerateHeroImageInputSchema = z.object({
  prompt: z.string().describe('A detailed description of the desired hero image.'),
});

export const GenerateHeroImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated hero image as a data URI.'),
});

export const GenerateInitialLayoutInputSchema = z.object({
  prompt: z.string().describe('A detailed prompt describing the desired UI layout for the portfolio.')
});

export const GenerateInitialLayoutOutputSchema = z.object({
  layout: z.string().describe('The generated UI layout in a suitable format (e.g., HTML, JSON, or a description).')
});
