import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-aurora"
      data-testid="loading-screen"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loader-ring" />
        <div className="font-mono text-xs tracking-[0.4em] text-neon-blue uppercase">
          Booting Portfolio
        </div>
      </div>
    </motion.div>
  );
}