import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { team } from "@/data/site";

export default function TeamModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-foreground/30 backdrop-blur-md grid place-items-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-glass border border-white/40 rounded-3xl p-6 sm:p-10 shadow-soft max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/70 grid place-items-center hover:bg-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-semibold">The People</p>
              <h2 className="text-3xl sm:text-4xl font-display mt-2">Meet Our Team</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Designers, fabricators and engineers who bring every brand to life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-white/60 shadow-card hover:-translate-y-1 transition-transform"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-gold-soft">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-semibold text-base leading-tight">{m.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}