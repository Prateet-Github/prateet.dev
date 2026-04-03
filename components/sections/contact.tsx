import { ArrowUpRight, MessageSquare, Terminal, Zap } from "lucide-react";
import { socials } from "@/data/socials";
import Footer from "../layout/footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col px-6 overflow-hidden pt-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl w-full grow flex flex-col justify-center pb-18">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-green-500">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg max-w-xl text-slate-400 leading-relaxed font-mono tracking-tight">
            Have a project in mind? My inbox is always open for interesting
            <span className="text-green-500 font-medium">
              {" "}
              technical discussions
            </span>
            .
          </p>
        </header>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:border-green-500/30 hover:bg-green-500/2"
            >
              <div className="flex items-center gap-5 relative z-10">
                <div className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-500 group-hover:text-green-500 group-hover:border-green-500/20 transition-all duration-500">
                  <social.icon size={22} strokeWidth={1.5} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 group-hover:text-green-500/60 transition-colors">
                    {social.name}
                  </span>
                  <span className="text-lg text-slate-200 font-medium tracking-tight group-hover:text-white transition-colors">
                    {social.handle}
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-slate-600 group-hover:text-green-500 transition-all duration-500">
                <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  CONNECT
                </span>
                <ArrowUpRight
                  size={20}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </div>

              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <Zap size={14} />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Current_Status
              </span>
            </div>
            <p className="text-sm text-slate-400 font-mono">
              Available for new opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <Terminal size={14} />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Preferred_Stack
              </span>
            </div>
            <p className="text-sm text-slate-400 font-mono">
              React, Next.js, Node.js & React Native.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <MessageSquare size={14} />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Typical_Response
              </span>
            </div>
            <p className="text-sm text-slate-400 font-mono">
              &lt; 24 hours (GMT+5:30)
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
