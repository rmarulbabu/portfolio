import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { COUNTERS, EDUCATION, PROFILE } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div {...reveal} className="mb-12">
          <div className="section-eyebrow">01 · About</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Engineer by trade. <span className="text-neon">Designer by obsession.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div {...reveal} className="lg:col-span-7 glass p-8 md:p-10">
            <p className="text-lg leading-relaxed text-zinc-300">{PROFILE.longBio}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {COUNTERS.map((c) => (
                <div key={c.label} className="rounded-2xl border border-white/10 p-4 bg-white/[0.02]"
                  data-testid={`counter-${c.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="text-3xl md:text-4xl text-animated-gradient">
                    <AnimatedCounter value={c.value} suffix={c.suffix} />
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mt-2">{c.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-5 glass p-8">
            <div className="section-eyebrow mb-4">Education</div>
            <ol className="relative border-l border-white/10 pl-6 space-y-6">
              {EDUCATION.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_12px_#00D4FF]" />
                  <div className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">{e.year}</div>
                  <div className="font-display text-lg font-semibold mt-1">{e.title}</div>
                  <div className="text-sm text-[#00FF88] font-mono">{e.org}</div>
                  <div className="text-sm muted mt-1">{e.desc}</div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}