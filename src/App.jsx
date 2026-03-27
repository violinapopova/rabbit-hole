import { useState, useEffect, useRef } from 'react'
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'
import { ParallaxBackground } from './components/ParallaxBackground.jsx'
import { CustomCursor } from './components/CustomCursor.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { DigSection } from './components/DigSection.jsx'
import { GallerySection } from './components/GallerySection.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { HatchOverlay } from './components/HatchOverlay.jsx'

const App = () => {
  const [isHatched, setIsHatched] = useState(false)
  const [knockCount, setKnockCount] = useState(0)
  const containerRef = useRef(null)
  const digSectionRef = useRef(null)

  const { scrollYProgress } = useScroll()

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springCursorX = useSpring(cursorX, { damping: 20, stiffness: 250 })
  const springCursorY = useSpring(cursorY, { damping: 20, stiffness: 250 })
  const springCursorRingX = useSpring(cursorX, { damping: 40, stiffness: 150 })
  const springCursorRingY = useSpring(cursorY, { damping: 40, stiffness: 150 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  const handleKnock = () => {
    setKnockCount((prev) => {
      const next = prev + 1
      if (next >= 5) {
        setIsHatched(true)
        setTimeout(() => setIsHatched(false), 5000)
        return 0
      }
      return next
    })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToNext = () =>
    digSectionRef.current?.scrollIntoView({ behavior: 'smooth' })

  const opacityDescentText = useTransform(scrollYProgress, [0.15, 0.35], [1, 0])
  const treasureScale = useTransform(scrollYProgress, [0.2, 0.6], [0.6, 2.5])
  const treasureRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 180])
  const treasureOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, 1, 1, 0],
  )

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[500vh] transition-colors duration-1000 overflow-x-hidden font-sans
        ${isHatched ? 'bg-yellow-50' : 'bg-[#f0fdf4]'} text-emerald-950 selection:bg-emerald-200`}
    >
      <ParallaxBackground
        springCursorX={springCursorX}
        springCursorY={springCursorY}
      />

      <CustomCursor
        springCursorX={springCursorX}
        springCursorY={springCursorY}
        springCursorRingX={springCursorRingX}
        springCursorRingY={springCursorRingY}
      />

      <HeroSection onBeginDescent={scrollToNext} />

      <DigSection
        ref={digSectionRef}
        opacityDescentText={opacityDescentText}
        treasureScale={treasureScale}
        treasureRotate={treasureRotate}
        treasureOpacity={treasureOpacity}
        knockCount={knockCount}
        onKnock={handleKnock}
      />

      <GallerySection />

      <SiteFooter onBackToTop={scrollToTop} />

      <HatchOverlay open={isHatched} />
    </div>
  )
}

export default App
