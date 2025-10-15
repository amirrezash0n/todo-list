"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

// Styles
const baseClasses = "size-6 md:size-8 md:cursor-pointer";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="transition duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <LuMoon className={`${baseClasses} text-gray-700`} />
      ) : (
        <LuSun className={`${baseClasses} text-yellow-400`} />
      )}
    </button>
  );
}
