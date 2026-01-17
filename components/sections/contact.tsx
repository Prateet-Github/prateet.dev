import { Mail, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

const socials = [
  {
    name: "Email",
    url: "mailto:prateettiwari29@gmail.com",
    icon: MessageCircle,
    display: "prateettiwari29@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateet-tiwari/",
    icon: Linkedin,
    display: "linkedin.com/in/prateet-tiwari",
  },
  {
    name: "GitHub",
    url: "https://github.com/Prateet-Github",
    icon: Github,
    display: "github.com/Prateet-Github",
  },
  {
    name: "X",
    url: "https://twitter.com/Prateet29",
    icon: Twitter,
    display: "x.com/prateet_tiwari",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-text">Get In Touch</h2>
        <p className="mt-4 text-muted text-lg">
          Have a project in mind or just want to chat? I'd love to hear from
          you.
        </p>
      </header>

      <div className="flex justify-center  gap-6">
        {socials.map((social) => (
          <div
            key={social.name}
            className="mb-6 flex items-center gap-4 bg-text text-black p-4 rounded-full hover:scale-105 transition cursor-pointer"
          >
            <social.icon className="text-primary w-10 h-10  fill-bg" />
            {/* <a
              href={social.url}
              className="text-lg text-text hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.display}
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
