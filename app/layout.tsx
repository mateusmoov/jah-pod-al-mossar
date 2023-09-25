import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jah pode almossar?',
  description: 'Descubra se você já pode al mossar sim ou não',
  keywords: 'horário de almoço, almoço, restaurante, comida, rango',
  authors: { name: 'He4rt Devs', url: 'https://heartdevs.com/' },
  openGraph: {
    title: 'Jah pode almossar?',
    description: 'Descubra se você já pode al mossar sim ou não',
    type: 'website'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-[#0d0d0d] text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
      <ActiveSectionContextProvider>
      <Header /> 
      {children}
      </ActiveSectionContextProvider>
      </body>
     
    </html>
  )
}
