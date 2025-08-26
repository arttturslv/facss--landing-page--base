/** @format */

// Tipos para os componentes da landing page

export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  role: string;
  message: string;
}

export interface FormField {
  name: keyof FormData;
  label: string;
  icon: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
}
