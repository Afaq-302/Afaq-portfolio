"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Code, Zap, Star } from "lucide-react"

import Afaq from "../public/afaq.png"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (typeof window !== "undefined") {
      handleResize() // Set initial size
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const calculateTransform = (x, y) => {
    if (!windowSize.width || !windowSize.height) return "translate(0px, 0px)"
    const moveX = (mousePosition.x - windowSize.width / 2) / 50
    const moveY = (mousePosition.y - windowSize.height / 2) / 50
    return `translate(${moveX * x}px, ${moveY * y}px)`
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
          style={{ transform: calculateTransform(-1, -1) }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          style={{ transform: calculateTransform(1, 1) }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"
          style={{ transform: calculateTransform(-1, 1) }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.7)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-cyan-400 opacity-70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ transform: calculateTransform(2, 2) }}
      >
        <Code size={40} className="animate-float" style={{ animationDelay: "0s" }} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 text-purple-400 opacity-70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        style={{ transform: calculateTransform(-2, -2) }}
      >
        <Zap size={40} className="animate-float" style={{ animationDelay: "0.5s" }} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/5 text-pink-400 opacity-70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        style={{ transform: calculateTransform(2, -2) }}
      >
        <Star size={40} className="animate-float" style={{ animationDelay: "1s" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto  pt-10 md:pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">

          {/* Text Content */}
          <div className="text-center md:text-left md:flex-1">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Hi, I'm </span>
                <span className="neon-cyan">AFAQ AHMAD</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-8 text-gray-300">
                <span className="neon-purple">Full Stack Developer</span> crafting digital experiences
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass-effect inline-block p-4 sm:p-6 rounded-xl mb-4 md:mb-8 lg:mb-12 max-w-md sm:max-w-2xl"
            >
              <p className="text-base sm:text-lg text-gray-300">
                I build exceptional and accessible digital experiences for the web, focusing on both aesthetics and functionality.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-row justify-center md:justify-start flex-wrap gap-4"
            >
              <a href="#projects">
                <Button
                  size="lg"
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-none shadow-md"
                >
                  View My Work
                </Button>
              </a>

              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 py-3 rounded-lg font-semibold border border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 shadow-md"
                >
                  Contact Me
                </Button>
              </a>
            </motion.div>

          </div>

          {/* Image */}
          <div className="md:flex-1 flex justify-center">
            <div className="relative rounded-full p-1 bg-cyan-500/20 shadow-[0_0_25px_#22d3ee]">
              <Image
                src={Afaq}
                alt="Afaq Ahmad"
                className="w-40 sm:w-60 md:w-72 lg:w-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_20px_#22d3ee]"
              />
            </div>
          </div>

        </div>
      </div>



      {/* Scroll indicator */}
      <motion.div
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.div>
    </section>
  )
}

