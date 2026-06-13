import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TESTIMONIALS } from "../data/portfolio";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % TESTIMONIALS.length);
  const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="relative py-24 md:py-32" data-testid="testimonials-section">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="section-eyebrow justify-center">06 · Kind words</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          What people <span className="text-animated-gradient">say</span>.
        </h2>

        <div className="relative mt-12 glass p-10 md:p-14 conic-border">
          <div className="absolute -top-6 left-8 text-7xl font-display text-[#00D4FF]"
            style={{ textShadow: "0 0 24px rgba(0,212,255,0.6)" }}>“</div>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
              className="min-h-[180px] flex flex-col justify-center" data-testid={`testimonial-${i}`}>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-200">{t.quote}</p>
              <div className="mt-6 font-display text-base font-semibold">{t.name}</div>
              <div className="font-mono text-xs tracking-widest uppercase text-[#00FF88] mt-1">{t.role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} data-testid={`testimonial-dot-${idx}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#00D4FF]" : "w-3 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to testimonial ${idx + 1}`} />
            ))}
          </div>

          <button onClick={prev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#00D4FF]"
            data-testid="testimonial-prev" aria-label="Previous"><FiChevronLeft /></button>
          <button onClick={next}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#00D4FF]"
            data-testid="testimonial-next" aria-label="Next"><FiChevronRight /></button>
        </div>
      </div>
    </section>
  );
}