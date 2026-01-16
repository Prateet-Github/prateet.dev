import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Prateet-Github",
    label: "GitHub",
    icon: <Github />,
  },
  {
    href: "www.linkedin.com/in/prateet-tiwari",
    label: "LinkedIn",
    icon: <Linkedin />,
  },
  {
    href: "https://twitter.com/prateet_tiwari",
    label: "Email",
    icon: <Twitter />,
  },
  {
    href: "mailto:prateettiwari29@gmail.com",
    label: "Email",
    icon: <Mail />,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 py-6 text-center border-t border-border">
        {/* Social Links */}
        {/* <nav aria-label="Footer navigation" className="mb-4">
          <ul className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        <p className="text-text-muted">
          &copy; {new Date().getFullYear()} Prateet Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
