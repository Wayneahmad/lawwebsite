// src/components/home/ConsultantPitchUltra.jsx
import { motion } from "framer-motion";

export default function ConsultantPitchUltra({
  // LEFT — Who we are (micro)
  eyebrow = "Who we are",
  aboutLine = "Specialists in serious & financial crime, based in London.",
  badges = ["SFO • HMRC • FCA", "50+ yrs combined", "Cross-border matters"],
  // RIGHT — Consultant invite (primary focus)
  inviteEyebrow = "Consultancy at Sperrin Law",
  inviteTitle = "Build your legal career on your terms",
  chips = [
    "Freedom with SRA structure",
    "Fair fee share, fast payments",
    "Real support, modern tools",
  ],
  // CTAs
  primaryHref = "/brochure",
  secondaryHref = "/careers",
  tertiaryHref = "/services",
  primaryLabel = "Brochure",
  secondaryLabel = "Join us",
  tertiaryLabel = "View services",
}) {
  return (
    <section
      id="consultant-pitch"
      className="
        relative bg-page overflow-x-clip
        before:absolute before:inset-x-0 before:-top-6 before:h-6
        before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),transparent)]
        before:pointer-events-none
      "
    >
      <div className="site-container mx-auto">
        {/* hairline divider for a subtle transition */}
        <div className="h-px w-full bg-slate-200/60 mt-0" />

        <div className="py-10 sm:py-12 lg:py-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT — ultra concise about */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35 }}
            className="min-w-0 lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[var(--brand-accent)]" />
              <p className="text-slate-900/70 text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-2 font-semibold text-slate-900 leading-[1.08] tracking-tight text-[clamp(22px,4.2vw,34px)] max-w-[32ch]">
              {aboutLine}
            </h2>

            {/* credibility micro-badges (no sentences) */}
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs sm:text-[13px] text-slate-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900/80" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — concise consultant invite */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="min-w-0 lg:col-span-6"
          >
            <p className="text-slate-900/70 text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase">
              {inviteEyebrow}
            </p>
            <h3 className="mt-1 font-semibold text-slate-900 leading-[1.08] tracking-tight text-[clamp(20px,3.8vw,28px)] max-w-[30ch]">
              {inviteTitle}
            </h3>

            {/* compact chips */}
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900/80" />
                  {c}
                </li>
              ))}
            </ul>

            {/* CTAs — short labels to keep it airy */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={primaryHref}
                className="inline-flex items-center rounded-full bg-[var(--brand-accent)] text-slate-900 font-semibold px-4 py-2.5 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-accent)] focus:ring-offset-white"
              >
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center rounded-full border border-slate-300 text-slate-900 font-semibold px-4 py-2.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 focus:ring-offset-white"
              >
                {secondaryLabel}{" "}
                <span aria-hidden className="ml-1.5">
                  →
                </span>
              </a>
              <a
                href={tertiaryHref}
                className="inline-flex items-center rounded-full text-slate-900/80 font-semibold px-3.5 py-2 hover:underline"
              >
                {tertiaryLabel}
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
