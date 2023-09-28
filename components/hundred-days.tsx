"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import HundredPattern from "./hundred-pattern";
import { hundredDaysData } from "@/lib/data";

export default function HundredDays() {
  const { ref } = useSectionInView("#100Dias", 1);

  return (
    <section id="100Dias" ref={ref} className="sm:mb-20 scroll-mt-28">
      <SectionHeading># 100 Dias de Código 📚 💻 </SectionHeading>

      <p
        className="px-4 py-4 text-xl font-bold !leading-[1.5] sm:text-2xl
        mb-18 max-w-[50rem] text-center sm:mb-0 text-[#f3f3f3]"
      >
        <span className="font-bold">Este projetinho foi feito durante os</span>{" "}
        <span className="text-[#782BF1]">#100DiasDeCodigo! </span>
        <span>
          Não sabe o que é isso ? A gente vai resumir o que der aqui, mas o
          Daniel explica
          <span>
            <a
              className=" hover:text-[#782BF1] hover:underline italic "
              href="https://www.100diasdecodigo.dev/"
              target="_blank"
            >
              {" "}
              bem melhor.
            </a>
          </span>
        </span>{" "}
        <span className="font-bold">
          Podemos resumir os #100Dias em três simples passos:
        </span>
      </p>

      <div
        className="px-4 py-4 text-xl font-bold !leading-[1.5] sm:text-2xl
        mb-20 max-w-[50rem] text-center sm:mb-0 text-[#f3f3f3]"
      >
        {hundredDaysData.map((item, idx) => (
          <HundredPattern
            key={idx}
            data_queue={item.queue}
            data_title={item.title}
            data_details={item.details}
          />
        ))}
      </div>

      {/* Esse é o "botão mais preguiçoso feito no planeta Terra*/}

      <div className="flex flex-row justify-center mb-20">
        <a
          href="https://twitter.com/intent/tweet?text=Eu%20publicamente%20me%20comprometo%20aos%20desafios%20do%20100%20Dias%20De%20Codigo%20come%C3%A7ando%20hoje!&url=https://100diasdecodigo.dev&hashtags=100DiasDeCodigo&via=he4rtdevs%20@danielhe4rt"
          target="_blank"
          className="group bg-[#782BF1] text-[#f3f3f3] font-bold px-7 py-3
    flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
    hover:bg-[#782BF1] active:scale-105 transition"
        >
          Tweete pra começar o desafio!
        </a>
      </div>
    </section>
  );
}
