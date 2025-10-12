import { motion } from "framer-motion";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";

export default function WhyChooseUs({
  heading = "Why clients choose us",
  items = [
    {
      t: "Tailored strategies for high-stakes cases.",
      d: "Every matter is built from a bespoke plan, tested against risk and outcome.",
    },
    {
      t: "Responsive and discreet representation.",
      d: "Available when it counts — always confidential.",
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
        className="mt-2 text-slate-900 font-semibold leading-[1.12] text-[clamp(22px,4.6vw,34px)]"
      >
        {heading}
      </h2>

      <ol className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map(({ t, d }, i) => (
          <motion.li
            key={t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-page text-slate-900 font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

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
