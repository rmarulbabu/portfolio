import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SKILL_GROUPS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="section-eyebrow">02 · Stack</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Tools I reach for <span className="text-animated-gradient">every day</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <Tilt key={group.title} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.15}
              glareColor={group.accent} glarePosition="all" transitionSpeed={1500} scale={1.01}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="glass conic-border p-7 h-full"
                data-testid={`skill-group-${group.title.toLowerCase()}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="font-display text-xl font-bold">{group.title}</div>
                  <div className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: group.accent, boxShadow: `0 0 14px ${group.accent}` }} />
                </div>
                <ul className="space-y-4">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-zinc-200">{s.name}</span>
                        <span className="font-mono text-[11px] text-zinc-500">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${group.accent}, #ffffff66)`,
                            boxShadow: `0 0 8px ${group.accent}` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}