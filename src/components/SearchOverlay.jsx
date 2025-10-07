import { AnimatePresence, motion } from "framer-motion";
import { Search, X, BadgeCheck } from "lucide-react";

export default function SearchOverlay({
  open,
  onClose,
  query,
  setQuery,
  tag,
  setTag,
  tags,
  onlyPartners,
  setOnlyPartners,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-slate-900/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="mx-auto mt-8 w-full max-w-3xl px-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Sperrin Law"
                  className="flex-1 bg-transparent text-base outline-none"
                  aria-label="Search Sperrin Law"
                />
                <button
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                >
                  <option>All</option>
                  {tags.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>

                <button
                  onClick={() => setOnlyPartners((v) => !v)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm",
                    onlyPartners
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 text-slate-700 border border-slate-200",
                  ].join(" ")}
                >
                  <BadgeCheck className="inline h-4 w-4 mr-2" />
                  Partners only
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
