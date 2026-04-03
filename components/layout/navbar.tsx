"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm md:bg-transparent bg-black md:backdrop-blur-md lg:bg-transparent lg:backdrop-blur-md">
      <nav className="mx-auto max-w-6xl justify-between flex items-center p-4 relative z-10">
        <a href="/" className="group flex items-center gap-1">
          <span className="text-xl font-bold tracking-tighter text-white">
            Prateet
            <span className="text-green-500 group-hover:animate-pulse">
              .dev
            </span>
          </span>
        </a>
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => {
                  const id = item.href.replace("#", "");
                  const target = document.getElementById(id);

                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }

                  setIsOpen(false);
                }}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-green-400 transition-colors relative group"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex bg-black absolute w-full flex-col items-center gap-4 md:hidden border-b border-white/5 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => {
                  const id = item.href.replace("#", "");
                  const target = document.getElementById(id);

                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }

                  setIsOpen(false);
                }}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-green-400 transition-colors relative group"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
