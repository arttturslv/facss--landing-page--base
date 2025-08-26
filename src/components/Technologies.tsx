/** @format */

import React from "react";
import { motion } from "framer-motion";

import FirebaseIcon from "../assets/stack/Firebase logo.png";
import GeminiIcon from "../assets/stack/Gemini logo.png";
import GoogleIcon from "../assets/stack/Google logo.png";
import CloudIcon from "../assets/stack/Google Gloud logo.png";
import IonicIcon from "../assets/stack/Ionic logo.png";
import ReactIcon from "../assets/stack/React logo.png";
import TailwindIcon from "../assets/stack/Tailwind logo.png";
import TypescriptIcon from "../assets/stack/TypeScript logo.png";

const Technologies: React.FC = () => {
  const technologies = [
    { name: "Google", src: GoogleIcon },
    { name: "Google Cloud", src: CloudIcon },
    { name: "Firebase", src: FirebaseIcon },
    { name: "Gemini", src: GeminiIcon },
    { name: "Tailwind CSS", src: TailwindIcon },
    { name: "React", src: ReactIcon },
    { name: "TypeScript", src: TypescriptIcon },
    { name: "Ionic", src: IonicIcon },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section className="py-16 w-full bg-facss-dark/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-facss-light/80 text-lg">
            Utilizando as melhores tecnologias do mercado - Parceiros da Google
          </p>
        </motion.div>

        {/* Infinite horizontal scroll container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-8 md:gap-12 lg:gap-16"
            animate={{
              x: [0, -1000], // Adjust based on content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // 30 seconds for one complete cycle
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30 transition-all duration-300 group flex-shrink-0"
                whileHover={{
                  scale: 1.05,
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-12 w-auto object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ maxWidth: "80px", maxHeight: "48px" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-facss-dark/50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-facss-dark/50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Technologies;
