import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-between flex-col bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
          <h2 className="text-center text-gray-600 dark:text-gray-400">
            محتوای اصلی به زودی اضافه می‌شود...
          </h2>
          {/* اینجا بعداً کامپوننت‌های Todo رو اضافه می‌کنی */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
