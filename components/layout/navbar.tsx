"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navItems";

// One shared spring so every piece of motion feels like it belongs together
const SPRING = {
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.8,
} as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// On a black page a dark shadow is invisible, so the lift comes from light:
// a hairline ring + soft emerald glow underneath + a faint white halo + a top-edge highlight.
const RAISED =
  "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_40px_-12px_rgba(52,211,153,0.28),0_4px_20px_-6px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.14)]";

type NavLinkProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  layoutId: string;
  className?: string;
};

const NavLink = ({
  label,
  isActive,
  onClick,
  layoutId,
  className = "",
}: NavLinkProps) => (
  <motion.button
    onClick={onClick}
    aria-current={isActive ? "true" : undefined}
    whileTap={{ scale: 0.95 }}
    className={`relative rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
      isActive ? "text-green-200" : "text-slate-400 hover:text-green-300"
    } ${className}`}
  >
    {/* Shared-layout pill: slides between items instead of blinking on/off */}
    {isActive && (
      <motion.span
        layoutId={layoutId}
        transition={SPRING}
        className="absolute inset-0 rounded-lg border border-green-600 bg-linear-to-b from-green-500/30 to-green-500/10"
      />
    )}
    <span className="relative z-10">{label}</span>
  </motion.button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");

  // While a click-triggered smooth scroll is running, ignore the observer.
  // Otherwise the pill would hop through every section the page scrolls past.
  const lockRef = useRef(false);
  const lockTimer = useRef<number | null>(null);

  // Highlight the link for the section currently in the middle of the screen
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !lockRef.current) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
    };
  }, []);

  const goTo = (href: string) => {
    const id = href.slice(1);

    // Move the pill immediately, then let the scroll catch up
    setActive(id);
    lockRef.current = true;
    if (lockTimer.current) window.clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = false;
    }, 1000);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    // reducedMotion="user" turns off transform/layout animations for people who ask for it
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-50 px-4 pt-3">
        <div className="relative mx-auto max-w-6xl">
          <nav
            className={`flex items-center justify-between rounded-xl border border-white/15 bg-white/4 px-5 py-3 backdrop-blur-xl ${RAISED}`}
          >
            <Link href="/" className="group flex items-center gap-1">
              <span className="text-xl font-bold tracking-tighter text-white">
                Prateet
                <span className="text-green-500 group-hover:animate-pulse motion-reduce:animate-none">
                  .dev
                </span>
              </span>
            </Link>

            <ul className="hidden gap-2 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    label={item.label}
                    isActive={active === item.href.slice(1)}
                    onClick={() => goTo(item.href)}
                    layoutId="nav-pill-desktop"
                  />
                </li>
              ))}
            </ul>

            <button
              className="relative flex h-8 w-8 items-center justify-center text-green-500 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                  className="absolute"
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile menu: a second floating panel under the bar */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
                className={`absolute inset-x-0 top-full mt-2 flex origin-top flex-col gap-1 rounded-2xl border border-white/15 bg-neutral-950/90 p-3 backdrop-blur-xl md:hidden ${RAISED}`}
              >
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      duration: 0.2,
                      ease: EASE_OUT,
                    }}
                  >
                    <NavLink
                      label={item.label}
                      isActive={active === item.href.slice(1)}
                      onClick={() => goTo(item.href)}
                      layoutId="nav-pill-mobile"
                      className="block w-full py-2.5 text-center"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </header>
    </MotionConfig>
  );
};

export default Navbar;
