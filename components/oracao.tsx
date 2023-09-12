"use client";
import React from 'react'
import {motion} from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function Oracao() {
  const {ref} = useSectionInView("Oração",1);  


  return (
    <motion.section 
    ref={ref}
    className='mb-28 maw-w-[45rem] leading-8 sm:mb-20 scroll-mt-28'
    initial ={{opacity :0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    id="oração"
    >
       <div className='mb-10 mt-4 px-4 flex justify-center'>
    <SectionHeading>Oração pro Al-mosso🙏</SectionHeading>    
    </div>

      <p className='px-4 py-4 text-2xl font-bold !leading-[1.5] sm:text-2xl
        mb-28 max-w-[50rem] text-center sm:mb-0 text-[#f3f3f3]'>
      <span className='font-bold'>O al-mosso aceita</span> <span className='text-[#782BF1]'> todos </span>
      <span>aqueles que o procuram. Só basta você aceitá-lo em seu <span  className='text-[#782BF1]'>estômago.</span></span>{" "}
      <span className='font-bold'>Deixe seu agradecimento por ele todo dia com esta pequena oração.</span>
      </p>

      <p className='px-4 py-1 text-1xl font-medium !leading-[1.5] sm:text-1xl
        mb-28 max-w-[50rem] text-center sm:mb-0 text-gray-500 italic'>
            <span className='!leading-[2.0]'>Ó, Senhor das Panelas e Fogões, escute a minha súplica neste momento de fome que me consome.</span><br/>
            <br/>
            <span>Pão nosso que estais no forno a assar,</span><br/>
            <span>Santificado seja o queijo a derreitar.</span><br/>
            <span>Dai-nos hoje o arroz perfeito e a feijoada saborosa,</span><br/>
            <span>E perdoai nossas dietas, por vezes, perigosas.</span><br/>
            <br/>
            <span>Assim como o maná caiu do céu, quase mágico,</span><br/>
            <span>Que o bife à parmegiana chegue macio e prático.</span><br/>
            <span>Não nos deixeis cair em tentação, amém,</span><br/>
            <span>De recusar sobremesa, pois seria um desdém.</span><br/>
            <br/>
            <span>Abençoai, ó Senhor, a cozinheira abnegada,</span><br/>
            <span>Com amor e dedicação, a refeição sagrada é preparada.</span><br/>
            <span>E que assim seja, enquanto o estômago reclama,</span><br/>
            <span>Nosso almoço de todos os dias, a nossa maior chama.</span><br/>	
            <br/>
            <span>Amém! 😇🙏 </span>
        </p>
    </motion.section>
  )
}
