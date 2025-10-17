import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Lato } from "next/font/google";

// Font style
const lato = Lato({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="pt-5 mr-5">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1
        className={`${lato.className} flex justify-center text-dark dark:text-white items-center text-2xl md:text-3xl lg:text-4xl mt-1`}
      >
        My Tasks
      </h1>
    </header>
  );
}
