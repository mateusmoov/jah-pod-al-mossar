"use client";
import { twMerge } from "tailwind-merge";
import { Section } from "./components";
import { useEffect, useState } from "react";
import { getStatusText } from "@/utils/status";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { getRandomImage, images } from "@/utils/randomMeme";
import Image from "next/image";
import Link from "next/link";

type StatusType = {
  text: string | undefined;
  bg: string;
};

export default function Home() {
  const [status, setStatus] = useState<StatusType>();
  const [isAlmossar, setIsAlmossar] = useState(false);
  const { width, height } = useWindowSize();


  const getStatus = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const text = getStatusText(hours, minutes);

    let bg = "bg-red-500";

    const isAlmossar = [
      "Ainda dá pra al-mossar, mas vá rápido! 🍽️🚨",
      "Última chamada pro al-mosso! 📢🍛",
      "Pega logo seu al-mosso antes que suma! 🍛🏃‍♀️",
      "Al-mosso is on the table my friend! 🍴🥘",
      "Agora jah pod al-mossar! 🍽️🚀",
      "Corre, que o al-mosso liberou! 🏃‍♂️🍛",
    ];

    if (isAlmossar.includes(text)) {
      bg = "bg-green-600";
      setIsAlmossar(true);
    }

    setStatus({ text, bg });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className={twMerge(status?.bg)}>
      {isAlmossar && <Confetti width={width} height={height} />}
      <Section
        className={twMerge(
          "h-screen flex justify-center items-center flex-col relative"
        )}
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl sm:text-5xl md:text-6xl text-white font-light tracking-tighter mb-2 sm:mb-4 md:mb-6">
            JÁ TÁ PODENDO <br />
          </span>
          <span className="font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
            AL-MOSSAR?
          </span>
          <span className="text-2xl sm:text-2xl md:text-4xl font-bold mt-2 sm:mt-4 md:mt-6 max-w-screen-lg">
            {status?.text}
          </span>
        </div>
        <div className="absolute bottom-0 mx-auto mb-2 sm:mb-4 md:mb-6">
          <Link href="https://discord.gg/he4rt">
            <Image width={50} height={44} src="/he4rt.svg" alt="logo he4rt" />
          </Link>
        </div>
      </Section>
    </div>
  );
}