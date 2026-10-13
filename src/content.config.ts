import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    status: z.enum(['em desenvolvimento', 'pausado', 'arquivado', 'concluído', 'acadêmico']),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    repo: z.string().url().optional(),
    // Enquanto o repositório for privado, o link não aparece.
    privateCode: z.boolean().default(false),
    site: z.string().url().optional(),
    highlight: z.string().optional(),
  }),
});

export const collections = { projetos };
