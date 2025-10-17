import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onClick: () => void;
}

const navlist = [
  { href: "/", title: "My Tasks" },
  { href: "/settings", title: "Settings" },
];

const navLinkStyles =
  " block py-3 px-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md";

const navLinkSelectedStyles =
  "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium shadow-sm scale-105";

const navLinkDisabledStyles =
  "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800";

export default function Navigation({ onClick }: NavigationProps) {
  const pathname = usePathname();
  return (
    <nav className="space-y-3 mb-8">
      {navlist.map((navItem) => (
        <Link
          onClick={onClick}
          href={navItem.href}
          className={`${navLinkStyles} ${
            pathname === navItem.href
              ? navLinkSelectedStyles
              : navLinkDisabledStyles
          }`}
          key={navItem.title}
        >
          {navItem.title}
        </Link>
      ))}
    </nav>
  );
}
