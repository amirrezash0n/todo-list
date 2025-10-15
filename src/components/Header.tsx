import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="mt-5 mr-5">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl mt-1">
        My Tasks
      </h1>
    </header>
  );
}
