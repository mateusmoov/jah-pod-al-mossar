import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
   <footer className='mb-10 px-4 text-center text-[#f3f3f3] text-bold '>
    <div className='flex items-center justify-center mb-4 gap-3'>
    <a href="https://github.com/IvanDragonV2" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        <a href="https://www.linkedin.com/in/d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://twitter.com/IvanDragonV2" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
    </div>
     

    <p className=' mb-1 text-medium text-bold text-[#f3f3f3]'>
        &copy; 2023 IvanDragonV2, e Heart Devs. Todos os direitos reservados.
    </p>
   </footer>
  )
}
