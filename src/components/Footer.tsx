import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navLinks, services, company } from "@/data/site";

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative mt-16 bg-gradient-to-br from-gold-soft via-cream to-accent/40 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-gold shadow-soft grid place-items-center font-display text-white text-lg">N</div>
            <span className="font-display text-lg font-semibold">National <span className="text-gradient-gold">Sign</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium branding, fabrication and signage — designed, produced and installed in-house.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full  bg-white grid place-items-center shadow-card hover:bg-gradient-gold hover:text-gold transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <button onClick={() => go(l.to)} className="text-muted-foreground hover:text-foreground transition">{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title} className="text-muted-foreground">{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}