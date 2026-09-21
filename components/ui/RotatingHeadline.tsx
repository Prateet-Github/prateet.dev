"use client";

import { useEffect, useState } from "react";

const phrases = [
  { top: "Building", bottom: "Scalable Systems." },
  { top: "High-Throughput", bottom: "Backends." },
  { top: "Real-Time", bottom: "Systems." },
  { top: "Distributed", bottom: "Systems." },
];

const INTERVAL_MS = 3200;

const RotatingHeadline = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % phrases.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  const prev = (active - 1 + phrases.length) % phrases.length;

  return (
    <>
      {/* Static text for screen readers / SEO */}
      <span className="sr-only">
        Building Scalable Systems: high-throughput backends, real-time systems
        and distributed systems.
      </span>

      <span aria-hidden="true" className="grid">
        {phrases.map((p, i) => {
          const state =
            i === active
              ? "opacity-100 translate-y-0 blur-[0px]" 
              : i === prev
                ? "opacity-0 -translate-y-4 blur-[6px]"
                : "opacity-0 translate-y-4 blur-[6px]";

          return (
            <span
              key={p.top + p.bottom}
              className={`col-start-1 row-start-1 transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:blur-[0px] ${state}`}
            >
              <span className="block text-white">{p.top}</span>
              <span className="block">
                <span className="bg-linear-to-r from-white to-green-400 bg-clip-text text-transparent">
                  {p.bottom}
                </span>
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
};

export default RotatingHeadline;
