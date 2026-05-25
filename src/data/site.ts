import hero from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import {
  Layers, Wrench, Building2, Zap, Car, Warehouse, Sparkles,
  Lightbulb, Square, Printer, Tag,
} from "lucide-react";

export const heroImage = hero;

export const services = [
  { icon: Layers, title: "ACP Works", desc: "Premium aluminum composite panel cladding for facades & interiors." },
  { icon: Wrench, title: "Metal Fabrication", desc: "Precision-cut, welded & finished metalwork for any spec." },
  { icon: Building2, title: "Structural Works", desc: "Engineered steel structures built to last." },
  { icon: Zap, title: "Genset Works", desc: "Custom enclosures, canopies & installation for generators." },
  { icon: Car, title: "AC Ramps", desc: "Heavy-duty access ramps fabricated to site requirements." },
  { icon: Warehouse, title: "Shed Works", desc: "Industrial sheds, warehouses & roofing solutions." },
  { icon: Sparkles, title: "Metal Arts", desc: "Decorative laser-cut metal panels & artistic facades." },
  { icon: Lightbulb, title: "3D LED Signage", desc: "Backlit, front-lit & halo-lit channel letter signs." },
  { icon: Square, title: "Acrylic Signage", desc: "Crisp acrylic letters, plaques & brand displays." },
  { icon: Printer, title: "Flex Printing", desc: "Large-format outdoor banners & billboard prints." },
  { icon: Tag, title: "Vinyl Branding", desc: "Vehicle wraps, window graphics & wall vinyls." },
];

export const projects = [
  { img: p1, title: "Corporate HQ Signage", tag: "3D LED" },
  { img: p2, title: "ACP Tower Facade", tag: "Facade" },
  { img: p3, title: "Industrial Shed", tag: "Structural" },
  { img: p4, title: "Retail Acrylic Sign", tag: "Acrylic" },
  { img: p5, title: "Fleet Vinyl Wrap", tag: "Branding" },
  { img: p6, title: "Outdoor Billboard", tag: "Flex Print" },
];

export const team = [
  { img: t1, name: "Rohan Mehta", role: "Founder & CEO" },
  { img: t2, name: "Aisha Khan", role: "Creative Director" },
  { img: t3, name: "Karim Al-Sayed", role: "Head of Fabrication" },
  { img: t4, name: "Vikram Shah", role: "Lead Designer" },
];

export const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export const company = {
  name: "National Sign",
  phone: "+971 50 123 4567",
  email: "info@nationalsign.com",
  whatsapp: "971501234567",
  address: "Industrial Area 12, Dubai, UAE",
  hours: "Sat – Thu · 9:00 AM – 7:00 PM",
};