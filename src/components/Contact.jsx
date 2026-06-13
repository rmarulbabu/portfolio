import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { PROFILE } from "../data/portfolio";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";
const API = BACKEND_URL ? `${BACKEND_URL}/api` : "";

function Field({ id, label, type = "text", value, onChange, textarea, required }) {
  const [focused, setFocused] = useState(false);
  const filled = value && value.length > 0;
  const float = focused || filled;
  const InputTag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <InputTag id={id} type={type} rows={textarea ? 5 : undefined}
        value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        data-testid={`contact-input-${id}`}
        className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_18px_rgba(0,212,255,0.3)] transition resize-none"
        placeholder=" " />
      <label htmlFor={id}
        className={`absolute left-4 font-mono text-[11px] tracking-widest uppercase pointer-events-none transition-all ${
          float ? "top-2 text-[#00D4FF]" : "top-4 text-zinc-500"
        }`}>{label}</label>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrMsg("Please fill in your name, email and message.");
      return;
    }
    setStatus("loading"); setErrMsg("");
    try {
      if (API) {
        await axios.post(`${API}/contact`, form);
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrMsg(err?.response?.data?.detail || "Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" data-testid="contact-section">
      <div className="blob w-[500px] h-[500px] bg-[#00D4FF]/25 top-10 -left-32" />
      <div className="blob w-[420px] h-[420px] bg-[#8A2BE2]/30 bottom-0 -right-32" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
          <div className="section-eyebrow">07 · Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Let's build something <span className="text-animated-gradient">unforgettable</span>.
          </h2>
          <p className="muted text-base mt-5 leading-relaxed">
            Got a project in mind, or just want to say hi? Drop me a message — I usually reply within a day.
          </p>

          <div className="space-y-3 mt-8">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 group" data-testid="contact-email-link">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#00D4FF]"><FiMail /></span>
              <span className="text-sm group-hover:text-[#00D4FF] transition">{PROFILE.email}</span>
            </a>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: FiGithub, href: PROFILE.github, k: "github" },
                { Icon: FiLinkedin, href: PROFILE.linkedin, k: "linkedin" },
                { Icon: FiTwitter, href: PROFILE.twitter, k: "twitter" },
              ].map(({ Icon, href, k }) => (
                <a key={k} href={href} target="_blank" rel="noreferrer" data-testid={`contact-social-${k}`}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[#00FF88] hover:border-[#00FF88]/50 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form onSubmit={submit} noValidate
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 glass p-8 md:p-10 space-y-5" data-testid="contact-form">
          <div className="grid md:grid-cols-2 gap-5">
            <Field id="name" label="Name" value={form.name} onChange={update("name")} required />
            <Field id="email" label="Email" type="email" value={form.email} onChange={update("email")} required />
          </div>
          <Field id="subject" label="Subject" value={form.subject} onChange={update("subject")} />
          <Field id="message" label="Message" textarea value={form.message} onChange={update("message")} required />

          <AnimatePresence>
            {errMsg && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="text-sm text-red-400 font-mono" data-testid="contact-error">
                {errMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="font-mono text-[11px] tracking-widest uppercase text-zinc-500">
              I'll never share your email.
            </div>
            <button type="submit" disabled={status === "loading"} data-testid="contact-submit"
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
              {status === "success" ? (<><FiCheck /> Sent</>) :
                status === "loading" ? (<>Sending...</>) :
                (<>Send Message <FiSend /></>)}
            </button>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="rounded-xl p-4 border border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88] flex items-center gap-2 font-mono text-sm"
                data-testid="contact-success">
                <FiCheck /> Thanks — message received. I'll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}