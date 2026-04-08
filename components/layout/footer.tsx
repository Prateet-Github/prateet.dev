export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-5xl px-4 py-6 text-center relative z-10">
        <p className="text-slate-400 text-sm font-mono">
          © {new Date().getFullYear()} Prateet Tiwari. Built with Next.js &
          Tailwind.
        </p>
      </div>
    </footer>
  );
}
