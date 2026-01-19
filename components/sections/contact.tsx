import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Email",
    url: "mailto:prateettiwari29@gmail.com",
    icon: Mail,
    handle: "prateettiwari29@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateet-tiwari",
    icon: Linkedin,
    handle: "@prateet-tiwari",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    url: "https://github.com/Prateet-Github",
    icon: Github,
    handle: "@Prateet-Github",
    color: "hover:text-purple-400",
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/prateet_tiwarii",
    icon: Twitter,
    handle: "@prateet_tiwarii",
    color: "hover:text-sky-400",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] px-4 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* --- Header --- */}
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to discuss distributed systems?
            I'm always open to interesting conversations.
          </p>
        </header>

        {/* --- Contact Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 hover:scale-102 rounded border border-border bg-[#0a0a0a] hover:bg-surface hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container */}
                <div
                  className={`p-3 rounded bg-white/5 border border-white/5 text-slate-300 transition-colors`}
                >
                  <social.icon size={24} />
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500 font-medium">
                    {social.name}
                  </span>
                  <span className="text-base text-slate-200 font-mono group-hover:text-white transition-colors">
                    {social.handle}
                  </span>
                </div>
              </div>

              {/* Arrow Icon */}
              <ArrowUpRight
                className="text-slate-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                size={20}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
