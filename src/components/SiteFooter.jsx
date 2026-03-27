import { motion } from 'framer-motion'

export function SiteFooter({ onBackToTop }) {
  return (
    <footer className="h-screen flex items-center justify-center bg-emerald-100/50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent, #10b98120, transparent)',
        }}
      />
      <div className="text-center relative z-10">
        <motion.div
          whileHover={{ scale: 0.95 }}
          onClick={onBackToTop}
          className="cursor-pointer"
        >
          <h4 className="text-[8vw] font-black tracking-tighter text-emerald-950 hover:text-emerald-600 transition-colors duration-500">
            BACK UP?
          </h4>
        </motion.div>
        <button
          type="button"
          onClick={onBackToTop}
          className="mt-8 px-12 py-4 bg-emerald-950 text-emerald-50 text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300 rounded-full shadow-xl shadow-emerald-900/10"
        >
          Start Over
        </button>
      </div>
    </footer>
  )
}
