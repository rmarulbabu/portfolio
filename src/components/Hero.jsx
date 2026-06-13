import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Particles from "./Particles";
import { PROFILE } from "../data/portfolio";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0,212,255,0.12), transparent 60%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24" data-testid="hero-section">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <Particles density={70} />
      <div ref={glowRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="blob blob-animate w-[420px] h-[420px] bg-[#8A2BE2]/40 -top-20 -left-20" />
      <div className="blob blob-animate w-[380px] h-[380px] bg-[#00D4FF]/30 bottom-0 right-0" style={{ animationDelay: "-7s" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
          <div className="section-eyebrow mb-6" data-testid="hero-eyebrow">
            Portfolio — v3.0 · {PROFILE.location}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter break-words">
            Hi, I'm <span className="text-animated-gradient">{PROFILE.name}</span>.<br />
            <span className="text-white/90">I build </span>
            <TypeAnimation
              sequence={[
                "Python apps.", 1600,
                "React experiences.", 1600,
                "Backend engines.", 1600,
                "AI-powered tools.", 1600,
              ]}
              wrapper="span" speed={50} repeat={Infinity}
              className="type-anim inline-block" data-testid="hero-typing"
            />
          </h1>

          <p className="muted text-base md:text-lg max-w-2xl mt-6 leading-relaxed">{PROFILE.bio}</p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary group" data-testid="hero-cta-projects">
              View Projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={PROFILE.resumeUrl} download className="btn-ghost" data-testid="hero-cta-resume">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" data-testid="hero-social-github"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00D4FF] transition"><FiGithub /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-testid="hero-social-linkedin"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00D4FF] transition"><FiLinkedin /></a>
            <a href={`mailto:${PROFILE.email}`} data-testid="hero-social-email"
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00D4FF] transition"><FiMail /></a>
            <div className="ml-3 font-mono text-xs text-zinc-500 hidden md:block">↳ available for select 2026 projects</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center">
          <motion.div
            className="relative w-[220px] sm:w-[300px] lg:w-[360px] aspect-square"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Gradient glow behind image */}
            <div className="absolute -inset-6 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(closest-side, rgba(0,212,255,0.12), rgba(138,43,226,0.08), rgba(0,255,136,0.06))" }} />

            {/* Gradient ring */}
            <motion.div whileHover={{ scale: 1.03 }} className="relative w-full h-full rounded-full p-[6px]"
              style={{
                background: "conic-gradient(from 0deg, #00D4FF, #8A2BE2, #00FF88, #00D4FF)",
                boxShadow: "0 8px 30px rgba(0,212,255,0.08), inset 0 0 30px rgba(255,255,255,0.02)",
                borderRadius: "9999px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden glass-strong border border-white/10">
                <img
                  src="/portfolio img.jpeg"
                  alt={PROFILE.name}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  style={{ imageRendering: "auto", objectPosition: "50% 38%" }}
                />
                {/* subtle inner glow */}
                <div className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ boxShadow: "inset 0 0 28px rgba(0,212,255,0.06), inset 0 0 40px rgba(138,43,226,0.04)" }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
        scroll ↓
      </motion.div>
    </section>
  );
}