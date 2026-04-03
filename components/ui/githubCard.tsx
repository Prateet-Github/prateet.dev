"use client";

import dynamic from "next/dynamic";
import { cloneElement } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-32 w-full rounded-xl border border-white/5 bg-white/2">
        <span className="text-[10px] font-mono text-green-500/30 uppercase tracking-[0.2em] animate-pulse">
          Initializing_Data_Stream...
        </span>
      </div>
    ),
  },
);

const GithubCard = () => {
  const theme = {
    dark: ["#161b22", "#064e3b", "#059669", "#10b981", "#34d399"],
  };

  return (
    <div className="w-full max-w-6xl mx-auto group">
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#080808] p-6 transition-all duration-500 hover:border-green-500/20">
        {/* Header */}
        <div className="flex items-start mb-8 relative z-10">
          <div className="flex gap-4">
            <div>
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                Contribution_Log
              </h3>
              <p className="text-[10px] text-slate-500 font-mono mt-1 opacity-70">
                SOURCE: GITHUB.COM/PRATEET-GITHUB
              </p>
            </div>
          </div>
        </div>

        {/* Calendar Container: Full Width Focus */}
        <div className="w-full overflow-x-auto scrollbar-hide relative z-10">
          <div className="w-full opacity-40 group-hover:opacity-100  transition-all duration-700 ease-in-out flex justify-center">
            <GitHubCalendar
              username="Prateet-Github"
              blockSize={15}
              blockMargin={4}
              fontSize={12}
              theme={theme}
              colorScheme="dark"
              loading={false}
              style={{
                color: "#475569",
                fontFamily: "var(--font-mono)",
                width: "100%",
              }}
              renderBlock={(block, activity) =>
                cloneElement(block, {
                  children: (
                    <title>
                      {activity.count} commits on {activity.date}
                    </title>
                  ),
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
