"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Globe, Database, ShoppingCart, Smartphone, Figma, Github, Layers } from "lucide-react"

export default function About() {
  const skills = [
    {
      name: "JavaScript",
      icon: <Code2 className="h-5 w-5" />,
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    },
    { name: "React", icon: <Code2 className="h-5 w-5" />, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50" },
    { name: "Next.js", icon: <Layers className="h-5 w-5" />, color: "bg-gray-500/20 text-gray-300 border-gray-500/50" },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-5 w-5" />,
      color: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    },

    
    {
      name: "UI/UX Design",
      icon: <Figma className="h-5 w-5" />,
      color: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-pink-500/20 text-pink-400 border-pink-500/50",
    },
    {
      name: "Git/GitHub",
      icon: <Github className="h-5 w-5" />,
      color: "bg-gray-500/20 text-gray-300 border-gray-500/50",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-5 w-5" />,
      color: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    },
    {
      name: "WordPress",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    },
    {
      name: "Shopify",
      icon: <ShoppingCart className="h-5 w-5" />,
      color: "bg-green-500/20 text-green-400 border-green-500/50",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="section-title neon-purple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 neon-cyan">About Me</h3>

              <p className="text-gray-300 mb-6">
                I'm a Full Stack Developer with <strong>4+ years of experience</strong> in building clean, responsive web apps.
                After a year of dedicated self-learning, I joined <strong>Connextar</strong> as an intern and later advanced to a
                <strong> Junior Web Developer</strong>.
              </p>

              <p className="text-gray-300 mb-6">
                I’ve worked on several real-world projects and enjoy solving problems across both frontend and backend using tools like
                <strong> React, Next.js, Node.js,</strong> and <strong>Tailwind CSS</strong>. Some of my favorite projects are highlighted below.
              </p>


              <p className="text-gray-300">
                I'm always learning — exploring new tools, contributing to open-source, and refining my skills to stay ahead in tech.
              </p>
            </div>


          </motion.div>

          {/* Right column - Skills */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 neon-cyan"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skills & Technologies
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`flex items-center gap-3 p-4 rounded-lg border ${skill.color} card-hover`}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

