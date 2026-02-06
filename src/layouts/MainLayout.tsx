import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <a
        href="https://wa.me/2349050138556"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
        aria-label="Chat with us on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 animate-bounce fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.5c-.3-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.2 5.13 4.48.72.3 1.29.48 1.73.62.73.23 1.4.2 1.93.12.59-.09 1.74-.71 1.98-1.4.25-.68.25-1.27.17-1.4-.08-.13-.27-.2-.56-.35zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.14.56 4.23 1.62 6.07L4 28l6.12-1.6a11.96 11.96 0 0 0 5.9 1.52h.01c6.63 0 12.02-5.39 12.02-12.02C28.05 9.39 22.66 4 16.02 4zm0 21.9h-.01c-1.8 0-3.57-.49-5.11-1.42l-.37-.22-3.63.95.97-3.53-.24-.36a9.9 9.9 0 0 1-1.52-5.3C6.11 10.5 10.5 6.1 16.02 6.1c5.52 0 9.92 4.39 9.92 9.92 0 5.52-4.4 9.92-9.92 9.92z" />
        </svg>
      </a>
      <Footer />
    </div>
  );
};

export default MainLayout;
