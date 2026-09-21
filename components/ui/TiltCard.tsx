"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 9,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const setTilt = (rx: number, ry: number) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      cardRef.current?.style.setProperty("--rx", `${rx}deg`);
      cardRef.current?.style.setProperty("--ry", `${ry}deg`);
    });
  };

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt(-y * maxTilt * 2, x * maxTilt * 2);
  };

  return (
    <div
      className="perspective-[1000px]"
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt(0, 0)}
    >
      <div
        ref={cardRef}
        className={`will-change-transform transition-transform duration-200 ease-out transform-3d transform-[rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
