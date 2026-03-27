import { useState, useRef, useId } from 'react'
import { motion } from 'framer-motion'
import { Rabbit } from 'lucide-react'

export function RabbitPopCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const scanId = useId().replace(/:/g, '').slice(0, 4)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-emerald-900/5 cursor-none group shadow-lg shadow-emerald-900/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />

      <motion.div
        animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.95 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center"
      >
        <div className="relative mb-auto mt-10 w-full flex justify-center overflow-visible">
          <div className="absolute bottom-[-10px] w-24 h-4 bg-emerald-900/5 rounded-[100%] blur-md transition-transform group-hover:scale-x-125" />

          <motion.div
            initial={{ y: 60, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.2,
            }}
            whileHover={{
              y: [0, -20, 0],
              transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
            }}
            className={`${item.color} relative z-10`}
          >
            <Rabbit size={180} strokeWidth={0.5} />
          </motion.div>
        </div>

        <div className="relative z-10">
          <h4 className="text-2xl font-black tracking-tight text-emerald-950 uppercase italic">
            {item.title}
          </h4>
          <div className="w-12 h-[2px] bg-emerald-100 mx-auto my-4 rounded-full" />
          <p className="text-emerald-800/40 font-mono text-[10px] uppercase tracking-[0.2em]">
            Bio-Entity // Alpha
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-emerald-950 pointer-events-none"
        animate={{
          clipPath: hovered
            ? `circle(140px at ${mousePos.x}px ${mousePos.y}px)`
            : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
        }}
        transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center text-emerald-50">
          <motion.div
            animate={
              hovered ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}
            }
            transition={{ repeat: Infinity, duration: 3 }}
            className="mb-8 text-emerald-400"
          >
            {item.icon}
          </motion.div>
          <h5 className="text-xs font-mono uppercase tracking-[0.4em] mb-4 text-emerald-400/60">
            Scanning Interior...
          </h5>
          <p className="text-sm font-medium leading-relaxed max-w-[200px] italic">
            &ldquo;{item.inner}&rdquo;
          </p>

          <div className="absolute bottom-8 w-full px-12 opacity-20 flex justify-between font-mono text-[8px] uppercase">
            <span>Lat: 45.2N</span>
            <span>Ref: {scanId}</span>
            <span>Pulse: 144BPM</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-6 h-6 border-2 border-emerald-400 rounded-full z-50 pointer-events-none flex items-center justify-center"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hovered ? 0.8 : 0,
        }}
      >
        <div className="w-1 h-1 bg-emerald-400 rounded-full" />
      </motion.div>
    </motion.div>
  )
}
