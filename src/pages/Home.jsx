// src/pages/Home.jsx
// ========================== PAGE IMPORTS ==========================
import Header from "../components/layout/Header";
import SiteFooter from "../components/layout/SiteFooter";
import { motion } from "framer-motion";
// import ExperienceInvite from "../components/home/ExperienceInvite";
import ExperienceOverview from "../components/home/ExperienceOverview";
import ConsultantInvite from "../components/home/ConsultantPitchUltra";

// NEW sections
import WhoWeAre from "../components/home/WhoWeAre";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import JoinUsInvite from "../components/home/JoinUsInvite";

// ===================== HERO ANIMATION PRESETS =====================
const heroStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const barSweep = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// ============================== PAGE ==============================
export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-page">
      <Header variant="overlay" />
      <Hero
        poster="/src/assets/HeroMeettheteam.webp"
        video="/hero.mp4"
        eyebrow="When experience matters most"
        title={
          <>
            Trusted criminal defence lawyers
            <br className="hidden sm:block" /> in London
          </>
        }
        strap="Our team combines 50+ years of expertise in fraud, corruption, money laundering, and market abuse, providing clear strategic advice in the toughest cases."
        primaryHref="/contact"
        secondaryHref="/services"
      />

      {/* ==================== NEW: WHO WE ARE ================== */}
      <WhoWeAre />

      {/* ==================== NEW: SERVICES ==================== */}
      <ServicesOverview />

      {/* ================= NEW: WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ===================== NEW: JOIN US ==================== */}
      <JoinUsInvite />
      {/* <ConsultantInvite /> */}
      {/* <ExperienceOverview /> */}
      {/* <ExperienceInvite /> */}
      <SiteFooter />
    </div>
  );
}

/* =================================================================
   HERO — split layout, straight bottom (no curve)
   Goal: right panel background always contains the text at all widths.

   Key changes:
   - Remove panel min-heights (content + padding drives height).
   - Move vertical spacing to panel padding (py-* on the panel).
   - Zero out site-container padding for this block to avoid extra gutters.
================================================================= */
function Hero({
  poster,
  video,
  eyebrow,
  title,
  strap,
  primaryHref,
  secondaryHref,
}) {
  return (
    <section
      className="
        relative grid overflow-hidden
        min-h-[72dvh] sm:min-h-[68dvh] lg:min-h-[86dvh]
        bg-black
        lg:grid-cols-[minmax(520px,48vw)_1fr]
      "
    >
      {/* LEFT: MEDIA */}
      <div className="relative order-first lg:order-none">
        <motion.video
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] saturate-[.95] contrast-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <source src={video} type="video/mp4" />
        </motion.video>

        {/* Darken for readability */}
        <div className="absolute inset-0 bg-black/45 sm:bg-black/40 lg:bg-black/35" />
        {/* Make photo feel present on phones */}
        <div className="relative block h-[46svh] sm:h-[50svh] lg:h-auto" />
        {/* BRAND TINT — gently pushes the footage toward your brand hue */}
        <div className="absolute inset-0 bg-[var(--brand-primary)]/12 mix-blend-multiply" />
        {/* SITE BG WASH — evens highlights so it matches the rest of the site */}
        <div className="absolute inset-0 bg-[var(--page-bg)]/10 mix-blend-soft-light" />
      </div>

      {/* RIGHT: PANEL (no card, panel owns the padding) */}
      <div
        className="
          relative flex items-center text-white
          bg-[var(--brand-primary)]
          [background-image:radial-gradient(1000px_80%_at_100%_50%,rgba(0,0,0,.28),transparent_65%),linear-gradient(to_top_right,var(--brand-grad-from),var(--brand-grad-to))]
          lg:[background-image:radial-gradient(1200px_85%_at_100%_50%,rgba(0,0,0,.32),transparent_68%),linear-gradient(to_top_right,var(--brand-grad-from),var(--brand-grad-to))]

          /* vertical rhythm driven by panel padding so bg flexes with text */
        //   py-8 sm:py-10 md:py-12 lg:py-16

          overflow-hidden isolation-isolate
        "
      >
        {/* Subtle texture */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay
            bg-[radial-gradient(circle_at_1px_1px,_#fff_0.5px,_transparent_0)]
            [background-size:12px_12px]
          "
        />
        {/* Zero out site-container's own padding so we control it here */}
        <div className="site-container w-full px-0">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className="
              max-w-[44rem] lg:max-w-[42rem] xl:max-w-[40rem]

              /* horizontal breathing room per breakpoint */
              px-5 sm:px-6 md:px-8 lg:px-10

              /* no extra vertical padding here; panel handles it */
              py-0

              text-white relative z-10
            "
          >
            {/* Brand bar (desktop) */}
            <span
              aria-hidden
              className="hidden lg:block absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[var(--brand-accent)]"
            />
            <div className="lg:pl-6 md:pr-4">
              <Eyebrow>{eyebrow}</Eyebrow>
              <HeroTitle>{title}</HeroTitle>
              <HeroStrap>{strap}</HeroStrap>
              <HeroCTAs
                primaryHref={primaryHref}
                secondaryHref={secondaryHref}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================ TYPOGRAPHY ============================ */
function Eyebrow({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="
        text-[#16C4A7]
        font-semibold
        text-[17px] sm:text-[18px]
        leading-7
        tracking-normal
      "
    >
      {children}
    </motion.p>
  );
}

function HeroTitle({ children }) {
  return (
    <motion.h1
      variants={titleReveal}
      className="
        relative
        mt-[10px] sm:mt-[12px] lg:mt-[14px]
        mb-3 sm:mb-4
        text-white
        font-semibold
        leading-[1.08]
        text-[36px]
        sm:text-[clamp(38px,6vw,44px)]
        lg:text-[clamp(40px,3vw+10px,62px)]
        max-w-[22ch]
      "
    >
      {children}
      <motion.span
        variants={barSweep}
        aria-hidden
        className="absolute -bottom-2 left-0 h-[3px] w-[72%] origin-left rounded-full bg-[var(--brand-accent)]"
      />
    </motion.h1>
  );
}

function HeroStrap({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="
        mb-4 sm:mb-5
        mt-2 sm:mt-3
        text-white/90 leading-relaxed
        text-[clamp(15px,3.8vw,16px)]
        sm:text-[clamp(15px,2.2vw,17px)]
        lg:text-[clamp(16px,0.9vw+10px,18px)]
        max-w-[58ch]
      "
    >
      {children}
    </motion.p>
  );
}

function HeroCTAs({ primaryHref, secondaryHref }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3"
    >
      <a
        href={primaryHref}
        className="
          inline-flex items-center rounded-full
          px-[clamp(16px,1.8vw,20px)] py-[clamp(10px,1.1vw,12px)]
          font-semibold
          bg-[var(--brand-accent)] text-slate-900
          hover:brightness-95
          text-[clamp(13px,0.5vw+10px,15px)]
          transition-transform will-change-transform hover:-translate-y-0.5 active:translate-y-0
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand-accent)] focus:ring-offset-slate-900
        "
      >
        Get in touch
      </a>

      <a
        href={secondaryHref}
        className="
          inline-flex items-center rounded-full
          px-[clamp(16px,1.8vw,20px)] py-[clamp(10px,1.1vw,12px)]
          font-semibold
          border border-white/70 text-white
          hover:border-white hover:bg-white/10
          text-[clamp(13px,0.5vw+10px,15px)]
          transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 focus:ring-offset-slate-900
        "
      >
        View our services{" "}
        <span aria-hidden className="ml-1.5">
          →
        </span>
      </a>
    </motion.div>
  );
}

/* ============================= OPTIONAL: HIGHLIGHTS ============================ */
function Highlights({ items }) {
  return (
    <section className="site-container mt-10 sm:mt-12 lg:mt-16 py-12 lg:py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center md:grid-cols-3 md:gap-8">
        {items.map(({ k, v }) => (
          <Stat key={k} k={k} v={v} />
        ))}
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-2xl font-semibold leading-tight text-slate-900">{k}</p>
      <p className="mt-1 text-sm text-slate-600">{v}</p>
    </div>
  );
}
