/** @format */

import React, { type JSX } from "react";
import { motion } from "framer-motion";
import { FEATURES } from "../constants/data";
import { IMAGES } from "../constants/images";
import { Lock, TrendingUp, Users } from "lucide-react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      className="facss-card p-6 rounded-lg h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(19,162,85,0.2)",
      }}
    >
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-12 h-12 bg-facss-green/20 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-fira-sans font-bold text-white mb-2">
          {title}
        </h3>
      </div>
      <p className="text-facss-light/70 font-light font-geist text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-0 sm:py-12 bg-facss-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-left mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-fira-sans font-bold text-white mb-2 sm:mb-4">
            Soluções
          </h2>
          <p className="text-md sm:text-lg font-geist font-light text-facss-light max-w-5xl  leading-relaxed">
            Na FACSS, unimos{" "}
            <span className="text-facss-green-transparent">
              profundidade técnica
            </span>
            , visão estratégica e compromisso com qualidade para desenvolver
            aplicativos que entregam resultado —{" "}
            <span className="text-facss-green-transparent">
              hoje e no futuro.
            </span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <FeatureCard
            icon={<Users />}
            title="Equipe Especializada"
            description="Trabalhamos com um conjunto restrito de tecnologias, justamente para garantir domínio completo em tudo que desenvolvemos, garantindo ainda mais as nossas entregas."
            delay={0}
          />
          <FeatureCard
            icon={<TrendingUp />}
            title="Apps prontos para escalar"
            description="Desde o planejamento técnico até a escolha da infraestrutura, tudo é pensado para crescer junto com o seu negócio. Arquiteturas resilientes, componentes reutilizáveis e infraestrutura elástica permitem que seu app atenda desde o primeiro usuário até milhões — sem recomeçar do zero."
            delay={0.2}
          />
          <FeatureCard
            icon={<Lock />}
            title="Segurança de ponta a ponta"
            description="Com uma equipe multidisciplinar, desenvolvemos em todas as pessoas habilidades de desenvolvimento seguro. Gerimos com afinco as tecnologias ao qual nossos apps dependem, antecipando-nos à todas as vulnerabilidades detectadas ao longo do tempo. Sendo assim, seu projeto sempre estará protegido."
            delay={0.4}
          />
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 w-px h-px bg-transparent rounded-full facss-glow animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-px h-px bg-transparent rounded-full facss-glow-strong animate-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  );
};

export default Features;
