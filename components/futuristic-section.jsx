"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, Zap, Lightbulb, Sparkles } from "lucide-react"

export default function FuturisticSection() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Particle animation
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resizeCanvas = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
        canvas.width = width
        canvas.height = height
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles = []
    const particleCount = 100

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.2
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Modern Tech Stack",
      description:
        "Building robust web apps using React, Next.js, and modern frameworks for fast, scalable solutions.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimized Performance",
      description:
        "Writing clean, efficient code that ensures fast load times and a smooth user experience across all devices.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Custom Web Solutions",
      description:
        "Crafting tailored websites and apps that align perfectly with client goals and business needs.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Engaging UI/UX",
      description:
        "Designing intuitive, interactive interfaces that deliver a seamless and enjoyable user experience.",
    },
  ];


  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: dimensions.width, height: dimensions.height }}
      />

      <div className="section-container relative z-10">
        <motion.div style={{ y, opacity }}>
          <motion.h2
            className="section-title neon-cyan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Crafting Modern Web Experiences
          </motion.h2>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Building fast, responsive, and dynamic websites using the latest tools and frameworks — tailored to deliver real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl card-hover"
              >
                <div className="mb-6 text-cyan-400">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 neon-purple">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

