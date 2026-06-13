import { useEffect, useState } from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../data/portfolio";

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-10 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <div className="font-display font-extrabold text-lg">
            <span className="text-neon">{"<arulbabu/>"}</span>
          </div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 mt-1">
            © {new Date().getFullYear()} {PROFILE.name} — All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: FiGithub, href: PROFILE.github, k: "github" },
            { Icon: FiLinkedin, href: PROFILE.linkedin, k: "linkedin" },
            { Icon: FiTwitter, href: PROFILE.twitter, k: "twitter" },
            { Icon: FiMail, href: `mailto:${PROFILE.email}`, k: "email" },
          ].map(({ Icon, href, k }) => (
            <a key={k} href={href} target="_blank" rel="noreferrer" data-testid={`footer-social-${k}`}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#00D4FF] hover:-translate-y-1 transition-all">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={top} data-testid="back-to-top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8A2BE2] text-black shadow-[0_0_24px_rgba(0,212,255,0.6)] flex items-center justify-center"
            aria-label="Back to top">
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}