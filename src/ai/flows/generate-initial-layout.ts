'use server';

/**
 * @fileOverview A flow for generating initial UI layouts for a portfolio based on a prompt.
 *
 * - generateInitialLayout - A function that handles the generation of the initial UI layout.
 * - GenerateInitialLayoutInput - The input type for the generateInitialLayout function.
 * - GenerateInitialLayoutOutput - The return type for the generateInitialLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialLayoutInputSchema = z.object({
  prompt: z.string().describe('A detailed prompt describing the desired UI layout for the portfolio.')
});

export type GenerateInitialLayoutInput = z.infer<typeof GenerateInitialLayoutInputSchema>;

const GenerateInitialLayoutOutputSchema = z.object({
  layout: z.string().describe('The generated UI layout in a suitable format (e.g., HTML, JSON, or a description).')
});

export type GenerateInitialLayoutOutput = z.infer<typeof GenerateInitialLayoutOutputSchema>;


export async function generateInitialLayout(input: GenerateInitialLayoutInput): Promise<GenerateInitialLayoutOutput> {
  return generateInitialLayoutFlow(input);
}

const generateInitialLayoutPrompt = ai.definePrompt({
  name: 'generateInitialLayoutPrompt',
  input: {schema: GenerateInitialLayoutInputSchema},
  output: {schema: GenerateInitialLayoutOutputSchema},
  prompt: `You are an AI tool that generates initial UI layouts for portfolios based on user prompts.  The user will provide a detailed prompt describing the desired UI layout, and you will generate the layout in a suitable format (e.g., HTML, JSON, or a detailed description).

  User Prompt: {{{prompt}}}
  `
});

const generateInitialLayoutFlow = ai.defineFlow({
    name: 'generateInitialLayoutFlow',
    inputSchema: GenerateInitialLayoutInputSchema,
    outputSchema: GenerateInitialLayoutOutputSchema,
  },
  async input => {
    const {output} = await generateInitialLayoutPrompt(input);
    return output!;
  }
);
