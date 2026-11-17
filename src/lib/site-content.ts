import {
  Briefcase,
  Calculator,
  FileCheck,
  FileText,
  FolderOpen,
  Handshake,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";

/** Dados oficiais informados no briefing da Alliantie. */
export const contato = {
  whatsapp: "5511987310052", // apenas números, com DDI 55 + DDD
  telefoneExibicao: "(11) 98731-0052",
  email: "contato.alliatie@gmail.com",
  endereco: "Av. Cruzeiro do Sul, 925 - Rochdale, Osasco - SP, 06226-006",
  horario: "Segunda a sexta, 8h às 18h",
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
    titulo: "Declarações",
    resumo:
      "Preparação e acompanhamento das declarações da sua empresa com organização e atenção aos prazos.",
    icone: FileCheck,
    detalhes: [
      "Declarações e obrigações exigidas para o seu negócio",
      "Conferência das informações antes de cada entrega",
      "Orientação sobre documentos e prazos",
      "Suporte próximo durante todo o processo",
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
  {
    titulo: "Orientação Documental",
    resumo:
      "Orientação prática para você organizar, preparar e enviar os documentos à contabilidade.",
    icone: FolderOpen,
    detalhes: [
      "Explicação clara dos documentos necessários",
      "Orientação para organizar a rotina de envio",
      "Padronização das informações da empresa",
      "Acompanhamento próximo para tirar dúvidas",
    ],
  },
];

export const publicos = [
  {
    titulo: "MEIs e Autônomos",
    texto: "Abertura, regularização, declaração anual e orientação tributária sem complicação.",
  },
  {
    titulo: "Micro e Pequenas Empresas",
    texto: "Contabilidade, folha e impostos para empresas de serviços, comércio e pequenos negócios.",
  },
  {
    titulo: "Prestadores de Serviços",
    texto: "Apoio fiscal e contábil para médicos, dentistas, advogados, arquitetos, consultores e profissionais de tecnologia.",
  },
  {
    titulo: "Comércio",
    texto: "Atendimento para lojas físicas, e-commerces, distribuidores e varejistas.",
  },
  {
    titulo: "Médias e Grandes Empresas",
    texto: "Contabilidade complexa, planejamento tributário, folha, obrigações acessórias e análise financeira.",
  },
  {
    titulo: "Empresas que Estão Começando",
    texto: "Abertura de CNPJ, escolha do regime tributário e estruturação inicial do negócio.",
  },
];

export const missao =
  "Oferecer produtos e serviços de excelência, gerando valor para nossos clientes, colaboradores e parceiros, conduzindo nossos negócios com integridade, honestidade e responsabilidade, e sendo uma influência positiva na sociedade para a glória de Deus.";

export const visao =
  "Ser uma empresa reconhecida pela excelência, confiança e integridade, crescendo de forma sustentável e deixando um legado positivo na vida das pessoas, nos negócios e na sociedade.";

export const valores = [
  { titulo: "Fé em Deus", texto: "Reconhecer Deus como fonte de sabedoria e propósito." },
  { titulo: "Integridade", texto: "Fazer o que é certo, mesmo quando ninguém está vendo." },
  { titulo: "Honestidade e Transparência", texto: "Construir relações baseadas na verdade e na confiança." },
  { titulo: "Excelência", texto: "Buscar qualidade e melhoria contínua em tudo o que fazemos." },
  { titulo: "Respeito às Pessoas", texto: "Tratar clientes, colaboradores e parceiros com dignidade." },
  { titulo: "Serviço", texto: "Colocar as necessidades das pessoas no centro das nossas decisões." },
  { titulo: "Responsabilidade", texto: "Cumprir compromissos e assumir as consequências das nossas decisões." },
  { titulo: "Generosidade", texto: "Usar os recursos e resultados do negócio também para abençoar pessoas e contribuir com a sociedade." },
  { titulo: "Justiça", texto: "Agir com equilíbrio, ética e imparcialidade." },
  { titulo: "Família e Comunidade", texto: "Valorizar relacionamentos saudáveis e contribuir para o desenvolvimento das pessoas." },
];

export const diferenciais = [
  { titulo: "Qualidade", texto: "Cada entrega é feita com dedicação, cuidado e comprometimento." },
  { titulo: "Disposição para ajudar", texto: "Buscamos sempre a melhor forma de atuar e orientar cada cliente." },
  { titulo: "Atendimento próximo", texto: "Você fala com quem conhece a sua empresa e acompanha a sua rotina." },
  { titulo: "Confiança", texto: "Relações duradouras construídas com responsabilidade e transparência." },
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
  { titulo: "2008", texto: "Deixamos o emprego para construir um caminho próprio, começando em casa e com apenas um cliente." },
  { titulo: "Confiança", texto: "O escritório cresceu de forma sólida pela divulgação boca a boca e pela qualidade do atendimento." },
  { titulo: "Hoje", texto: "Seguimos com perseverança e gratidão, construindo relacionamentos duradouros com nossos clientes." },
];
