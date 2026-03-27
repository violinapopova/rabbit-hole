import { motion } from 'framer-motion'

export function HeroSection({ onBeginDescent }) {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 text-center z-10">
      <div className="overflow-hidden mb-4">
        <motion.span
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          className="block text-emerald-600 font-mono tracking-widest text-xs uppercase font-bold"
        >
          Spring Experiment 2026
        </motion.span>
      </div>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[12vw] leading-none font-black tracking-tighter mb-8 text-emerald-950"
      >
        THE{' '}
        <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-emerald-800 via-emerald-600 to-emerald-400">
          RABBIT
        </span>{' '}
        HOLE
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-xl text-emerald-800/60 text-lg md:text-xl font-medium leading-relaxed"
      >
        An interactive playground exploring the delicate balance between
        physics-driven motion and tactile UI. Every movement is an experiment in
        digital wonder.
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        onClick={onBeginDescent}
        className="absolute bottom-12 cursor-pointer group flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 text-emerald-800/60 group-hover:text-emerald-500 transition-colors">
          Begin Descent
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-emerald-500 to-transparent overflow-hidden">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-full h-1/2 bg-emerald-600"
          />
        </div>
      </motion.div>
    </section>
  )
}
