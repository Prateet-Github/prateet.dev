import GithubCard from "../ui/githubCard";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen mx-auto max-w-6xl py-24 text-text px-4"
    >
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-text">About Me</h2>
        <p className="mt-4 text-muted text-lg">
          I'm Prateet Tiwari, a passionate full-stack developer
        </p>
      </header>
      <GithubCard></GithubCard>
    </section>
  );
};

export default About;