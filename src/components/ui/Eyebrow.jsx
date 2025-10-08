export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={["inline-flex items-center gap-2", className].join(" ")}>
      <span className="h-1.5 w-6 rounded-full bg-[var(--brand-accent)]" />
      <p className="text-slate-900/70 text-[12.5px] font-semibold tracking-wide uppercase">
        {children}
      </p>
    </div>
  );
}
