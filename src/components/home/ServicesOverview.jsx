import { motion } from "framer-motion";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l7 3v6c0 5-3.6 9.6-7 11-3.4-1.4-7-6-7-11V5l7-3z"
      />
    </svg>
  );
}

export default function ServicesOverview({
  heading = "Areas of expertise",
  sub = "Specialists in complex and serious criminal matters.",
  items = [
    {
      slug: "serious-fraud-corruption",
      title: "Serious Fraud & Corruption",
      one: "High-value investigations and prosecutions.",
    },
    {
      slug: "financial-crime-money-laundering",
      title: "Financial Crime & Money Laundering",
      one: "Multi-jurisdictional issues handled decisively.",
    },
    {
      slug: "regulatory-discipline",
      title: "Regulatory & Professional Discipline",
      one: "FCA, FRC and professional standards.",
    },
    {
      slug: "market-abuse-insider-trading",
      title: "Market Abuse & Insider Trading",
      one: "Advice where markets, investigations and risk meet.",
    },
    {
      slug: "extradition-cross-border",
      title: "Extradition & Cross-Border",
      one: "INTERPOL and mutual legal assistance.",
    },
    {
      slug: "civil-recovery",
      title: "Civil Recovery",
      one: "Coordinated actions alongside criminal processes.",
    },
  ],
  ctaHref = "/services",
  ctaLabel = "View all services",
}) {
  return (
    <Section
      id="services"
      ariaLabelledby="svc-title"
      bg="bg-page"
      topFade
      topRule
    >
      <Eyebrow>What we do</Eyebrow>
      <h2
        id="svc-title"
        className="mt-2 text-slate-900 font-semibold leading-[1.1] text-[clamp(22px,4.8vw,34px)]"
      >
        {heading}
      </h2>
      <p className="mt-1 text-slate-700">{sub}</p>

      {/* Mobile rail */}
      <div className="mt-6 -mx-5 overflow-x-auto no-scrollbar sm:hidden">
        <div className="px-5 flex gap-4">
          {items.map((s) => (
            <motion.a
              key={s.slug}
              href={`/services/${s.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="min-w-[76%] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-page text-[var(--brand-accent)]">
                  <IconShield />
                </span>
                <div>
                  <h3 className="font-semibold text-[15.5px] text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-slate-600">{s.one}</p>
                  <span className="mt-2 inline-flex items-center text-[13.5px] font-semibold text-slate-900">
                    Learn more{" "}
                    <span aria-hidden className="ml-1.5">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="mt-6 hidden sm:grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <motion.a
            key={s.slug}
            href={`/services/${s.slug}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            aria-label={`${s.title} — learn more`}
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-page text-[var(--brand-accent)]">
                <IconShield />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.one}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-slate-900">
                  Learn more{" "}
                  <span aria-hidden className="ml-1.5">
                    →
                  </span>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={ctaHref}
          className="inline-flex items-center rounded-full border border-slate-300 text-slate-900
                     font-semibold px-5 py-2.5 hover:bg-slate-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-slate-300"
        >
          {ctaLabel}
        </a>
      </div>
    </Section>
  );
}
