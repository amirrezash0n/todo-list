import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: "open" | "close";
  onClick?: () => void;
}

const openButtonStyles =
  "lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg transition-transform duration-300 hover:scale-110";

const closeButtonStyles =
  "lg:hidden absolute top-4 right-4 p-2 text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg";

export default function MenuButton({
  children,
  className = "",
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${type === "open" && openButtonStyles} 
        ${type === "close" && closeButtonStyles} 
        ${className}`}
    >
      {children}
    </button>
  );
}
