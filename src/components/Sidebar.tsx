"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Overlay from "./Overlay";
import MenuButton from "./MenuButton";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";

const sidebarStyles = `w-80 min-h-screen p-6 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl lg:shadow-none  fixed lg:static inset-y-0 left-0 z-40 transform transition-all duration-500 ease-out`;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <MenuButton type="open" onClick={() => setIsOpen(true)}>
        <LuMenu size={20} />
      </MenuButton>

      {/* Overlay */}
      <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div
        className={`
          ${sidebarStyles}
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"
          }
        `}
      >
        {/* Close Button - Mobile */}
        <MenuButton type="close" onClick={() => setIsOpen(false)}>
          <LuX size={20} />
        </MenuButton>

        {/* User Profile */}
        <UserProfile
          fullName="Amirreza Shourvarzi"
          email="shourvarziamirreza@gmail.com"
        />

        {/* Navigation */}
        <Navigation onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
}
