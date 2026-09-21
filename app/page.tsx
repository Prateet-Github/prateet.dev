import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}
