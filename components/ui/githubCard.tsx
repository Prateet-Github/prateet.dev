"use client";

import dynamic from "next/dynamic";
import { cloneElement } from "react";

// 1. Dynamic Import Configuration
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false, // Disables server-side rendering for this component
    loading: () => (
      // Your Loading Skeleton
      <div className="flex items-center justify-center h-32 w-full text-slate-600 gap-2">
        <span className="text-sm font-mono">Loading commit history...</span>
      </div>
    ),
  },
);

const GithubCard = () => {
  // 2. Theme Configuration
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <article className="w-full max-w-5xl mx-auto bg-bg p-6 rounded-lg border border-white/10 shadow-lg">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          GitHub Contributions
        </h2>
      </header>

      <div className="w-full overflow-x-auto pb-4 scrollbar-hide min-h-38 grayscale hover:grayscale-0 transition-all duration-300">
        {/* 3. Render directly (No mounted checks needed) */}
        <GitHubCalendar
          username="Prateet-Github"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          theme={theme}
          colorScheme="dark"
          style={{ color: "#94a3b8" }}
          renderBlock={(block, activity) =>
            cloneElement(block, {
              children: (
                <title>
                  {activity.count} activities on {activity.date}
                </title>
              ),
            })
          }
        />
      </div>
    </article>
  );
};

export default GithubCard;
