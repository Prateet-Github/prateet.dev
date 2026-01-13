"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border mx-auto max-w-6xl justify-between flex items-center p-4">
        <span className="font-extrabold">Prateet.dev</span>
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex absolute w-full flex-col items-center gap-4 md:hidden border-t p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
