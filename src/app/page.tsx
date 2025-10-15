import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* محتوای اصلی اینجا قرار می‌گیره */}
        <div className="max-w-md mx-auto mt-8 p-4">
          <h2 className="text-center text-gray-500 dark:text-gray-400">
            محتوای اصلی به زودی اضافه می‌شود...
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
