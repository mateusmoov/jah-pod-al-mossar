import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section
      className={twMerge("container mx-auto items-center px-8", className)}
    >
      {children}
    </section>
  );
};
