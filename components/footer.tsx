import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-[#f3f3f3] text-bold ">
      <div className="flex items-center justify-center mb-2 gap-6">
        <a
          href="https://discord.gg/he4rt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={43} />
        </a>

        <a
          href="https://twitter.com/He4rtDevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={40} />
        </a>
      </div>

      <p className=" mb-1 text-medium text-bold text-[#f3f3f3]">
        &copy; 2023, Heart Developers. Todos os direitos reservados.
      </p>
    </footer>
  );
}
