"use client";

import { useEffect, useState } from "react";

const PHRASES: [string, string][] = [
  ["Scalable", "Systems."],
  ["Efficient", "Backends."],
  ["Full Stack", "Applications."],
  ["Distributed", "Systems."],
];

// How long each phrase stays on screen (ms)
const HOLD = 2600;

type Props = { className?: string };

const RotatingText = ({ className = "" }: Props) => {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % PHRASES.length;
      });
    }, HOLD);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`relative inline-grid align-top ${className}`}>
      {/* Static copy for screen readers; the animated stack is decorative */}
      <span className="sr-only">{PHRASES[0].join(" ")}</span>

      {PHRASES.map(([first, second], i) => {
        const state = i === index ? "active" : i === prev ? "leaving" : "idle";

        return (
          <span
            key={first}
            aria-hidden
            className={`col-start-1 row-start-1 whitespace-nowrap bg-linear-to-r from-white to-green-400 bg-clip-text text-transparent transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
              state === "active"
                ? "translate-y-0 opacity-100 duration-700"
                : state === "leaving"
                  ? "-translate-y-[0.25em] opacity-0 duration-400"
                  : "translate-y-[0.35em] opacity-0 duration-700"
            }`}
          >
            {first}
            <br />
            {second}
          </span>
        );
      })}
    </span>
  );
};

export default RotatingText;
