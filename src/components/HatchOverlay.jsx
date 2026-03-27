import { motion, AnimatePresence } from 'framer-motion'
import { Rabbit } from 'lucide-react'

export function HatchOverlay({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-emerald-500 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center opacity-10"
          >
            <Rabbit size={800} />
          </motion.div>
          <div className="text-center z-10">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[15vw] font-black text-white italic leading-none"
            >
              HATCHED
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
