import { motion } from "framer-motion";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";

export default function JoinUsInvite({
  heading = "Build your legal career on your terms.",
  chips = [
    "Freedom with SRA structure",
    "Fair fee share",
    "Real support & tools",
  ],
  primaryHref = "/join-us#brochure",
  secondaryHref = "/join-us",
  image = "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop",
}) {
  return (
    <Section ariaLabelledby="join-title" bg="bg-page" topFade topRule>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-7"
        >
          <Eyebrow>Consultancy at Sperrin Law</Eyebrow>
          <h2
            id="join-title"
            className="mt-2 font-semibold text-slate-900 leading-[1.08] tracking-tight text-[clamp(24px,5vw,38px)] max-w-[28ch]"
          >
            {heading}
          </h2>

          <ul className="mt-4 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white
                           px-3.5 py-1.5 text-sm text-slate-800 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900/80" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={primaryHref}
              className="inline-flex items-center rounded-full bg-[var(--brand-accent)] text-slate-900
                         font-semibold px-5 py-2.5 hover:brightness-95 focus:outline-none focus:ring-2
                         focus:ring-offset-2 focus:ring-[var(--brand-accent)] focus:ring-offset-white"
            >
              Request a brochure
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-slate-300 text-slate-900
                         font-semibold px-5 py-2.5 hover:bg-slate-50 focus:outline-none focus:ring-2
                         focus:ring-offset-2 focus:ring-slate-300"
            >
              Learn about joining{" "}
              <span aria-hidden className="ml-1.5">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-[var(--brand-accent)]/10" />
            <div
              className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white
                            shadow-[0_10px_30px_rgba(10,22,50,.10)] ring-1 ring-slate-200"
            >
              <img
                src={image}
                alt="Modern legal workspace"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
