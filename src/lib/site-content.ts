import {
  Briefcase,
  Calculator,
  FileText,
  Handshake,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Dados de contato da Alliantie.
 * ATENÇÃO: valores provisórios — substituir pelos dados reais do escritório.
 */
export const contato = {
  whatsapp: "5511999999999", // apenas números, com DDI 55 + DDD
  telefoneExibicao: "(11) 99999-9999",
  email: "contato@alliantie.com.br",
  endereco: "Av. Cruzeiro do Sul, 925 - Rochdale, Osasco - SP, 06226-006",
  horario: "Segunda a sexta, 8h às 18h",
  instagram: "https://instagram.com/",
};

export function whatsappLink(mensagem?: string) {
  const base = `https://wa.me/${contato.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#para-quem", label: "Para Quem" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#contato", label: "Contato" },
] as const;

export type Servico = {
  titulo: string;
  resumo: string;
  icone: LucideIcon;
  detalhes: string[];
};

export const servicos: Servico[] = [
  {
    titulo: "Contabilidade",
    resumo:
      "Gestão contábil completa e organizada para manter sua empresa em dia e apoiar melhores decisões.",
    icone: Calculator,
    detalhes: [
      "Escrituração contábil e conciliações mensais",
      "Balancetes, DRE e balanço patrimonial",
      "Relatórios gerenciais claros para decidir com segurança",
      "Atendimento próximo para tirar suas dúvidas",
    ],
  },
  {
    titulo: "Fiscal",
    resumo:
      "Gestão das obrigações fiscais da sua empresa com segurança, organização e atenção aos prazos.",
    icone: FileText,
    detalhes: [
      "Apuração de impostos (Simples Nacional, Lucro Presumido e Real)",
      "Entrega de declarações e obrigações acessórias",
      "Controle de prazos para evitar multas",
      "Planejamento tributário para pagar apenas o justo",
    ],
  },
  {
    titulo: "Departamento Pessoal",
    resumo:
      "Cuidado com as rotinas trabalhistas e obrigações da sua empresa de forma segura e organizada.",
    icone: Users,
    detalhes: [
      "Admissões, demissões e folha de pagamento",
      "Férias, 13º salário e encargos",
      "eSocial, FGTS e INSS em dia",
      "Orientação sobre a legislação trabalhista",
    ],
  },
  {
    titulo: "Abertura de Empresas",
    resumo:
      "Orientação e suporte em todas as etapas para você começar seu negócio com segurança e tranquilidade.",
    icone: Briefcase,
    detalhes: [
      "Escolha do melhor tipo de empresa e regime tributário",
      "Registro do CNPJ, inscrições e alvarás",
      "Abertura de MEI e transição de MEI para ME",
      "Acompanhamento do primeiro dia ao primeiro balanço",
    ],
  },
  {
    titulo: "Alterações e Encerramento",
    resumo:
      "Suporte nos processos de alteração ou encerramento da sua empresa com agilidade e orientação.",
    icone: RefreshCw,
    detalhes: [
      "Alteração de sócios, endereço, atividade e capital",
      "Mudança de regime tributário",
      "Baixa de empresas com toda a documentação regular",
      "Regularização de pendências fiscais",
    ],
  },
  {
    titulo: "Assessoria e Consultoria",
    resumo:
      "Orientação próxima e estratégica para ajudar sua empresa a tomar decisões com mais segurança.",
    icone: Handshake,
    detalhes: [
      "Análise financeira e de custos do negócio",
      "Apoio na precificação e no planejamento",
      "Reuniões periódicas de acompanhamento",
      "Um parceiro de confiança para crescer com você",
    ],
  },
];

export const publicos = [
  {
    titulo: "MEI e Autônomos",
    texto: "Formalize seu trabalho e mantenha o CNPJ em dia, sem complicação.",
  },
  {
    titulo: "Profissionais Liberais",
    texto: "Médicos, advogados, dentistas e consultores pagando o imposto justo.",
  },
  {
    titulo: "Pequenas e Médias Empresas",
    texto: "Rotina contábil, fiscal e trabalhista completa para você focar no negócio.",
  },
  {
    titulo: "Quem vai Empreender",
    texto: "Do primeiro passo à abertura, com orientação em cada etapa.",
  },
];

export const valores = [
  {
    titulo: "Excelência",
    texto: "Fazemos cada entrega com cuidado, precisão e atenção aos detalhes.",
  },
  {
    titulo: "Confiança",
    texto: "Transparência e responsabilidade em cada número da sua empresa.",
  },
  {
    titulo: "Fé",
    texto: "Guiados por Deus, servimos com integridade, propósito e proximidade.",
  },
];
