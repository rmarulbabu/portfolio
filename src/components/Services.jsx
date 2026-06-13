import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiLayers, FiSmartphone, FiCpu, FiDatabase } from "react-icons/fi";
import { SERVICES } from "../data/portfolio";

const ICONS = { FiMonitor, FiServer, FiLayers, FiSmartphone, FiCpu, FiDatabase };

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="section-eyebrow">05 · Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            What I can <span className="text-animated-gradient">build for you</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }} className="glass conic-border p-7 group"
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#8A2BE2]/20 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:text-[#00FF88] transition mb-5">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="muted text-sm mt-2">{s.desc}</p>
                <div className="mt-5 font-mono text-[10px] tracking-widest uppercase text-zinc-500 group-hover:text-[#00D4FF] transition">
                  0{i + 1} / 0{SERVICES.length}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}