import { motion } from "framer-motion";
import { PenTool, Cog, Truck } from "lucide-react";

const flow = [
  { icon: PenTool, title: "Design", desc: "Concept, 3D mockups & technical drawings tailored to your brand." },
  { icon: Cog, title: "Production", desc: "In-house fabrication with premium materials & precision tooling." },
  { icon: Truck, title: "Installation", desc: "Certified teams handle on-site mounting, wiring & finishing." },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-4xl uppercase tracking-[0.3em] text-gradient-gold font-semibold">About Us</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold">
            One studio, <span className="text-gradient-gold">end-to-end</span> craftsmanship.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            National Sign is a full-service branding, fabrication and signage company.
            We design, build and install everything in-house — from 3D LED signs and acrylic
            displays to ACP facades, structural steel, sheds, AC ramps and metal arts.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {flow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 shadow-card border border-white hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-6 left-8 h-12 w-12 rounded-2xl bg-gradient-gold grid place-items-center shadow-soft">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-6xl font-display font-bold text-gold leading-none">0{i + 1}</div>
              <h3 className="mt-3 text-2xl font-display font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}