import { forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Egg, Hammer } from 'lucide-react'
import { MagneticElement } from './MagneticElement.jsx'

export const DigSection = forwardRef(function DigSection(
  {
    opacityDescentText,
    treasureScale,
    treasureRotate,
    treasureOpacity,
    knockCount,
    onKnock,
  },
  ref,
) {
  return (
    <section ref={ref} className="relative h-[250vh]">
      <motion.div
        style={{ opacity: opacityDescentText }}
        className="sticky top-0 h-screen w-full flex items-center justify-center z-20 pointer-events-none"
      >
        <h2 className="text-[15vw] font-black text-emerald-900/5 whitespace-nowrap uppercase italic">
          DEEPER DEEPER DEEPER
        </h2>
      </motion.div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: treasureScale,
            rotate: treasureRotate,
            opacity: treasureOpacity,
          }}
        >
          <MagneticElement>
            <div
              className="relative cursor-pointer group p-12"
              onClick={onKnock}
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />
              <Egg
                size={240}
                className="text-emerald-600 relative z-10 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                strokeWidth={1}
              />

              <AnimatePresence>
                {knockCount > 0 && (
                  <motion.div
                    key="hammer"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-10 -right-10 z-20"
                  >
                    <Hammer
                      className="text-emerald-900 drop-shadow-lg"
                      size={64}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </MagneticElement>
        </motion.div>

        <div className="absolute bottom-20 flex gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i < knockCount ? [1, 1.5, 1] : 1,
                backgroundColor:
                  i < knockCount ? '#10b981' : 'rgba(16,185,129,0.1)',
              }}
              className="w-2 h-12 rounded-full border border-emerald-500/20"
            />
          ))}
        </div>
      </div>
    </section>
  )
})
