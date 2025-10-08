import { motion } from "framer-motion";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";

function IconTick() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"
      />
    </svg>
  );
}

export default function WhyChooseUs({
  heading = "Why clients choose us",
  items = [
    {
      t: "Tailored strategies for high-stakes cases.",
      d: "Every matter is built from a bespoke plan, tested against risk and outcome.",
    },
    {
      t: "Responsive and discreet representation.",
      d: "Available when it counts and always confidential.",
    },
    {
      t: "Proven track record in complex litigation.",
      d: "Experience across courts and regulators, nationally and internationally.",
    },
  ],
  quotes = [
    { q: "Astute, calm and decisive under pressure.", c: "Client, UK" },
    {
      q: "They navigated a complex investigation with clarity and care.",
      c: "Corporate client",
    },
  ],
}) {
  return (
    <Section ariaLabelledby="why-title" bg="bg-white" topFade topRule>
      <Eyebrow>Proof</Eyebrow>
      <h2
        id="why-title"
        className="mt-2 font-semibold text-slate-900 leading-[1.08] tracking-tight text-[clamp(24px,5vw,38px)]"
      >
        {heading}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ t, d }) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div className="text-[var(--brand-accent)]">
              <IconTick />
            </div>
            <h3 className="mt-2 font-semibold text-slate-900">{t}</h3>
            <p className="mt-1 text-sm text-slate-600">{d}</p>
          </motion.div>
        ))}
      </div>

      {/* Slim quotes — light, not a big carousel */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {quotes.map(({ q, c }, i) => (
          <figure
            key={i}
            className="rounded-xl border border-slate-200 bg-page p-4"
          >
            <blockquote className="text-slate-800 text-sm">“{q}”</blockquote>
            <figcaption className="mt-2 text-xs text-slate-500">
              — {c}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
