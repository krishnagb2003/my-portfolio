'use server';

/**
 * @fileOverview An AI agent to generate a hero image for a developer portfolio.
 *
 * - generateHeroImage - A function that handles the hero image generation process.
 * - GenerateHeroImageInput - The input type for the generateHeroImage function.
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroImageInputSchema = z.object({
  prompt: z.string().describe('A detailed description of the desired hero image.'),
});
export type GenerateHeroImageInput = z.infer<typeof GenerateHeroImageInputSchema>;

const GenerateHeroImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated hero image as a data URI.'),
});
export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(input: GenerateHeroImageInput): Promise<GenerateHeroImageOutput> {
  return generateHeroImageFlow(input);
}

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    inputSchema: GenerateHeroImageInputSchema,
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.prompt,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate hero image.');
    }

    return {imageUrl: media.url};
  }
);
