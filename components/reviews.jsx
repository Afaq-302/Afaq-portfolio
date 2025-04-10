"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"

export default function ReviewsSection() {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

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

    const reviews = [
        {
            name: "Mohammad Amir",
            role: "CEO, Connextar Technologies",
            linkedin: "https://www.linkedin.com/in/amir1988/", // replace with real URL
            review:
                "Afaq is a motivated and talented developer with strong frontend skills and solid backend knowledge. From intern to Junior Full Stack Developer, he’s grown impressively. His interest in Blockchain shows his drive to evolve. Glad to have him on the team.",
        },
        {
            name: "Hamza Kaleem",
            role: "CEO, Animmza",
            linkedin: "https://www.linkedin.com/in/hamza-kaleem-664919225/",
            review:
                "I found Afaq on LinkedIn, hired him remotely, and have been very satisfied. His professionalism and technical skills stand out. Although he couldn’t join us on-site due to geographical constraints, I highly recommend him as a 5-star MERN Stack Developer.",
        }
        ,
        {
            name: "Umair Shah",
            role: "Senior Developer, Connextar Technologies",
            linkedin: "https://www.linkedin.com/in/nicefellow1234/", // replace with real URL
            review:
                "Afaq is not just a colleague but a close friend. I helped him with the basics, and he quickly took charge of his own learning. Seeing him grow into a capable Full Stack Developer has been rewarding.",
        },
    ];



    return (
        <section ref={containerRef} className="relative overflow-hidden">
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
                        Reviews & Recommendations
                    </motion.h2>

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-xl text-gray-300">
                            Words from those I've worked with — their trust and support mean the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-effect p-8 rounded-xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-6 text-cyan-400">
                                        <Quote className="h-8 w-8" />
                                    </div>
                                    <p className="text-gray-300 italic mb-4">“{review.review}”</p>
                                    <div className="mt-4 mb-4 text-yellow-400 flex gap-1 text-lg">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <a
                                        href={review.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 font-semibold hover:underline hover:text-cyan-300 transition"
                                    >
                                        {review.name}
                                    </a>
                                    <p className="text-sm text-gray-400">{review.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </motion.div>
            </div>
        </section>
    )
}
