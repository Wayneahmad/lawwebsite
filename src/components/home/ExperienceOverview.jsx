import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ExperienceOverview
 * Minimal, modern follow-up to the hero:
 * - One-liner value prop
 * - Scroll-snap services carousel (no external lib)
 * - Clean CTAs
 * - Smooth top fade so it blends with the hero
 */
export default function ExperienceOverview({
  eyebrow = "What we do",
  heading = "Serious criminal & financial law — delivered with precision",
  strap = "We specialise in complex investigations, strategic defence, and cross-border matters.",
  services = [
    {
      k: "Financial Crime",
      d: "Fraud, money laundering, market abuse and insider dealing.",
      href: "/services/financial-crime",
    },
    {
      k: "Serious Fraud & SFO",
      d: "SFO/HMRC investigations, interviews, dawn raids, DPAs.",
      href: "/services/serious-fraud",
    },
    {
      k: "Regulatory Defence",
      d: "FCA, FRC, professional discipline and governance risk.",
      href: "/services/regulatory",
    },
    {
      k: "Extradition & INTERPOL",
      d: "Cross-border requests, mutual legal assistance and challenges.",
      href: "/services/extradition",
    },
  ],
  primaryHref = "/brochure", // Request brochure / Join us (choose label below)
  secondaryHref = "/services", // View services
  primaryLabel = "Request our brochure",
  tertiaryHref = "/consultancy",
  tertiaryLabel = "Join as a consultant",
}) {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);

  // watch scroll position to update dots
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollLeft, clientWidth } = el;
      const i = Math.round(scrollLeft / clientWidth);
      setIdx(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="
        relative bg-page overflow-x-clip
        /* soft top fade so the hero flows into this section */
        before:absolute before:inset-x-0 before:-top-6 before:h-6
        before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.14),transparent)]
        before:pointer-events-none
      "
    >
      <div className="site-container mx-auto py-10 sm:py-12 lg:py-16">
        {/* Intro row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          <p className="text-[#16C4A7] font-semibold text-[17px] sm:text-[18px] leading-7">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-semibold text-slate-900 leading-[1.04] tracking-tight text-[clamp(26px,5vw,46px)]">
            {heading}
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-700 text-[clamp(15px,2.4vw,17px)]">
            {strap}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 sm:mt-8"
        >
          <div className="relative">
            {/* Prev */}
            <CarouselNav
              side="left"
              onClick={() => scrollTo(Math.max(0, idx - 1))}
            />
            {/* Next */}
            <CarouselNav side="right" onClick={() => scrollTo(idx + 1)} />

            <div
              ref={trackRef}
              className="
                snap-x snap-mandatory overflow-x-auto overflow-y-hidden
                scroll-smooth no-scrollbar
                -mx-5 px-5 sm:-mx-6 sm:px-6
              "
              aria-label="Key services"
              role="listbox"
            >
              <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[60%] lg:auto-cols-[42%] gap-4 sm:gap-5 lg:gap-6">
                {services.map((s, i) => (
                  <article
                    key={s.k}
                    role="option"
                    aria-selected={i === idx}
                    className="
                      snap-center
                      rounded-2xl border border-slate-200/70 bg-white
                      p-5 sm:p-6 lg:p-7 shadow-sm
                      transition-[transform,box-shadow]
                      hover:shadow-md hover:-translate-y-0.5
                      min-h-[180px]
                    "
                  >
                    <h3 className="text-slate-900 font-semibold text-[18px]">
                      {s.k}
                    </h3>
                    <p className="mt-2 text-slate-600 text-[14px] leading-relaxed">
                      {s.d}
                    </p>
                    <a
                      href={s.href}
                      className="mt-4 inline-flex items-center text-[14px] font-semibold text-slate-900"
                    >
                      Learn more{" "}
                      <span aria-hidden className="ml-1.5">
                        →
                      </span>
                    </a>
                  </article>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`
                    h-2.5 rounded-full transition-all
                    ${i === idx ? "w-6 bg-slate-900" : "w-2.5 bg-slate-300"}
                  `}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={primaryHref}
            className="inline-flex items-center rounded-full bg-[var(--brand-accent)] text-slate-900 font-semibold px-5 py-2.5 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-accent)] focus:ring-offset-white"
          >
            {primaryLabel}
          </a>
          <a
            href={tertiaryHref}
            className="inline-flex items-center rounded-full border border-slate-300 text-slate-900 font-semibold px-5 py-2.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 focus:ring-offset-white"
          >
            {tertiaryLabel}{" "}
            <span aria-hidden className="ml-1.5">
              →
            </span>
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center rounded-full border border-white/0 text-slate-900/80 font-semibold px-4 py-2 hover:underline"
          >
            View all services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CarouselNav({ side, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`
        hidden sm:flex absolute top-1/2 -translate-y-1/2
        ${side === "left" ? "left-1" : "right-1"}
        h-9 w-9 items-center justify-center rounded-full
        bg-white/80 backdrop-blur border border-slate-200 shadow-sm
        hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300
      `}
    >
      <span aria-hidden className="text-slate-900">
        {side === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}
