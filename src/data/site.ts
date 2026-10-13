// Fonte única dos dados pessoais usados nas páginas.
// TODO(lucas): revisar os itens marcados com TODO antes de publicar.

export const site = {
  name: 'Lucas Dalla Bernadina Marsalha',
  shortName: 'Lucas Dalla',
  role: 'Desenvolvedor full stack',
  location: 'Espírito Santo, Brasil',
  tagline: 'Construo sistemas web de ponta a ponta, do banco de dados à interface.',
  email: 'lucas.marsalha@gmail.com',
  links: {
    github: 'https://github.com/lucasdalla1',
    linkedin: 'https://www.linkedin.com/in/lucas-dalla/',
  },
};

export const nav = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'como-trabalho', label: 'Como trabalho' },
  { id: 'contato', label: 'Contato' },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  stack: string[];
};

const mindtec = { company: 'Mindtec', companyUrl: 'https://mindtec.com.br/' };

export const experience: Experience[] = [
  {
    period: 'jul 2025 — hoje',
    role: 'Desenvolvedor Júnior',
    ...mindtec,
    // TODO(lucas): trocar por 1–2 entregas concretas (o que fez, para quem, resultado)
    description:
      'Desenvolvimento e manutenção de sistemas web em Laravel, do banco SQL Server às telas: tanto em sistemas com Bootstrap e jQuery quanto em interfaces novas com Tailwind e Alpine.js. Ambientes conteinerizados com Docker.',
    stack: ['PHP', 'Laravel', 'SQL Server', 'Bootstrap', 'jQuery', 'Tailwind', 'Alpine.js', 'Docker'],
  },
  {
    period: 'set 2023 — jun 2025',
    role: 'Estagiário de Desenvolvimento',
    ...mindtec,
    // TODO(lucas): detalhar o que fazia no estágio
    description:
      'Primeiro contato com software em produção: correções, novas telas e funcionalidades em sistemas Laravel com Bootstrap, jQuery e JavaScript puro.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap', 'SQL Server'],
  },
];
