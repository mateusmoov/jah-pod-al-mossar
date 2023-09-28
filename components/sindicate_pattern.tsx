"use client";
import { useRef } from "react";
import { sindicatoData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof sindicatoData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0  group "
    >
      <section
        ref={ref}
        className=" bg-gray-950 max-w-[42rem] border border-black/[0.5] 
    overflow-hidden sm:pr-8 relative sm:h-[23rem] 
     hover:bg-gray-800 transition sm:group-even:pl-8 rounded-lg"
      >
        <div className="pt-4  pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-3xl font-bold text-[#782BF1]">{title}</h3>
          <p className="mt-2 leading-relaxed  font-bold text-[#f3f3f3]">
            {description}
          </p>
          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#f3f3f3] rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute  hidden  sm:block top-0.5 bottom-0.5 -right-20 w-[25rem] rounded-t-lg shadow-2xl transition
    group-hover: scale-[1.04]
     group-hover:-translate-x-3
     group hover:translate-y-3
     group-hover:-rotate-2
      
     group-even:group-hover:translate-x-3
     group even:group-hover:translate-y-3
     group-even:group-hover:rotate-2

     group-even:-right-[initial]
     group-even:-left-20"
        />
      </section>
    </motion.div>
  );
}
