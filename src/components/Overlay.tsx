"use client";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Overlay({ isOpen, onClose }: OverlayProps) {
  return (
    <div
      className={`
        lg:hidden fixed inset-0 z-40
        backdrop-blur-sm
        bg-black/40 dark:bg-black/60
        transition-all duration-500 ease-out
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={onClose}
    />
  );
}
