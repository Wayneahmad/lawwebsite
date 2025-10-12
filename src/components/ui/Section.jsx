// src/components/ui/Section.jsx
export default function Section({
  id,
  children,
  bg = "bg-white",
  topFade = true,
  topRule = false,
  className = "",
  containerClass = "",
  ariaLabelledby,
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={[
        "relative overflow-x-clip",
        bg,
        topFade
          ? "before:absolute before:inset-x-0 before:-top-6 before:h-6 before:pointer-events-none before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06),transparent)]"
          : "",
        topRule ? "border-t border-slate-200/70" : "",
        className,
      ]
        .join(" ")
        .trim()}
    >
      <div
        className={["site-container py-12 sm:py-14 lg:py-18", containerClass]
          .join(" ")
          .trim()}
      >
        {children}
      </div>
    </section>
  );
}
