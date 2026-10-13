// Dados usados só no currículo. Cargo, empresa, período e stack vêm de site.ts;
// a descrição e os bullets são próprios: mais densos e com mais palavras-chave que no site.

export type CvBullet = { title?: string; text: string };

/** Chave: o mesmo `role` de site.ts */
export const cvExperience: Record<string, { description: string; bullets: CvBullet[] }> = {
  'Desenvolvedor Júnior': {
    description:
      'Sistemas de gestão para cooperativas e instituições de crédito. Atendimento independente a um cliente, da identificação de necessidades à entrega em produção.',
    bullets: [
      {
        title: 'Votação on-line de assembleia',
        text: 'desenvolvimento da maior parte de um sistema novo em Laravel, Tailwind e Alpine.js, com acesso por código de uso único (e-mail/WhatsApp) e voto único garantido no banco. Teste de carga com ~300 requisições simultâneas; ~200 votos por pauta em janelas de 5 minutos.',
      },
      {
        title: 'Integração com ERP (Omie)',
        text: 'filas e jobs idempotentes, rate limiter distribuído e worker com recuperação automática; conciliação automática de pagamentos PIX.',
      },
      {
        title: 'Segurança',
        text: 'correção de 15 das 21 vulnerabilidades de uma varredura Qualys, incluindo todas as críticas e altas, e upgrade para Laravel 13 e PHP 8.5 em 5 sistemas.',
      },
      {
        title: 'Cadastro e pagamentos',
        text: 'validação na API do banco cooperativo, PIX com QR Code (mTLS/OAuth) e OTP por e-mail e WhatsApp (API da Meta).',
      },
      {
        title: 'Mudanças transversais',
        text: 'migração da entidade central de 2 sistemas e adequação ao CNPJ alfanumérico em 6 sistemas.',
      },
      {
        title: 'Testes automatizados',
        text: 'PHPUnit e Pest introduzidos em sistemas sem cobertura, com SQLite emulando os schemas do SQL Server.',
      },
    ],
  },
  'Estagiário de Desenvolvimento': {
    description: 'Evolução de telas em módulos existentes à construção de sistemas inteiros.',
    bullets: [
      {
        title: 'Sistema de microcrédito',
        text: 'desenvolvimento da maior parte da esteira de crédito (proposta, análise, comitê, contrato): 21 das 26 telas principais e 46 das 95 tabelas.',
      },
      {
        title: 'Primeiras entregas em produção',
        text: 'gestão de usuários, edição de clientes e financeiro de débitos; redesign aplicado em 4 sistemas.',
      },
      {
        text: 'Upgrade para PHP 8.3 e Laravel 11, dashboard com gráficos e validação automática de assinaturas eletrônicas (D4Sign).',
      },
    ],
  },
};

export const curriculo = {
  headline: 'Desenvolvedor Full Stack Júnior · PHP e Laravel',
  location: 'Vila Velha, ES (Grande Vitória)',
  summary:
    'Desenvolvedor full stack com três anos de experiência em sistemas de gestão para cooperativas e instituições de crédito (PHP, Laravel, SQL Server), do levantamento de necessidades com o cliente à entrega em produção. Foco em integrações, confiabilidade e testes automatizados, com uso de IA guiado por planejamento, revisão e testes.',
  skills: [
    { group: 'Linguagens', items: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'Python'] },
    { group: 'Back-end', items: ['Laravel', 'Filas e jobs', 'APIs REST', 'Laravel Sanctum', 'Node.js'] },
    { group: 'Front-end', items: ['Blade', 'Tailwind CSS', 'Alpine.js', 'Bootstrap', 'jQuery', 'React', 'Next.js'] },
    { group: 'Banco de dados', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'SQLite'] },
    {
      group: 'Integrações',
      items: ['ERP (Omie)', 'PIX', 'WhatsApp (API da Meta)', 'SendGrid', 'Assinatura eletrônica (Autentique, D4Sign)'],
    },
    { group: 'Testes', items: ['PHPUnit', 'Pest', 'Playwright'] },
    { group: 'Infraestrutura', items: ['Docker', 'Docker Compose', 'Git', 'GitHub'] },
  ],
  education: [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      school: 'UVV',
      period: '2025 — em andamento',
    },
    {
      course: 'Sistemas de Informação',
      school: 'Multivix',
      period: '2023 — 2025',
      note: 'não concluído; transferência para ADS',
    },
  ],
  languages: ['Português nativo', 'Inglês intermediário (leitura e compreensão auditiva fluentes)'],
};
