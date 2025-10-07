import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Linkedin } from "lucide-react";

export default function ProfileModal({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
          >
            <button
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-sm"
              aria-label="Close profile"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-0 md:grid-cols-5">
              <div className="md:col-span-2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6">
                <h3
                  id="profile-title"
                  className="text-2xl font-semibold text-slate-900"
                >
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {member.expertise.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-slate-700 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm shadow-sm hover:bg-slate-50"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm shadow-sm hover:bg-slate-50"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
