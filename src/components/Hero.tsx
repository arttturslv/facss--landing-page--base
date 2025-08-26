/** @format */

import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../constants/images";

import mockPhone from "../assets/phone.png";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="max-w-7xl min-h-screen flex items-center w-full justify-center overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-px h-px bg-transparent rounded-full facss-glow-strong animate-glow" />
      <div
        className="absolute top-1/3 right-1/4 w-px h-px bg-transparent rounded-full facss-glow animate-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-px h-px bg-transparent rounded-full facss-glow animate-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="sm:flex-row flex-col-reverse  sm:gap-12 flex items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-4xl lg:text-4xl font-fira-sans font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformamos{" "}
              <span className="text-facss-green-transparent">ideias</span> em
              apps escaláveis e seguros
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-geist font-light text-facss-light leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Do{" "}
              <span className="text-facss-green-transparent">
                design à infraestrutura
              </span>
              , criamos{" "}
              <span className="text-facss-green-transparent">
                soluções digitais
              </span>{" "}
              robustas, prontas para crescer com o{" "}
              <span className="text-facss-green-transparent">seu negócio</span>.
            </motion.p>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            className="relative "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-[70%] sm:w-full max-w-lg mx-auto">
              {/* Main image from Figma */}
              <motion.div
                className="relative flex"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={mockPhone} alt="FACSS Development" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-facss-green/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-facss-green/20 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="sm:block hidden absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-facss-green rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-facss-green rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
