/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { FormData } from "../types";
import map from "../assets/map.gif";
import { Mail, User, BriefcaseBusiness, Text, HelpingHand } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    role: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Form data:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-12 bg-facss-dark relative overflow-hidden w-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-left mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-fira-sans font-bold text-white mb-2 sm:mb-4">
            Contato
          </h2>
          <p className="text-md sm:text-lg font-geist font-light text-facss-light max-w-5xl  leading-relaxed">
            Entre em contato para saber mais sobre nossos produtos, serviços e
            como a FACSS pode ser a{" "}
            <span className="text-facss-green-transparent">
              solução digital
            </span>{" "}
            dos seus problemas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Contact Background Image */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
              <img
                src={map}
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-facss-dark/80 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent,#0E131F)]" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className=" space-y-4 sm:space-y-4">
              {/* Name Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="flex items-center space-x-2 text-white font-geist font-light text-sm">
                  <User size={16} />
                  <span>Seu nome</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="facss-input w-full px-4 py-3 rounded-md text-sm"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="flex items-center space-x-2 text-white font-geist font-light text-sm">
                  <Mail size={16} />
                  <span>Seu e-mail</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contato@gmail.com"
                  className="facss-input w-full px-4 py-3 rounded-md text-sm"
                  required
                />
              </motion.div>

              {/* Role Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="flex items-center space-x-2 text-white font-geist font-light text-sm">
                  <BriefcaseBusiness size={16} />
                  <span>Seu cargo</span>
                </label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="facss-input w-full px-4 py-3 rounded-md text-sm pr-10 bg-transparent border border-facss-gray/20 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-facss-green/50"
                    required
                  >
                    <option
                      value=""
                      disabled
                      className="bg-facss-dark text-white"
                    >
                      Escolha seu cargo
                    </option>
                    <option
                      value="Estudante"
                      className="bg-facss-dark text-white"
                    >
                      Estudante
                    </option>
                    <option value="CEO" className="bg-facss-dark text-white">
                      CEO
                    </option>
                    <option value="CFO" className="bg-facss-dark text-white">
                      CFO
                    </option>
                    <option
                      value="Marketing"
                      className="bg-facss-dark text-white"
                    >
                      Marketing
                    </option>
                    <option
                      value="Designer"
                      className="bg-facss-dark text-white"
                    >
                      Designer
                    </option>
                    <option
                      value="Desenvolvedor"
                      className="bg-facss-dark text-white"
                    >
                      Desenvolvedor
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="flex items-center space-x-2 text-white font-geist font-light text-sm">
                  <HelpingHand size={16} />
                  <span>Como podemos te ajudar?</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva sua dúvida"
                  rows={5}
                  className="facss-input w-full px-4 py-3 rounded-md text-sm resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="facss-button w-full text-white font-geist font-medium px-6 py-2 rounded-md text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Enviar mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
