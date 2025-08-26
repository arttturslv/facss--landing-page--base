/** @format */

/** @format */
import type {
  NavItem,
  Feature,
  Stat,
  Testimonial,
  Company,
  FormField,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
  { name: "Inicio", href: "#home" },
  { name: "Soluções", href: "#solutions" },
  { name: "Contato", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    icon: "👥",
    title: "Equipe Especializada",
    description:
      "Trabalhamos com um conjunto restrito de tecnologias, justamente para garantir domínio completo em tudo que desenvolvemos, garantindo ainda mais as nossas entregas.",
  },
  {
    icon: "📈",
    title: "Apps prontos para escalar",
    description:
      "Desde o planejamento técnico até a escolha da infraestrutura, tudo é pensado para crescer junto com o seu negócio. Arquiteturas resilientes, componentes reutilizáveis e infraestrutura elástica permitem que seu app atenda desde o primeiro usuário até milhões — sem recomeçar do zero.",
  },
  {
    icon: "🔒",
    title: "Segurança de ponta a ponta",
    description:
      "Com uma equipe multidisciplinar, desenvolvemos em todas as pessoas habilidades de desenvolvimento seguro. Gerimos com afinco as tecnologias ao qual nossos apps dependem, antecipando-nos à todas as vulnerabilidades detectadas ao longo do tempo. Sendo assim, seu projeto sempre estará protegido.",
  },
];

export const STATS: Stat[] = [
  { number: "0K", label: "Usuários únicos por ano" },
  { number: "0K", label: "Requisições de API por dia" },
  { number: "0K", label: "Reais trafegados por ano em nossos apps" },
  { number: "0", label: "Apps de sucesso criados até hoje" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Trabalhar com a FACSS foi uma das decisões mais estratégicas que tomamos. A excelência técnica, o comprometimento com resultados e a visão inovadora que a equipe entrega são diferenciais raros no mercado. Recomendo fortemente para qualquer empresa que busca soluções sólidas e confiáveis.",
    author: "Guilherme Silva",
    role: "CEO",
    company: "TechCorp",
  },
  {
    quote:
      "Escolher a FACSS como parceira foi um divisor de águas para nosso projeto. Desde o primeiro contato, ficou claro o nível e o foco genuíno em entender nossas necessidades. O time não apenas entregou o que prometeu, mas superou expectativas em prazos e qualidade.",
    author: "Felipe e Silva",
    role: "CFO",
    company: "Inovação Ltda",
  },
  {
    quote:
      "A experiência com a FACSS foi extremamente positiva. Encontramos uma equipe preparada, com domínio técnico impressionante e uma abordagem consultiva que fez toda a diferença. A tranquilidade que estávamos em boas mãos nos permitiu focar em outras áreas do negócio.",
    author: "Gustavo Vitorino S.",
    role: "CEO",
    company: "Digital Solutions",
  },
];

export const COMPANIES: Company[] = [
  { name: "Google", logo: "🔍" },
  { name: "Google Cloud", logo: "☁️" },
  { name: "MongoDB", logo: "🍃" },
  { name: "Gemini", logo: "🤖" },
  { name: "Tailwind CSS", logo: "🎨" },
  { name: "React", logo: "⚛️" },
  { name: "TypeScript", logo: "📘" },
  { name: "Ionic", logo: "📱" },
];

export const FORM_FIELDS: FormField[] = [
  {
    name: "name",
    label: "Seu nome",
    icon: "👤",
    placeholder: "Digite seu nome completo",
    type: "text",
  },
  {
    name: "email",
    label: "Seu e-mail",
    icon: "📧",
    placeholder: "contato@gmail.com",
    type: "email",
  },
  {
    name: "subject",
    label: "Assunto",
    icon: "ℹ️",
    placeholder: "Fale brevemente sobre o conteúdo",
    type: "text",
  },
  {
    name: "role",
    label: "Seu cargo",
    icon: "💼",
    placeholder: "CEO",
    type: "text",
  },
];

export const CONTACT_INFO = {
  location: "São Paulo, Brasil",
  email: "contato@facss.com.br",
  phone: "+55 (11) 99999-9999",
};
