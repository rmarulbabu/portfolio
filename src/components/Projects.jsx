import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { PROJECTS, PROJECT_FILTERS } from "../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24 md:py-32" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="section-eyebrow">03 · Work</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Selected <span className="text-animated-gradient">projects</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist">
            {PROJECT_FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                data-testid={`project-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                  filter === f ? "bg-[#00D4FF] text-black shadow-[0_0_20px_rgba(0,212,255,0.5)]" : "glass text-zinc-300 hover:text-white"
                }`}>{f}</button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div layout key={p.id} initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}>
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.18}
                  glareColor="#00D4FF" scale={1.02} transitionSpeed={1200}>
                  <article className="glass conic-border overflow-hidden h-full flex flex-col" data-testid={`project-card-${p.id}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-black/60 backdrop-blur text-[#00FF88]">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold">{p.title}</h3>
                      <p className="muted text-sm mt-2 flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.tech.map((t) => (
                          <span key={t} className="font-mono text-[10px] tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-5">
                        <a href={p.demo} target="_blank" rel="noreferrer" data-testid={`project-demo-${p.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#00D4FF] hover:text-white transition">
                          <FiExternalLink /> Live
                        </a>
                        <a href={p.repo} target="_blank" rel="noreferrer" data-testid={`project-repo-${p.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition">
                          <FiGithub /> Code
                        </a>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}