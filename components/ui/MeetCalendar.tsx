"use client";

import { useEffect, useMemo, useState } from "react";
import { Video } from "lucide-react";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type Cell = { day: number; inMonth: boolean };

const buildMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();

  // Monday-first grid, always 6 rows so the card never changes height.
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const cells: Cell[] = Array.from({ length: 42 }, (_, i) => {
    const n = i - offset + 1;
    if (n < 1) return { day: daysInPrev + n, inMonth: false };
    if (n > daysInMonth) return { day: n - daysInMonth, inMonth: false };
    return { day: n, inMonth: true };
  });

  const isWeekday = (d: number) => {
    const w = new Date(year, month, d).getDay();
    return w !== 0 && w !== 6;
  };

  // The "Meet Prateet" slot: next weekday after today, else the last weekday before it.
  let slot = today + 1;
  while (slot <= daysInMonth && !isWeekday(slot)) slot += 1;
  if (slot > daysInMonth) {
    slot = today;
    while (slot > 1 && !isWeekday(slot)) slot -= 1;
  }

  return { year, month, today, slot, cells };
};

// Muted filler events so the grid reads like a real, lived-in calendar.
const FILLER = [
  { day: 3, label: "Ship v2" },
  { day: 11, label: "Review" },
  { day: 19, label: "Deploy" },
  { day: 26, label: "OSS day" },
];

const MeetCalendar = () => {
  // Resolved on the client only, so server and client markup always match.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  const cal = useMemo(() => (now ? buildMonth(now) : null), [now]);
  const filler = FILLER.filter(
    (f) =>
      f.day !== cal?.slot &&
      f.day !== (cal?.slot ?? -1) + 1 &&
      f.day !== cal?.today,
  );

  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-green-500/20 bg-[#0a0a0a] p-6 pt-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] md:p-8 md:pt-9">
      {/* Wash, sits behind everything */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/10 to-transparent" />

      {/* Spiral binding along the top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -top-3 flex justify-between"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="30"
            viewBox="0 0 14 30"
            className={i % 2 ? "hidden sm:block" : ""}
          >
            {/* punched hole */}
            <circle
              cx="7"
              cy="22"
              r="4"
              fill="#050505"
              stroke="rgba(255,255,255,0.1)"
            />
            {/* wire loop */}
            <rect
              x="4.5"
              y="2"
              width="5"
              height="22"
              rx="2.5"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <rect
              x="4.5"
              y="2"
              width="5"
              height="22"
              rx="2.5"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.6"
            />
          </svg>
        ))}
      </div>

      {/* Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-500/70">
            {cal ? cal.year : " "}
          </span>
          <h3 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
            {cal ? MONTHS[cal.month] : " "}
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 py-1.5 pl-1.5 pr-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 font-mono text-xs font-bold text-black">
            P
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-green-500">
            Prateet
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="relative mt-6 grid grid-cols-7 gap-1 md:gap-1.5">
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="pb-2 text-center font-mono text-[10px] uppercase tracking-widest text-slate-500"
          >
            {d}
          </div>
        ))}

        {(cal?.cells ?? Array.from({ length: 42 }, () => null)).map(
          (cell, i) => {
            const inMonth = cell?.inMonth ?? false;
            const isToday = !!cell && inMonth && cell.day === cal?.today;
            const isSlot = !!cell && inMonth && cell.day === cal?.slot;
            const extra =
              cell && inMonth
                ? filler.find((f) => f.day === cell.day)
                : undefined;

            return (
              <div
                key={i}
                className={`relative flex aspect-square flex-col rounded-lg border p-1.5 transition-colors lg:aspect-[7/6] ${
                  isSlot
                    ? "border-green-500/40 bg-green-500/10"
                    : inMonth
                      ? "border-white/5 bg-white/[0.02]"
                      : "border-transparent"
                }`}
              >
                <span
                  className={`font-mono text-xs leading-none md:text-sm ${
                    isSlot
                      ? "font-bold text-green-400"
                      : isToday
                        ? "font-bold text-white"
                        : inMonth
                          ? "text-slate-300"
                          : "text-slate-700"
                  }`}
                >
                  {cell ? cell.day : ""}
                </span>

                {isToday && (
                  <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                )}

                {extra && (
                  <span className="mt-auto hidden truncate rounded bg-white/5 px-1 py-0.5 font-mono text-[10px] text-slate-400 md:block">
                    {extra.label}
                  </span>
                )}

                {isSlot && (
                  <>
                    {/* Hand-drawn ring around the slot */}
                    <svg
                      aria-hidden
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="pointer-events-none absolute -inset-1.5 h-[calc(100%+0.75rem)] w-[calc(100%+0.75rem)] text-green-500"
                      fill="none"
                    >
                      <path
                        d="M20 14 C48 4, 92 8, 94 40 C96 74, 76 96, 40 92 C6 88, 2 56, 10 30 C14 18, 26 12, 46 10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    <span className="absolute bottom-1.5 left-1.5 z-10 flex w-[calc(200%-0.5rem)] items-center gap-1 overflow-hidden whitespace-nowrap rounded bg-green-500 px-1 py-0.5 font-mono text-[9px] font-bold text-black md:w-[calc(200%-0.375rem)] md:text-[10px] xl:right-1.5 xl:w-auto">
                      <Video size={10} strokeWidth={2.5} className="shrink-0" />
                      Prateet
                    </span>
                  </>
                )}
              </div>
            );
          },
        )}
      </div>

      {/* Legend */}
      <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-white/5 pt-4 font-mono text-[11px] text-slate-500 md:text-xs">
        <span className="flex items-center gap-2 whitespace-nowrap">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Meet Prateet · 30 min
        </span>
        <span className="whitespace-nowrap">IST (GMT+5:30)</span>
      </div>
    </div>
  );
};

export default MeetCalendar;