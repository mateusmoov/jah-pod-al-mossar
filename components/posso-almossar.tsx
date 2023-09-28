"use client";
import React, { useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import finished from '@/public/finished.png'
import almost from '@/public/almost.png';
import ready from '@/public/ready.png'
import keep_eating from '@/public/keep_eating.png'
import cooking from '@/public/cooking.png'


export default function Almosso() {
  
  const {ref} = useSectionInView("Almosso");  
 
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
      const dataAtual = new Date();
      const horaAtual = dataAtual.getHours();
      const minutosAtual = dataAtual.getHours();
  
       if( horaAtual >= 10 && horaAtual < 11){
        setCurrentImage(cooking.src);
      }
     else  if (horaAtual >= 11 && (horaAtual === 11 && minutosAtual < 30)) {
        setCurrentImage(almost.src); 
      } else if ((horaAtual === 11 && minutosAtual >= 30) && horaAtual < 13) {
        setCurrentImage(ready.src); 
      } else if (horaAtual >=13 && horaAtual <14) {
        setCurrentImage(keep_eating.src); 
      }
      else if (horaAtual >=14 && horaAtual < 18) {
        setCurrentImage(finished.src); 
      }
      else {
        setCurrentImage(finished.src); 
      }

      
    }, []);

 
  return (
    <section ref= {ref} id="almosso" className='mt-28 max-w-[45rem]  scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>Tá na hora  de Al-mossar?</SectionHeading>

        <div className='flex justify-center items-center mb-28 py-4 '>
          
          {currentImage && (
            <img
              src= {currentImage} // Use a imagem com base no horário
              alt="Imagem do momento"
              width="600"
              height="600"
            />
          )}
        </div>
          
    </section>
  )
}
