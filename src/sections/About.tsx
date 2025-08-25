"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tag";

const textBlocks = [
  { content: "Jägermeister Design Awards", highlight: true },
  { content: " is a celebration of excellence and beauty in design. " },
  { content: "We are thrilled to announce the launch", highlight: true },
  { content: " of the Jägermeister Design Awards, a prestigious event that recognizes and honors outstanding design talent across various disciplines in South Africa. " },
  { content: "This competition aims to celebrate creativity, innovation,", highlight: true },
  { content: " and the impact of designers who push the boundaries of their craft." },
];

export default function About() {
  return (
    <section className="py-28 lg:py-30">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Jägermeister Design Awards</Tag>
        </div>

        <div className="text-xl md:text-2xl lg:text-4xl text-center font-medium mt-10 leading-relaxed">
          {textBlocks.map((block, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={block.highlight ? "text-jaegermeister-green font-semibold" : "text-white/70"}
            >
              {block.content}
            </motion.span>
          ))}

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: textBlocks.length * 0.1 }}
            className="text-orange-400 block mt-6"
          >
            Join us in honoring the best in design and innovation.
          </motion.span>
        </div>
      </div>
    </section>
  );
}
