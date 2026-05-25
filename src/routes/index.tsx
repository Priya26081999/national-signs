import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TeamModal from "@/components/TeamModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Sign — Branding, Fabrication, Facades & Signage" },
      { name: "description", content: "Premium 3D LED signage, ACP facades, metal fabrication, structural steel and brand installations. Design, production and installation under one roof." },
      { property: "og:title", content: "National Sign — Premium Signage & Fabrication" },
      { property: "og:description", content: "Design • Production • Installation. Crafting brands that stand out." },
    ],
  }),
  component: Index,
});

function Index() {
  const [team, setTeam] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar onOpenTeam={() => setTeam(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <TeamModal open={team} onClose={() => setTeam(false)} />
    </div>
  );
}
