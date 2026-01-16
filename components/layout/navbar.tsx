"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <nav className="mx-auto max-w-6xl justify-between flex items-center p-4 border-b border-border">
        <a href="/">
          <span className="font-extrabold text-text">Prateet.dev</span>
        </a>
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex bg-bg absolute w-full flex-col items-center gap-4 md:hidden border-b border-border p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
