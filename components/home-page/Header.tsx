"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-4">
  
        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-wide hover:text-secondary transition-colors"
        >
          Yusuf Usman<span className="text-secondary">.</span>
        </Link>

    
        <div className="hidden md:block">
          <Navbar />
        </div>

  
        <button
          className="md:hidden text-white hover:text-secondary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      {isOpen && (
        <div
          className="md:hidden bg-background/95 border-t border-white/10 shadow-lg animate-slideDown"
        >
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
