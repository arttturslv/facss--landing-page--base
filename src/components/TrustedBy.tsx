/** @format */

import { motion } from "framer-motion";

import AperamIcon from "../assets/trusted/Aperam logo.png";
import GerdauIcon from "../assets/trusted/Gerdau logo.png";
import LenargeIcon from "../assets/trusted/Lenarge logo.png";
import RodeiroIcon from "../assets/trusted/Rodeiro logo.png";
import RLRIcon from "../assets/trusted/RLR logo.png";

const TrustedBy = () => {
  return (
    <section className="py-4 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-facss-light/80 text-lg">
            Confiado por times de produto líderes no mercado
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center sm:gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Company logos from Figma */}
          <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30  transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={LenargeIcon}
              alt="Lenarge"
              className="h-10 w-auto mb-2 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30  transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={RodeiroIcon}
              alt="Rodeiro"
              className="h-12 w-auto mb-2 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30  transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={GerdauIcon}
              alt="Gerdau"
              className="h-12 w-auto mb-2 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30  transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={RLRIcon}
              alt="RLR"
              className="h-12 w-auto mb-2 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-facss-dark/30  transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src={AperamIcon}
              alt="Aperam"
              className="h-12 w-auto mb-2 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
