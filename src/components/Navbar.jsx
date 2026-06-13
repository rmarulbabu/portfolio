import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = LINKS.map((l) => document.getElementById(l.id));
      const offset = window.scrollY + window.innerHeight * 0.3;
      let current = "home";
      sections.forEach((s) => { if (s && s.offsetTop <= offset) current = s.id; });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/40 border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="font-display font-extrabold text-lg tracking-tight" data-testid="nav-logo">
          <span className="text-neon">{"<arulbabu/>"}</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className={`relative px-4 py-2 text-sm transition-colors ${active === l.id ? "text-white" : "text-zinc-400 hover:text-white"}`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/5 border border-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} data-testid="theme-toggle" aria-label="Toggle theme"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-[#00D4FF] transition">
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            onClick={() => setOpen((v) => !v)} data-testid="mobile-menu-toggle" aria-label="Menu">
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-2">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} data-testid={`mobile-nav-${l.id}`}
                className={`text-left py-2 ${active === l.id ? "text-[#00D4FF]" : "text-zinc-300"}`}>
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}