"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { stackData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

export default function Stack() {
  const { ref } = useSectionInView("Stack", 1);
  return (
    <section
      ref={ref}
      id="stack"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading> Stackzinha do site!</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-[#f3f3f3]">
        {stackData.map((stack, index) => (
          <motion.li
            className="bg-[#782BF1] border border-black/[0.1] rounded-full px-3 py-2 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {stack}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
