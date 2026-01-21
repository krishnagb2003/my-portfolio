'use server';

/**
 * @fileOverview Generates a portfolio website layout using an AI tool based on a text prompt.
 *
 * - generateWebsiteLayout - A function that generates the website layout.
 * - GenerateWebsiteLayoutInput - The input type for the generateWebsiteLayout function.
 * - GenerateWebsiteLayoutOutput - The return type for the generateWebsiteLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { GenerateWebsiteLayoutInputSchema, GenerateWebsiteLayoutOutputSchema } from '@/ai/schemas';

export type GenerateWebsiteLayoutInput = z.infer<typeof GenerateWebsiteLayoutInputSchema>;
export type GenerateWebsiteLayoutOutput = z.infer<typeof GenerateWebsiteLayoutOutputSchema>;

export async function generateWebsiteLayout(input: GenerateWebsiteLayoutInput): Promise<GenerateWebsiteLayoutOutput> {
  return generateWebsiteLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteLayoutPrompt',
  input: {schema: GenerateWebsiteLayoutInputSchema},
  output: {schema: GenerateWebsiteLayoutOutputSchema},
  prompt: `Create a portfolio website for {{name}}, who specializes in {{specialization}}. Their top project is {{topProject}}. The style should be {{style}}. Include the following sections:\n\nAbout Me: {{aboutMe}}\n\nExperience: {{experience}}\n\nProjects: {{projects}}\n\nContact: {{contact}}\n\nGenerate a detailed website layout description suitable for use with AI website builders like Framer AI, 10Web, or Wix ADI. Focus on structure and content placement.  Specify the inclusion of a dark mode option.`,
});

const generateWebsiteLayoutFlow = ai.defineFlow(
  {
    name: 'generateWebsiteLayoutFlow',
    inputSchema: GenerateWebsiteLayoutInputSchema,
    outputSchema: GenerateWebsiteLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
