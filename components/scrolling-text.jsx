"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollingText() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const titles = [
    "FULL STACK DEVELOPER",
    "FRONTEND EXPERT",
    "WORDPRESS & SHOPIFY EXPERT",
    "JAVASCRIPT GURU",
    "UI/UX FOCUSED",
    "PROBLEM SOLVER",
  ]

  // Duplicate titles for continuous scrolling effect
  const row1 = [...titles, ...titles]
  const row2 = [...titles.reverse(), ...titles.reverse()]

  return (
    <section ref={containerRef} className="py-20 bg-black relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* First row - left to right */}
      <motion.div className="whitespace-nowrap flex mb-8" style={{ x: x1 }}>
        {row1.map((title, index) => (
          <div key={index} className="text-6xl md:text-8xl font-bold mx-8 neon-cyan inline-block">
            {title}
          </div>
        ))}
      </motion.div>

      {/* Second row - right to left */}
      <motion.div className="whitespace-nowrap flex" style={{ x: x2 }}>
        {row2.map((title, index) => (
          <div key={index} className="text-6xl md:text-8xl font-bold mx-8 neon-pink inline-block">
            {title}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

