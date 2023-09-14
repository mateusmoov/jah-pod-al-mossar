"use client";
import React  from 'react';
import SectionHeading from './section-heading'
import { sindicatoData } from '@/lib/data'
import Project from './sindicate_pattern'
import { useSectionInView } from '@/lib/hooks';


export default function Sindicate() {

  const {ref} = useSectionInView("Sindicato", 0.5);  


  return (
    <section  ref={ref} id="sindicato" className=' sm:mb-20 scroll-mt-28 '>
    <SectionHeading>Apresentando o sindicato</SectionHeading>
    <div>
        {sindicatoData.map((project, index) => (
            <React.Fragment key={index}>
             <Project  {...project}/>
            </React.Fragment>
            ))}
    </div>
    </section>
  );
}
