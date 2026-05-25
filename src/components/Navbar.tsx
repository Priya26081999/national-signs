import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar({ onOpenTeam }: { onOpenTeam: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-glass shadow-card border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="h-12 w-12 rounded-2xl bg-gradient-gold shadow-soft grid place-items-center font-display text-white text-2xl md:text-4xl">N</div>
          <span className="font-display text-lg md:text-5xl font-semibold tracking-tight">
            National <span className="text-gradient-gold">Signs</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.to}
              onClick={() => go(l.to)}
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenTeam}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Users className="h-4 w-4" /> Our Team
          </button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-glass border-t border-border/40 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.to}
                  onClick={() => go(l.to)}
                  className="text-left px-3 py-3 rounded-lg hover:bg-muted text-sm font-medium"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => { setOpen(false); onOpenTeam(); }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-white px-5 py-3 text-sm font-medium shadow-soft"
              >
                <Users className="h-4 w-4" /> Our Team
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}