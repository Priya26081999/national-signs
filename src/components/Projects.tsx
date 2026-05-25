import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="text-4xl uppercase tracking-[0.3em] text-gradient-gold font-semibold">Our Work</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold">Featured Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A selection of recent installations across retail, hospitality and corporate sectors.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card cursor-pointer"
            >
              <img
                src={p.img} alt={p.title} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="inline-flex w-fit text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur px-3 py-1 rounded-full border border-white/30">
                  {p.tag}
                </span>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold leading-tight">{p.title}</h3>
                  <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}