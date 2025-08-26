/** @format */

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "../constants/images";
import LenargeIcon from "../assets/trusted/Lenarge logo.png";
import GerdauIcon from "../assets/trusted/Gerdau logo.png";
import AperamIcon from "../assets/trusted/Aperam logo.png";

interface StatCardProps {
  targetNumber: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({
  targetNumber,
  suffix,
  label,
  delay,
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 segundos para todas as animações
      const steps = 60; // 60 steps para suavidade
      const increment = targetNumber / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "BI";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "MI";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-fira-sans font-bold text-white mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {formatNumber(count)}
        {suffix}
      </motion.div>
      <p className="text-facss-light/80 text-sm md:text-base font-geist font-light">
        {label}
      </p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: number;
  avatar?: string;
  companyLogo?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  delay,
  avatar,
  companyLogo,
}) => {
  return (
    <motion.div
      className="facss-card p-6 rounded-lg h-86 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {companyLogo && (
        <div className="mb-4">
          <img src={companyLogo} alt={company} className="h-8 w-auto mb-4" />
        </div>
      )}

      <blockquote className="text-facss-light text-sm leading-relaxed mb-6 flex-1">
        "{quote}"
      </blockquote>

      <div className="flex items-center h-12 ">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-facss-green/30 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
        <div>
          <p className="text-white font-fira-sans font-medium text-sm">
            {author}
          </p>
          <p className="text-facss-light/80 font-light text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Results: React.FC = () => {
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
            Resultados
          </h2>
          <p className="text-md sm:text-lg font-geist font-light text-facss-gray max-w-5xl  leading-relaxed">
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

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatCard
            targetNumber={1000000}
            suffix="+"
            label="Usuários únicos por ano"
            delay={0}
          />
          <StatCard
            targetNumber={190000}
            suffix="+"
            label="Requisições de API por dia"
            delay={0.1}
          />
          <StatCard
            targetNumber={1000000000}
            suffix="+"
            label="Reais trafegados por ano em nossos apps"
            delay={0.2}
          />
          <StatCard
            targetNumber={14}
            suffix="+"
            label="Apps de sucesso criados até hoje"
            delay={0.3}
          />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TestimonialCard
            quote="Trabalhar com a FACSS foi uma das decisões mais estratégicas que tomamos. A excelência técnica, o comprometimento com resultados e a visão inovadora que a equipe entrega são diferenciais raros no mercado. Recomendo fortemente para qualquer empresa que busca soluções sólidas e confiáveis."
            author="Guilherme Silva"
            role="CEO"
            company="Lenarge"
            delay={0}
            avatar={IMAGES.ceoPortrait1}
            companyLogo={LenargeIcon}
          />
          <TestimonialCard
            quote="Escolher a FACSS como parceira foi um divisor de águas para nosso projeto. Desde o primeiro contato, ficou claro o nível e o foco genuíno em entender nossas necessidades. O time não apenas entregou o que prometeu, mas superou expectativas em prazos e qualidade. Sem dúvida, uma parceria que agregou muito valor."
            author="Felipe e Silva"
            role="CFO"
            company="Gerdau"
            delay={0.2}
            avatar={IMAGES.ceoPortrait2}
            companyLogo={GerdauIcon}
          />
          <TestimonialCard
            quote="A experiência com a FACSS foi extremamente positiva. Encontramos uma equipe preparada, com domínio técnico impressionante e uma abordagem consultiva que fez toda a diferença. A tranquilidade que estávamos em boas mãos nos permitiu focar em outras áreas do negócio. Recomendo sem reservas."
            author="Gustavo Vitorino S."
            role="CEO"
            company="Aperam"
            delay={0.4}
            avatar={IMAGES.ceoPortrait3}
            companyLogo={AperamIcon}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
