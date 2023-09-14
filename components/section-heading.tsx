import React, { Children } from 'react'

type SectionHeadingProps ={
    children:React.ReactNode;
};

export default function SectionHeading({children}: SectionHeadingProps 
    ) { 
  return (
    <h1 className='sm:text-4xl text-3xl font-bold text-[#f3f3f3] text-center mb-6 '>{children}</h1>
  )
}
