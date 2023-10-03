import './globals.css'
import { Poppins } from 'next/font/google'
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["300","400","500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jah pode almossar?",
  description: "Será que já chegou a hora de al-mossar? Descubra",
  keywords: "horário de almoço, almoço, restaurante, comida, rango",
  authors: { name: "He4rt Devs", url: "https://heartdevs.com/" },
  openGraph: {
    title: "Jah pode almossar?",
    description: "Será que já chegou a hora de al-mossar? Descubra",
    type: "website",
    images: [
      { url: "almosso.png", width: 512, height: 512, alt: "almosso img" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
