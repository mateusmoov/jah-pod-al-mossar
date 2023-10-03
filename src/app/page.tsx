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
    console.log(hours);
    const minutes = currentTime.getMinutes();
    const text = getStatusText(hours, minutes);

    let bg = "bg-red-500";
    if (
      text === "agora jah pod al-mossar" ||
      text === "ainda dá pra al-mossar, mas tá acabando"
    ) {
      bg = "bg-green-600";
      setIsAlmossar(true);
    }

    setStatus({ text, bg });
  };

  const imageRoute = getRandomImage(images);

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className={twMerge(status?.bg)}>
      {isAlmossar && <Confetti width={width} height={height} />}
      <Section
        className={twMerge(
          "h-[100vh] flex justify-center items-center flex-col relative"
        )}
      >
        <div className="flex text-center flex-col items-center">
          <span className="text-5xl text-white font-light -tracking-tighter mb-7">
            JÁ TÁ PODENDO <br />
          </span>
          <span className="font-bold text-9xl text-white">AL-MOSSAR?</span>
          <span className="text-4xl font-bold mt-6 w-[800px]">
            {status?.text}
          </span>
        </div>
        <div className="absolute bottom-0 mx-auto mb-4">
          <Link href="https://discord.gg/he4rt">
            <Image width={65} height={57} src="/he4rt.svg" alt="logo he4rt" />
          </Link>
        </div>
      </Section>
    </div>
  );
}