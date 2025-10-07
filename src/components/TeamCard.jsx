// src/components/TeamCard.jsx
import { Mail, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function firstName(full = "") {
  return full.split(" ")[0] || "";
}

export default function TeamCard({ person, onOpen }) {
  // Respect user's reduced motion setting
  const prefersReduced = useReducedMotion();

  // Fast, snappy hover: small lift only (no scale, no image zoom)
  const hoverAnim = prefersReduced ? {} : { y: -6 };
  const hoverTransition = prefersReduced
    ? {}
    : { type: "tween", duration: 0.12, ease: "easeOut" };

  return (
    <motion.article
      className="group overflow-hidden rounded-3xl bg-white ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition-shadow duration-150
                 transform-gpu will-change-transform"
      whileHover={hoverAnim}
      transition={hoverTransition}
    >
      {/* Keep the image static; only the card lifts.
          Make the image tonal shift quick so it feels responsive. */}
      <div className="relative aspect-[5/5] overflow-hidden">
        {person.img ? (
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover
                       transition-[filter] duration-150 ease-out
                       brightness-95 contrast-95 saturate-90
                       group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <div
            className="absolute inset-0 grid place-items-center text-white text-4xl font-semibold"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-primary), var(--brand-accent))",
            }}
          >
            {person.name
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>

      {/* Tight, readable content */}
      <div className="p-3">
        <h3 className="text-[14.5px] font-semibold text-slate-900 leading-snug">
          {person.name}
        </h3>
        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-[var(--brand-accent)]">
          {person.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {person.expertise?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-[3px] text-[10.5px] text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-150"
          >
            <Mail className="h-4 w-4" />
            {firstName(person.name)}
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-150"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="mt-2">
          <button
            onClick={() => onOpen?.(person.id)}
            className="inline-flex w-full items-center justify-center rounded-xl px-3 py-2 text-[12.5px] font-medium text-white bg-[var(--brand-primary)] hover:brightness-95 transition duration-150"
          >
            View profile
          </button>
        </div>
      </div>
    </motion.article>
  );
}
