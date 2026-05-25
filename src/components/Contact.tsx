import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { company } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const[loading,setLoading]=useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const data = {
      name:f.get("name") as string,
      email:f.get("email") as string,
      phone:f.get("phone") as string,
      message:f.get("message")as string,
    };
    // Validation
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) errs.email = "Valid email required";
    if (!data.phone?.trim()) errs.phone = "Phone is required";
    if (!data.message?.trim() || data.message.length < 10) errs.message = "Tell us a bit more";
    setErrors(errs);

    if (Object.keys(errs).length > 0) return ;
     
      try{
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`,
          {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body:JSON.stringify(data),
        }
        );

        if(!response.ok){
          throw new Error("Failed to send")
        }
        setSent(true);
        form.reset();
        setTimeout(()=> setSent(false),4000);
      }catch(error){
        console.error(error);
        alert("Failed to send message");
      }finally{
        setLoading(false);
      }
    };
      
     

  const items = [
    { icon: MapPin, label: "Address", value: company.address },
    { icon: Phone, label: "Phone", value: company.phone },
    { icon: Mail, label: "Email", value: company.email },
    { icon: Clock, label: "Working Hours", value: company.hours },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-gold-soft/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs md:text-4xl uppercase tracking-[0.3em] text-gradient-gold font-semibold">Get In Touch</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold">Let's build something iconic.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
          
            {items.map((it) => (
              <div key={it.label} className="bg-white rounded-2xl p-5 border border-white shadow-card flex gap-4 items-start hover:shadow-soft transition">
                <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shrink-0">
                  <it.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  <div className="font-medium mt-0.5">{it.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-white space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Name" placeholder="John Doe" error={errors.name} />
              <Field name="email" label="Email" type="email" placeholder="you@company.com" error={errors.email} />
            </div>
            <Field name="phone" label="Phone" placeholder="+971 50 000 0000" error={errors.phone} />
            <Field name="message" label="Message" textarea placeholder="Tell us about your project..." error={errors.message} />

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-white px-7 py-4 font-medium shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {loading ? (
                "Sending..."
              ) : sent ?(
                <>
                <CheckCircle2 className="h-5 w-5"/>
                Message Sent
                </>
              ):(
                <>
                Send Message
                <Send className="h-4 w-4" />
                </>
              )}
             </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", placeholder, textarea, error,
}: { name: string; label: string; type?: string; placeholder?: string; textarea?: boolean; error?: string }) {
  const base =
    "w-full bg-secondary/60 border border-transparent rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} placeholder={placeholder} className={`mt-2 ${base} resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={`mt-2 ${base}`} />
      )}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}