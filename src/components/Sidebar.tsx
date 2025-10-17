"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        <LuMenu size={20} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        w-80 min-h-screen p-6
        flex flex-col
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-700
      `}
      >
        {/* Close Button - Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 dark:text-gray-400"
        >
          <LuX size={20} />
        </button>

        {/* User Profile */}
        <div className="mb-8 pt-8 lg:pt-0">
          <div className="font-semibold text-gray-900 dark:text-white">
            Jane Doe
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            janedoe@gmail.com
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 mb-8">
          <Link
            href="/"
            className={`block py-2 text-lg transition duration-200 ${
              pathname === "/"
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            My Tasks
          </Link>
          <Link
            href="/settings"
            className={`block py-2 text-lg transition duration-200 ${
              pathname === "/settings"
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
        </nav>

        {/* Copyright */}
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">© 2025</div>
        </div>
      </div>
    </>
  );
}
