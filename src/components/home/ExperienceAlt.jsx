import { motion } from "framer-motion";

export default function ExperienceAlt({
  eyebrow = "Deep sector experience",
  heading = "Your Partner in Complex Casework",
  copy = `We combine decades of collective experience with a sharp focus on financial crime,
fraud and regulatory investigations. Our team delivers tailored solutions that address both
immediate legal needs and long-term business objectives.`,
  bullets = [
    "Financial crime & fraud",
    "Regulatory investigations",
    "High-stakes advisory",
  ],
}) {
  return (
    <section className="relative bg-page">
      {/* spacing only; no absolute overlays to avoid click issues */}
      <div className="site-container py-10 sm:py-12 lg:py-16">
        {/* subtle divider to segue from hero */}

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy block */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-[#16C4A7] font-semibold text-[18px] leading-7">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-semibold text-slate-900 leading-[1.04] tracking-tight text-[clamp(28px,5.2vw,56px)]">
              {heading}
            </h2>
            <p className="mt-5 sm:mt-6 max-w-[68ch] text-slate-700 text-[clamp(15px,1.2vw+12px,18px)] leading-relaxed">
              {copy}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700"
                >
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Proof points card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="
              rounded-2xl sm:rounded-3xl border border-slate-200/70 bg-white
              p-5 sm:p-6 lg:p-7 shadow-sm
            "
          >
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Fact k="50+ yrs" v="Collective experience" />
              <Fact k="24/7" v="Rapid response" />
              <Fact k="SRA" v="Regulated & trusted" />
            </dl>

            <div className="mt-5 h-px w-full bg-slate-200/80" />

            <p className="mt-5 text-sm text-slate-600">
              We advise boards, founders and professionals in high-pressure,
              high-stakes situations—pragmatically and discreetly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }) {
  return (
    <div className="text-center sm:text-left">
      <dt className="text-2xl font-semibold text-slate-900">{k}</dt>
      <dd className="mt-1 text-slate-600 text-sm">{v}</dd>
    </div>
  );
}
