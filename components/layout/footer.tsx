export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 py-6 text-center relative z-10">
        <p className="text-slate-400 text-sm font-mono">
          © {new Date().getFullYear()} Prateet Tiwari. Built with Next.js &
          Tailwind.
        </p>
      </div>
    </footer>
  );
}
