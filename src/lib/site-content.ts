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
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/para-quem", label: "Para Quem" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
] as const;

export const mapaEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`;
export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contato.endereco)}`;

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


export const diferenciais = [
  { titulo: "Atendimento próximo", texto: "Você fala com quem cuida da sua empresa, sem robôs nem filas." },
  { titulo: "Prazos em dia", texto: "Controle rigoroso das obrigações para evitar multas e surpresas." },
  { titulo: "Linguagem clara", texto: "Explicamos os números de um jeito simples, para você decidir melhor." },
  { titulo: "Valores cristãos", texto: "Integridade, ética e transparência guiam cada atendimento." },
];

export const faq = [
  { pergunta: "Como funciona a troca de contador?", resposta: "É simples e sem burocracia para você. Nós cuidamos do contato com o contador anterior, da transferência dos documentos e da regularização do que for necessário." },
  { pergunta: "Vocês atendem empresas de qualquer cidade?", resposta: "Sim. Nosso escritório fica em Osasco (SP), mas atendemos clientes de todo o Brasil de forma digital, com reuniões online sempre que precisar." },
  { pergunta: "Quanto custa abrir uma empresa?", resposta: "O valor depende do tipo de empresa, da atividade e da cidade. Entre em contato e preparamos um orçamento sem compromisso." },
  { pergunta: "Qual o melhor regime tributário para mim?", resposta: "Depende do faturamento, da atividade e dos custos do negócio. Fazemos uma análise para indicar o regime em que você paga apenas o imposto justo." },
  { pergunta: "Vocês atendem MEI?", resposta: "Sim. Ajudamos na abertura, na declaração anual e também na transição de MEI para ME quando o negócio cresce." },
  { pergunta: "Como envio meus documentos?", resposta: "Você pode enviar tudo de forma digital, por WhatsApp ou e-mail. Indicamos a melhor rotina para a sua empresa." },
];

export const linksUteis = [
  { titulo: "Receita Federal", texto: "Serviços e consultas de CNPJ e CPF", href: "https://www.gov.br/receitafederal" },
  { titulo: "Simples Nacional", texto: "Portal do Simples e emissão do DAS", href: "https://www8.receita.fazenda.gov.br/simplesnacional/" },
  { titulo: "Portal do Empreendedor", texto: "Abertura e gestão do MEI", href: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor" },
  { titulo: "eSocial", texto: "Obrigações trabalhistas e previdenciárias", href: "https://www.gov.br/esocial" },
  { titulo: "Sefaz SP", texto: "Secretaria da Fazenda de São Paulo", href: "https://portal.fazenda.sp.gov.br/" },
  { titulo: "NFS-e Osasco", texto: "Emissão de nota fiscal de serviço", href: "https://www.osasco.sp.gov.br/" },
  { titulo: "FGTS – Caixa", texto: "Consultas e serviços do FGTS", href: "https://www.caixa.gov.br/beneficios-trabalhador/fgts" },
  { titulo: "Junta Comercial SP", texto: "Registro e alterações de empresas", href: "https://www.jucesp.sp.gov.br/" },
];

/** Parceiros — logos provisórios (aguardando imagens reais). Adicione `logo` com a URL da imagem. */
export const parceiros: { nome: string; area: string; logo?: string }[] = [
  { nome: "Parceiro 1", area: "Advocacia empresarial" },
  { nome: "Parceiro 2", area: "Consultoria financeira" },
  { nome: "Parceiro 3", area: "Serviços bancários" },
  { nome: "Parceiro 4", area: "Seguros" },
  { nome: "Parceiro 5", area: "Tecnologia" },
  { nome: "Parceiro 6", area: "Marketing" },
];

export const trajetoria = [
  { titulo: "O começo", texto: "Nasce a Alliantie, com o propósito de servir empresas com excelência e fé." },
  { titulo: "Crescimento", texto: "Ampliamos a equipe e os serviços para acompanhar cada etapa dos clientes." },
  { titulo: "Hoje", texto: "Uma aliança com empresas de diversos segmentos, em todo o Brasil." },
];
