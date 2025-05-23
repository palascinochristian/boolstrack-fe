import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 px-10 bg-[#0B121D] shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Logo size="w-50 h-auto" />

        {/* Bottone hamburger (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navbar desktop */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-[#F26722]">
            Home
          </Link>
          <a
            href={`${import.meta.env.VITE_BE_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26722]"
          >
            Accedi
          </a>
          <a
            href={`${import.meta.env.VITE_BE_URL}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26722]"
          >
            Registrati
          </a>
        </nav>
      </div>

      {/* Navbar mobile */}
      {isOpen && (
        <nav className="mt-4 md:hidden flex flex-col gap-4 text-white">
          <Link
            to="/"
            className="hover:text-[#F26722]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href={`${import.meta.env.VITE_BE_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26722]"
            onClick={() => setIsOpen(false)}
          >
            Accedi
          </a>
          <a
            href={`${import.meta.env.VITE_BE_URL}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F26722]"
            onClick={() => setIsOpen(false)}
          >
            Registrati
          </a>
        </nav>
      )}
    </header>
  );
}
