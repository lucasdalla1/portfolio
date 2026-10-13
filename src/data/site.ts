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

export type Highlight = {
  /** Frase curta em destaque, no início do item */
  title: string;
  /** Impacto em uma frase; sempre visível */
  summary: string;
  /** Detalhes técnicos, exibidos ao expandir */
  details?: string[];
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** Contexto do cargo, em uma ou duas frases */
  description: string;
  highlights: Highlight[];
  /** Entregas só citadas, numa linha */
  also?: string;
  stack: string[];
};

const mindtec = { company: 'Mindtec', companyUrl: 'https://mindtec.com.br/' };

export const experience: Experience[] = [
  {
    period: 'jul 2025 — hoje',
    role: 'Desenvolvedor Júnior',
    ...mindtec,
    description:
      'Sistemas de gestão para cooperativas e instituições de crédito, em Laravel e SQL Server. Atendimento independente a um cliente: identificação de necessidades no fluxo de trabalho dos usuários, proposta de melhorias, levantamento de requisitos e entrega.',
    highlights: [
      {
        title: 'Votação on-line da assembleia geral',
        summary:
          'projeto novo, com a maior parte do código de minha autoria. No dia, ~200 votos por pauta em janelas de 5 minutos, com transmissão ao vivo.',
        details: [
          'Acesso sem login por código de uso único, enviado por e-mail ou WhatsApp, com proteção contra a descoberta de cadastros.',
          'Voto único garantido por restrição no banco e votação processada no servidor.',
          'Limite de envios por associado em vez de por IP, para não bloquear quem estava na mesma rede Wi-Fi do evento.',
          'Teste de carga na véspera, com até ~300 requisições simultâneas, e rotinas agendadas pausadas durante a assembleia.',
        ],
      },
      {
        title: 'Integração resiliente com ERP',
        summary: 'envio e baixa de débitos e conciliação de PIX rodando em filas, sem lançamentos manuais.',
        details: [
          'Limite de requisições compartilhado entre processos, abaixo do teto da API, e operações idempotentes para nunca lançar duas vezes.',
          'Tratamento do bloqueio cumulativo da API com consulta prévia, espera controlada e gravação parcial.',
          'Worker com recuperação automática e alertas por e-mail sem spam, criados depois de um incidente de fila parada sem aviso.',
        ],
      },
      {
        title: 'Segurança e atualização em 5 sistemas',
        summary:
          'correção de todas as vulnerabilidades críticas e altas de uma varredura de segurança e atualização para Laravel 13 e PHP 8.5.',
        details: [
          'Cabeçalhos de segurança padronizados nos 5 sistemas e redirecionamentos corrigidos atrás de proxy reverso.',
          'Upgrade de duas versões do framework ao mesmo tempo, com imagem Docker incluindo os drivers do SQL Server.',
          'Testes que deixaram de rodar em silêncio depois do upgrade, identificados e corrigidos.',
        ],
      },
      {
        title: 'Testes automatizados em sistemas que não tinham nenhum',
        summary:
          'introdução da prática e da infraestrutura para rodá-los sem depender do banco real, com cobertura de testes nas novas entregas.',
        details: [
          'Banco em memória que emula os schemas do SQL Server.',
          'Proteções para a suíte nunca acessar a rede nem o banco de desenvolvimento.',
        ],
      },
    ],
    also:
      'cadastro com validação bancária e PIX, WhatsApp pela API oficial da Meta, migração da entidade central de 2 sistemas e adequação ao CNPJ alfanumérico em 6 sistemas.',
    stack: ['PHP', 'Laravel', 'SQL Server', 'Filas', 'Pest', 'Docker', 'Tailwind', 'Alpine.js', 'Bootstrap', 'jQuery'],
  },
  {
    period: 'set 2023 — jun 2025',
    role: 'Estagiário de Desenvolvimento',
    ...mindtec,
    description: 'Evolução de telas em módulos existentes, no início, à construção de sistemas inteiros, no fim do estágio.',
    highlights: [
      {
        title: 'Sistema de microcrédito',
        summary: 'desenvolvimento da maior parte da esteira de crédito, a partir do planejamento de um desenvolvedor sênior.',
        details: [
          'Fluxo completo: proposta, consulta de endividamento, ficha cadastral, análise socioeconômica, comitê de aprovação e contrato.',
          '21 das 26 telas principais e 46 das 95 tabelas do sistema.',
          'Cadastros-base, perfis com escopo territorial e linhas de crédito configuráveis.',
        ],
      },
      {
        title: 'Primeiras entregas em produção',
        summary: 'gestão de usuários, edição de clientes e financeiro de débitos, e depois um redesign aplicado em 4 sistemas.',
      },
    ],
    also: 'upgrade para PHP 8.3 e Laravel 11, dashboard com gráficos e validação de assinaturas eletrônicas (D4Sign).',
    stack: ['PHP', 'Laravel', 'SQL Server', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
];
