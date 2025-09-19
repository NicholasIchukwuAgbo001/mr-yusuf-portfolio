"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur-md border-b shadow">
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-3">
        <Link
          href="/"
          className="text-white text-lg font-bold tracking-wide"
        >
          Yusuf Usman<span className="text-secondary">.</span>
        </Link>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t shadow-lg">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
