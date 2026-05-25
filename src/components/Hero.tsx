import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { heroImage } from "@/data/site";

const words = ["Design", "Production", "Installation"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % words.length);
        }
      }
    }, del ? 50 : 110);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="text-gradient-gold inline-block min-w-[6ch]">
      {text}<span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/70 to-background" />
      </div>

      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-gold opacity-20 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent opacity-40 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-gold px-4 py-1.5 text-xs font-semibold text-foreground/90 shadow-card backdrop-blur">
            <span className="h-5 w-5 rounded-full bg-gradient-gold animate-pulse" />
            Branding · Fabrication · Facades · Signage
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.07]">
            Crafting brands that
            <br />
            stand out, built to <span className="text-gradient-gold">last.</span>
          </h1>

          <p className="mt-6 text-2xl sm:text-3xl font-display">
            <Typewriter />
          </p>

          <p className="mt-6 text-base sm:text-lg text-white-foreground max-w-xl">
            From concept sketches to towering facades — National Sign delivers premium signage,
            fabrication and branding solutions trusted by industry leaders.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => go("services")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-white px-7 py-3.5 font-medium shadow-soft hover:shadow-lg transition"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-border px-7 py-3.5 font-medium hover:bg-white transition"
            >
              <MessageCircle className="h-4 w-4" /> Contact Us
            </motion.button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[["12+", "Years"], ["500+", "Projects"], ["50+", "Clients"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl sm:text-3xl font-display text-gradient-gold font-semibold">{n}</div>
                <div className="text-xs text-gray-700 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}