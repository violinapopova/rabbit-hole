import { motion } from 'framer-motion'

export function CustomCursor({
  springCursorX,
  springCursorY,
  springCursorRingX,
  springCursorRingY,
}) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-600 rounded-full pointer-events-none z-[100] mix-blend-multiply"
        style={{
          x: springCursorX,
          y: springCursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-emerald-600/30 rounded-full pointer-events-none z-[100]"
        style={{
          x: springCursorRingX,
          y: springCursorRingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
