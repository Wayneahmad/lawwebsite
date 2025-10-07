// src/components/TeamGrid.jsx
import { AnimatePresence, motion } from "framer-motion";
import TeamCard from "./TeamCard";

export default function TeamGrid({ people, onOpen }) {
  return (
    <motion.div
      layout
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" // <-- xl -> lg
    >
      <AnimatePresence>
        {people.map((m, i) => (
          <motion.div
            key={m.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
          >
            <TeamCard person={m} onOpen={onOpen} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
