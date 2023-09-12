
import React from 'react'

const HundredPattern = ({data_queue, data_title, data_details}:{data_queue: number; data_title : string; data_details: string}) => {
 return (

    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div  className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 bg-[#782BF1] rounded-md '>{data_queue}</span>
                <span className='text-lg py-2 text-[#782BF1]'>{data_title}</span>
            </p>
            <p> <span>{data_details}</span></p>
        </li>
    </ol>
 )
}


export default HundredPattern; 


