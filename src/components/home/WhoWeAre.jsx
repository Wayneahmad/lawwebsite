import { motion } from "framer-motion";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";
import officeImage from "../../assets/whoweare.jpg";

export default function WhoWeAre({
  heading = "Defending clients in the most serious and complex cases.",
  lead = "Clear, discreet and decisive representation in high-stakes criminal and financial matters. Deep experience across investigations and litigation — delivered at speed and with care.",
  stats = [
    { k: "50+ yrs", v: "combined experience" },
    { k: "SFO / FCA", v: "investigation expertise" },
    { k: "Cross-border", v: "matters handled" },
  ],
  ctaHref = "/about",
  ctaLabel = "Meet our team",
  image = officeImage,
}) {
  return (
    <Section ariaLabelledby="who-title" bg="bg-white" topFade topRule>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-7"
        >
          <Eyebrow>Who we are</Eyebrow>

          <h2
            id="who-title"
            className="mt-2 text-slate-900 font-semibold leading-[1.04]
                       text-[clamp(26px,5.4vw,42px)] max-w-[32ch]"
          >
            {heading}
          </h2>

          <p className="mt-3 text-slate-700 text-[clamp(15px,2.2vw,17px)] max-w-[62ch]">
            {lead}
          </p>

          {/* stat bar (varies the look vs chips) */}
          <dl className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
            {stats.map(({ k, v }) => (
              <div
                key={k}
                className="rounded-2xl border border-slate-200 bg-page px-4 py-3 shadow-sm"
              >
                <dt className="text-slate-900 font-semibold">{k}</dt>
                <dd className="text-[13px] text-slate-600 mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <a
              href={ctaHref}
              className="inline-flex items-center rounded-full border border-slate-300 text-slate-900
                         font-semibold px-5 py-2.5 hover:bg-slate-50 focus:outline-none focus:ring-2
                         focus:ring-offset-2 focus:ring-slate-300"
            >
              {ctaLabel}{" "}
              <span aria-hidden className="ml-1.5">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Image (distinct frame treatment) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-[var(--brand-accent)]/12" />
            <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-[0_12px_32px_rgba(10,22,50,.10)]">
              <img
                src={image}
                alt="London / legal setting"
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
