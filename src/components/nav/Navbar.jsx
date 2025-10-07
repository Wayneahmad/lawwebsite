import { useMemo, useState } from "react";
import { Menu, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useViewportBucket from "../../hooks/useViewportBucket";
import logoUrl from "../../assets/Logo.svg";

const LINKS = ["Services", "Our people", "Careers", "About us"];

/** ======= KNOBS (safe to tweak) ======= */
const NAV = {
  // spacing
  linkGap: "gap-10", // spacing between top-level links
  linkPad: "px-1 py-1", // small cushion around each link
  iconGap: "gap-3", // gap between search/cta/menu in compact row
  // sizes / weight
  linkSize: "text-[15px] xl:text-base", // link thickness/size
  iconPad: "p-1.5", // inner padding for icon buttons
  ctaPad: "px-2.5 py-1", // Contact Us pill padding
  // width cap for the centred link track (the “RC” look)
  centerMaxSm: "max-w-[560px]",
  centerMaxLg: "lg:max-w-[720px]",
  centerMaxXl: "xl:max-w-[840px]",
};
/** ===================================== */

const slug = (s) => "/" + s.toLowerCase().replace(/\s+/g, "-");

function centerDelays(n, step = 0.06) {
  const c = (n - 1) / 2;
  return Array.from({ length: n }, (_, i) => Math.abs(i - c) * step);
}

export default function Navbar({ onOpenSearch, scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const bucket = useViewportBucket(); // "mobile" | "tablet" | "desktop"
  const isDesktop = bucket === "desktop";

  const delays = useMemo(() => centerDelays(LINKS.length), []);
  const spring = { type: "spring", stiffness: 420, damping: 26 };

  // slightly thicker link style
  const linkBase = [
    NAV.linkSize,
    NAV.linkPad,
    "transition-colors",
    scrolled
      ? "text-slate-900 hover:text-slate-950"
      : "text-white/90 hover:text-white",
    "group-hover/nav:text-slate-900 group-hover/nav:hover:text-slate-950",
  ].join(" ");

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.92, y: -8 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { ...spring, delay: delays[i] },
    }),
    exit: (i) => ({
      opacity: 0,
      scale: 0.92,
      y: -8,
      transition: { duration: 0.18, delay: delays[i] * 0.4 },
    }),
  };

  return (
    <>
      {/* =============================
          HEADER ROW (3-column grid)
          col 1: logo (left)
          col 2: boxed centered track for links
          col 3: actions (right)
         ============================= */}
      <motion.div
        className="grid items-center h-16 lg:h-20 grid-cols-[auto_1fr_auto]  gap-x-4 xl:gap-x-4 2xl:gap-x-6 "
        layout
        transition={spring}
      >
        {/* LEFT — Logo */}
        <a href="/" aria-label="Home" className="flex items-center">
          <motion.img
            src={logoUrl}
            alt="Sperrin Law"
            className={[
              // ↓ smaller under 1280, normal at ≥1280, a bit bigger on ultra-wide
              "h-[26px] xl:h-8 2xl:h-9 w-auto transition-all duration-300",
              "brightness-0 invert",
              "group-hover/nav:invert-0 group-hover/nav:brightness-100",
              scrolled ? "invert-0 brightness-100" : "",
            ].join(" ")}
            animate={{ scale: isDesktop ? 1 : 0.96 }}
            transition={spring}
          />
        </a>

        {/* MIDDLE — Centered + capped link track */}
        <AnimatePresence initial={false} mode="popLayout">
          {isDesktop ? (
            <motion.div
              key="center-links"
              className={[
                "justify-self-center w-full",
                NAV.centerMaxSm,
                NAV.centerMaxLg,
                NAV.centerMaxXl,
                "flex items-center justify-center xl:justify-end", // center < xl; lean right on xl+
                NAV.linkGap,
              ].join(" ")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              transition={spring}
            >
              {LINKS.map((label, i) => (
                <motion.a
                  key={label}
                  href={slug(label)}
                  className={linkBase}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <div /> // nothing here on tablet/mobile (keeps the 3-column grid intact)
          )}
        </AnimatePresence>

        {/* RIGHT — Actions */}
        <AnimatePresence initial={false} mode="popLayout">
          {isDesktop ? (
            <motion.div
              key="actions"
              className="justify-self-end flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              transition={spring}
            >
              <motion.button
                onClick={onOpenSearch}
                aria-label="Open search"
                className={[
                  `inline-flex items-center justify-center rounded-full ${NAV.iconPad}`,
                  scrolled
                    ? "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10"
                    : "bg-white/10 text-white hover:bg-white/15",
                  "group-hover/nav:bg-slate-900/5 group-hover/nav:text-slate-900 group-hover/nav:hover:bg-slate-900/10",
                ].join(" ")}
                initial={{ opacity: 0, scale: 0.85, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -6 }}
                transition={{ ...spring, delay: 0.28 }}
              >
                <Search className="h-4 w-4" />
              </motion.button>

              <motion.a
                href="/contact"
                className={[
                  "inline-flex items-center rounded-full",
                  NAV.ctaPad,
                  "text-sm font-semibold",
                  "bg-[var(--brand-accent)] text-slate-900",
                ].join(" ")}
                initial={{ opacity: 0, scale: 0.85, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -6 }}
                transition={{ ...spring, delay: 0.34 }}
              >
                Contact us
              </motion.a>
            </motion.div>
          ) : (
            // Compact controls for mobile/tablet (unchanged behaviour)
            <motion.div
              key="compact"
              className={`flex items-center ${NAV.iconGap}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={spring}
            >
              <button
                onClick={onOpenSearch}
                className={[
                  `inline-flex items-center justify-center rounded-full ${NAV.iconPad}`,
                  "group-hover/nav:bg-slate-900/5 group-hover/nav:text-slate-900 group-hover/nav:hover:bg-slate-900/10",
                  scrolled
                    ? "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10"
                    : "bg-white/10 text-white hover:bg-white/15",
                ].join(" ")}
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>

              <a
                href="/contact"
                className={[
                  "hidden md:inline-flex items-center rounded-full",
                  NAV.ctaPad,
                  "text-sm font-semibold bg-[var(--brand-accent)] text-slate-900",
                ].join(" ")}
              >
                Contact
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className={[
                  `inline-flex items-center justify-center rounded-full ${NAV.iconPad}`,
                  "group-hover/nav:bg-slate-900/5 group-hover/nav:text-slate-900 group-hover/nav:hover:bg-slate-900/10",
                  scrolled
                    ? "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10"
                    : "bg-white/10 text-white hover:bg-white/15",
                ].join(" ")}
              >
                <Menu className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ==============================
          MOBILE/TABLET SLIDE-DOWN NAV
         ============================== */}
      <div
        className={[
          !isDesktop ? "block" : "hidden",
          "overflow-hidden transition-[max-height] duration-300",
          mobileOpen ? "max-h-64" : "max-h-0",
        ].join(" ")}
      >
        <div className="pb-3">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l}
                href={slug(l)}
                onClick={() => setMobileOpen(false)}
                className={[
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-900 hover:bg-slate-900/5"
                    : "text-white/90 hover:bg-white/10",
                  "group-hover/nav:text-slate-900 group-hover/nav:hover:bg-slate-900/5",
                ].join(" ")}
              >
                {l}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={[
                "mt-1 inline-flex w-full items-center justify-center rounded-xl",
                NAV.ctaPad,
                "text-sm font-semibold bg-[var(--brand-accent)] text-slate-900",
              ].join(" ")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
