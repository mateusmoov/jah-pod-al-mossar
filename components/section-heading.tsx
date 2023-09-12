import React, { Children } from 'react'

type SectionHeadingProps ={
    children:React.ReactNode;
};

export default function SectionHeading({children}: SectionHeadingProps 
    ) { 
  return (
    <h1 className='sm:text-5xl text-4xl font-bold text-[#f3f3f3] text-center mb-8'>{children}</h1>
  )
}
