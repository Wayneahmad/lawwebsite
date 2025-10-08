import { motion } from "framer-motion";
import Section from "../../ui/Section";
import Eyebrow from "../../ui/Eyebrow";

export default function WhoWeAre({
  heading = "Defending clients in the most serious and complex cases.",
  blurb = "We provide clear, discreet and decisive representation in high-stakes criminal and financial matters. Our team brings deep experience across investigations and litigation — at speed and with care.",
  highlights = [
    "50+ years combined experience",
    "SFO & FCA expertise",
    "International cases handled",
  ],
  ctaHref = "/about",
  ctaLabel = "Learn about Sperrin Law",
  image = "https://images.unsplash.com/photo-1544033527-b192daee1f2d?q=80&w=1200&auto=format&fit=crop",
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
          className="lg:col-span-6"
        >
          <Eyebrow>Who we are</Eyebrow>
          <h2
            id="who-title"
            className="mt-2 font-semibold text-slate-900 leading-[1.06] tracking-tight
                       text-[clamp(24px,5vw,40px)] max-w-[36ch]"
          >
            {heading}
          </h2>

          <p className="mt-3 text-slate-700 text-[clamp(15px,2.2vw,17px)] max-w-[65ch]">
            {blurb}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {highlights.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white
                           px-3.5 py-1.5 text-sm text-slate-800 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900/80" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6">
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

        {/* Framed image with offset accent */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-[var(--brand-accent)]/10" />
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(10,22,50,.10)] ring-1 ring-slate-200">
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
