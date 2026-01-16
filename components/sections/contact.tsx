import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socials = [
  {
    name: "Email",
    url: "mailto:prateettiwari29@gmail.com",
    icon: Mail,
    display: "prateettiwari29@gmail.com"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateet-tiwari/",
    icon: Linkedin,
    display: "linkedin.com/in/prateet-tiwari"
  },
  {
    name: "GitHub",
    url: "https://github.com/Prateet-Github",
    icon: Github,
    display: "github.com/Prateet-Github"
  },
  {
    name: "X",
    url: "https://twitter.com/Prateet29",
    icon: Twitter,
    display: "@Prateet29"
  }
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-text">Get In Touch</h2>
        <p className="mt-4 text-muted text-lg">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
      </header>

   
    </section>
  );
};

export default Contact;