"use client";
import React from 'react';
import Image from 'next/image';
import profile from '@/public/profile.png';
import {motion} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {

  const {ref} = useSectionInView("JPA", 0.5);  


  return (
   <section id="jpa" ref={ref} className='mb-1 maw-w-[50rem text-center] scroll-mt-[100rem]'>
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <motion.div
         initial={{opacity:0, scale :0}}
         animate = {{opacity: 1, scale: 1}}
         transition ={{
            type:"tween",
            duration:0.2,
         }}
        
        >
        <Image src={profile}
         alt="Heart profile pic"
          width="192"
           height="192"
            quality="95"
             priority={true}
             className="h-24  w-24 rounded-full object-cover border-[0.35rem] border-[#f3f3f3] shadow-xl"
             />
        </motion.div>

      </div>
    </div>

    <motion.div className='mb-10 mt-4 px-4 flex justify-center text-center'
    initial={{opacity:0, y:100}}
    animate ={{opacity:1, y:0}}
    transition={{delay:0.1}}
    >
        <h1 className='sm:text-4xl text-4xl font-bold text-[#f3f3f3] text-center]'>JAH PODE ALMOSSAR ? 🍱</h1>
    </motion.div>

    <div >
    <h2  className='sm:text-4xl text-2xl font-bold  text-[#f3f3f3] flex  justify-center text-center'>
        Nós amamos
        <TypeAnimation 
        sequence={[
        'al-mosso.',
        1500,
        'al-mossar.',
        1500,
        'al-mossor.',
        1500,
        'al-moh-sor.',
        1500,
        'almosso.',
        1500,
        'al-moh-sar.',
        1500,
        'aomosso.',
        1500,
        ]}
        wrapper='div'
        cursor={true}
        repeat={Infinity}
        style={{fontSize:'1em', color:'#782BF1', paddingLeft:'5px'}}
        />
        </h2>
      
      <motion.p className='mt-4 px-4 py-4 text-2xl font-bold !leading-[1.5] sm:text-2xl
        mb-17 max-w-[50rem] text-center text-[#f3f3f3]'
        initial={{opacity:0, y:100}}
        animate = {{opacity:1, y:0}}
        transition={{delay:0.1}}
        >
        <span className=" text-[#782BF1]">Você pediu, e nós trouxemos.</span> Um cantinho para aqueles que, assim como nós,{" "}
        <span className="text-[#782BF1]">tem o almosso como estilo de vida.{" "}</span>Sejam muito bem-vindos.{" "}
        <span className=" text-[#782BF1]">O Sindicato do Almosso™</span> agradece sua preferência.
        Tenham um ótimo almosso. 
      </motion.p>
    
     <motion.div className='flex flex-row justify-center'
     initial={{opacity:0, y:100}}
     animate ={{opacity:1, y:0}}
     transition={{delay:0.1}}
     >
     <Link href="#almosso" className="group bg-[#782BF1] text-[#f3f3f3] font-bold px-10 py-4 mb-28 mt-10
      flex items-center text-center gap-2 rounded-full outline-none  focus:scale-110 hover:scale-110
    hover:bg-[#782BF1] active:scale-105 transition  ">Eu quero AL-MOH-SAR</Link>
     </motion.div>

    </div>
   </section>
  )
}
