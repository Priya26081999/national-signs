import { motion } from "framer-motion";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-transparent via-gold-soft/30 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-4xl uppercase tracking-[0.3em] text-gradient-gold font-semibold">What We Do</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold">Our Services</h2>
          <p className="mt-4 text-orange-700">Eleven specialised disciplines, one trusted partner.</p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-7 border border-white shadow-card hover:shadow-soft transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold opacity-5 group-hover:opacity-20 blur-3xl transition-opacity" />
              <div className="h-12 w-12 rounded-xl bg-gold-soft grid place-items-center group-hover:bg-gradient-gold transition-colors">
                <s.icon className="h-6 w-6 text-foreground group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-800 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}