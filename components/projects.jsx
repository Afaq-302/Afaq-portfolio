"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This e-commerce platform provides a seamless shopping experience with features like product search, filtering, user accounts, wishlists, and secure payment processing through Stripe. The admin dashboard allows for easy product and order management.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern portfolio website for a photographer, featuring a gallery with filtering and lightbox functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Framer Motion", "CSS Grid", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This portfolio website showcases a photographer's work with a responsive image gallery, category filtering, and a lightbox for detailed viewing. It includes contact forms, about sections, and testimonials, all with smooth animations and transitions.",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user assignments, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This task management app helps teams collaborate efficiently with features like task creation, assignment, due dates, comments, file attachments, and real-time updates. It includes dashboards for tracking progress and productivity analytics.",
    },
    {
      id: 4,
      title: "Fitness Tracking Dashboard",
      description:
        "A comprehensive fitness tracking dashboard that visualizes workout data, nutrition, and progress over time.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Chart.js", "Tailwind CSS", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This fitness dashboard helps users track their workouts, nutrition, and progress with interactive charts and visualizations. It integrates with fitness devices and apps to automatically import data and provide personalized insights and recommendations.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="section-title neon-pink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="glass-effect rounded-xl overflow-hidden card-hover">
              <div className="relative group">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 neon-cyan">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-gray-900 border-cyan-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold neon-cyan">{selectedProject?.title}</DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <img
              src={selectedProject?.image || "/placeholder.svg"}
              alt={selectedProject?.title}
              className="w-full h-auto rounded-lg mb-6"
            />

            <p className="text-gray-300 mb-6">{selectedProject?.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                onClick={() => window.open(selectedProject?.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
                onClick={() => window.open(selectedProject?.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

