import { motion } from 'framer-motion'

export function ParallaxBackground({ springCursorX, springCursorY }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] bg-emerald-400/20 pointer-events-none"
        style={{
          x: springCursorX,
          y: springCursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  )
}
