import { ArrowUpRight, Video } from "lucide-react";
import { socials } from "@/data/socials";
import Footer from "../layout/footer";
import MeetCalendar from "../ui/MeetCalendar";

const MEET_URL = "https://calendar.app.google/NoyzH1frUR2gWuoJ9";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen scroll-mt-20 flex-col overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-112 w-md -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl grow flex-col justify-center pb-18">
        <header className="mb-16">
          <h2 className="text-5xl font-bold tracking-tighter text-green-500 md:text-6xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-xl font-mono text-lg leading-relaxed tracking-tight text-slate-400">
            Have a project in mind? My inbox is always open for interesting{" "}
            <span className="font-medium text-green-500">
              technical discussions
            </span>
            .
          </p>
        </header>

        {/* Left: calendar. Right: schedule a Meet + social links */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <MeetCalendar />

          <div className="flex flex-col gap-4">
            {/* Schedule a call: the main action */}
            <div className="relative flex flex-col gap-6 rounded-2xl border border-green-500/20 bg-[#0a0a0a] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] transform-3d md:p-8">
              {/* Wash, sits behind everything */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/10 to-transparent" />

              <div className="flex items-center gap-5">
                <div
                  className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-green-500"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Video size={22} strokeWidth={1.5} />
                </div>

                <div
                  className="flex flex-col gap-1"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    Schedule a Google Meet
                  </h3>
                  <p className="font-mono text-sm text-slate-400">
                    Pick a time that works for you. The invite includes a Meet
                    link.
                  </p>
                </div>
              </div>

              <a
                href={MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-black  transition-all hover:bg-green-400 active:translate-y-1 active:shadow-[0_0_24px_rgba(34,197,94,0.25)]"
                style={{ transform: "translateZ(45px)" }}
              >
                Let&apos;s connect
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Social links: LinkedIn, X, GitHub, Gmail (from data/socials) */}
            <div className="flex grow flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex grow items-center justify-between rounded-2xl border border-white/5 bg-[#0a0a0a] p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] transition-colors duration-500 transform-3d hover:border-green-500/30 md:px-6"
                >
                  {/* Hover wash, sits behind everything */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-xl border border-white/5 bg-white/3 p-2.5 text-slate-500 transition-colors duration-500 group-hover:border-green-500/20 group-hover:text-green-500"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                    </div>

                    <div
                      className="flex flex-col"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-green-500/60">
                        {social.name}
                      </span>
                      <span className="font-medium tracking-tight text-slate-200 transition-colors group-hover:text-white">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 text-slate-600 transition-colors duration-500 group-hover:text-green-500"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <span className="font-mono text-xs uppercase opacity-0 transition-opacity group-hover:opacity-100">
                      Connect
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick facts */}
        {/* <div className="grid grid-cols-1 gap-6 border-t border-white/5 pt-12 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <Zap size={14} />
              <span className="font-mono text-xs uppercase tracking-widest">
                Current_Status
              </span>
            </div>
            <p className="flex items-center gap-2 font-mono text-sm text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <Terminal size={14} />
              <span className="font-mono text-xs uppercase tracking-widest">
                Preferred_Stack
              </span>
            </div>
            <p className="font-mono text-sm text-slate-400">
              React, Next.js, Node.js &amp; React Native.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <MessageSquare size={14} />
              <span className="font-mono text-xs uppercase tracking-widest">
                Typical_Response
              </span>
            </div>
            <p className="font-mono text-sm text-slate-400">
              &lt; 24 hours (GMT+5:30)
            </p>
          </div>
        </div> */}
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
