import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ChevronDown, SlidersHorizontal, Check } from "lucide-react";

const FLASH_MS = 200; // emerald flash duration on focus (ms)

/* -------------------------
   Portal-anchored popover
   ------------------------- */
function PortalMenu({ anchorRef, open, onClose, children, align = "right" }) {
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const menuRef = useRef(null);

  const compute = () => {
    const el = anchorRef?.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const gap = 8; // space between button and menu
    const width = 256; // w-64
    let left = r.left;
    if (align === "right") left = r.right - width; // right align to pill
    setPos({ top: r.bottom + gap, left: Math.max(8, left), width });
  };

  useLayoutEffect(() => {
    if (open) compute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => compute();
    const onResize = () => compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const a = anchorRef?.current;
      const m = menuRef.current;
      if (!a || !m) return;
      if (!a.contains(e.target) && !m.contains(e.target)) onClose?.();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0.98 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: pos.top,
          left: pos.left,
          width: pos.width,
          zIndex: 1000,
        }}
        className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/10 overflow-hidden origin-top"
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function HeroBand({ tags, query, setQuery, tag, setTag }) {
  const [menuOpen, setMenuOpen] = useState(false); // desktop listbox
  const [filtersOpen, setFiltersOpen] = useState(false); // mobile/tablet panel
  const [flash, setFlash] = useState(false);
  const menuBtnRef = useRef(null);
  const filterBtnRef = useRef(null);

  const flashGreen = () => {
    setFlash(true);
    window.setTimeout(() => setFlash(false), FLASH_MS);
  };

  const currentLabel = tag || "All";

  // close mobile filter when clicking outside
  useEffect(() => {
    const onDown = (e) => {
      const filterPanel = document.getElementById("filters-panel");
      if (
        filtersOpen &&
        filterPanel &&
        !filterPanel.contains(e.target) &&
        !filterBtnRef.current?.contains(e.target)
      ) {
        setFiltersOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [filtersOpen]);

  return (
    <div className="pt-6 pb-6 relative">
      <div className="pb-4">
        <p className="uppercase tracking-[0.15em] text-xs text-white/75">
          MEET THE TEAM
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
          People who turn complexity into clarity.
        </h1>
        <p className="mt-2 max-w-3xl text-white/85">
          Find an expert adviser who's right for you.
        </p>
      </div>

      {/* =========================
          Desktop (≥ 1024)
         ========================= */}
      <div
        className="
          hidden lg:grid items-center gap-3
          [--SEARCH_MAX:640px]
          grid-cols-[minmax(360px,var(--SEARCH_MAX))_auto]
        "
      >
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-300/95" />
          <motion.div
            animate={{
              boxShadow: flash
                ? "0 0 0 8px rgba(16,185,129,0.15)"
                : "0 0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: FLASH_MS / 1000 }}
            className="rounded-full"
          >
            <input
              aria-label="Search people"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={flashGreen}
              placeholder="Search people"
              className="
                h-10 w-full rounded-full
                border border-white/75 bg-transparent
                pl-11 pr-10 text-sm text-white
                outline-none transition
                placeholder:text-white/80
                focus:border-white focus:ring-1 focus:ring-white/85
              "
            />
          </motion.div>
          {!!query && (
            <button
              onClick={() => setQuery("")}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                inline-flex h-7 w-7 items-center justify-center
                rounded-full border border-white/70 text-white
                bg-white/10 hover:bg-white/15 transition
              "
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* All pill + anchored menu (portal) */}
        <div className="relative">
          <button
            ref={menuBtnRef}
            onClick={() => setMenuOpen((v) => !v)}
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/75 bg-transparent
              px-4 h-8 text-sm text-white
              hover:border-white focus-visible:outline-none
              focus-visible:ring-1 focus-visible:ring-white/85
            "
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
          >
            <span className="font-medium">{currentLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* PORTAL MENU: always rendered directly under the button */}
          <PortalMenu
            anchorRef={menuBtnRef}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            align="right"
          >
            <ul
              className="max-h-72 w-full overflow-auto py-2"
              role="listbox"
              aria-label="Team"
            >
              {["All", ...tags].map((t) => {
                const active =
                  (t === "All" && currentLabel === "All") || t === currentLabel;
                return (
                  <li key={t}>
                    <button
                      onClick={() => {
                        setTag(t === "All" ? "All" : t);
                        setMenuOpen(false);
                      }}
                      className={[
                        "flex w-full items-center justify-between px-3 py-2 text-sm",
                        active
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50",
                      ].join(" ")}
                      role="option"
                      aria-selected={active}
                    >
                      <span className="truncate">{t}</span>
                      {active && <Check className="h-4 w-4 text-slate-700" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </PortalMenu>
        </div>
      </div>

      {/* =========================
          Sub-1024 (mobile/tablet)
          Search (left) + compact Filters (right)
         ========================= */}
      <div
        className="
          lg:hidden grid items-center gap-3
          [--SEARCH_MAX:520px]
          grid-cols-[minmax(240px,var(--SEARCH_MAX))_auto]
        "
      >
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-300/95" />
          <motion.div
            animate={{
              boxShadow: flash
                ? "0 0 0 8px rgba(16,185,129,0.15)"
                : "0 0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: FLASH_MS / 1000 }}
            className="rounded-full"
          >
            <input
              aria-label="Search people"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={flashGreen}
              placeholder="Search people"
              className="
                h-11 w-full rounded-full
                border border-white/75 bg-transparent
                pl-11 pr-10 text-sm text-white
                outline-none transition
                placeholder:text-white/80
                focus:border-white focus:ring-1 focus:ring-white/85
              "
            />
          </motion.div>
          {!!query && (
            <button
              onClick={() => setQuery("")}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                inline-flex h-7 w-7 items-center justify-center
                rounded-full border border-white/70 text-white
                bg-white/10 hover:bg-white/15 transition
              "
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Compact Filters pill (anchored panel inside hero—kept as-is) */}
        <div className="relative justify-self-end">
          <button
            ref={filterBtnRef}
            onClick={() => setFiltersOpen((v) => !v)}
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/75 bg-transparent
              px-4 h-10 text-sm text-white
              hover:border-white focus-visible:outline-none
              focus-visible:ring-1 focus-visible:ring-white/85
            "
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                id="filters-panel"
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="
                  absolute right-0 z-30 mt-2 w-72
                  rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-900/10
                  origin-top-right
                "
              >
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Team
                </label>
                <select
                  value={currentLabel}
                  onChange={(e) => {
                    setTag(e.target.value);
                    setFiltersOpen(false);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                >
                  <option>All</option>
                  {tags.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
