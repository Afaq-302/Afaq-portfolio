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
      title: "Connextar Website",
      description:
        "Official website for Connextar, built using modern tech stack including Next.js 14 and Tailwind CSS.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://connextar.com",
      githubUrl: "#",
      longDescription:
        "Connextar is a professional business website showcasing services and contact forms. Developed with scalability and performance in mind using Next.js 14, Tailwind CSS, and TypeScript.",
    },
    {
      id: 2,
      title: "Masjid App Suite",
      description:
        "A suite of applications designed to support masjid operations and community engagement.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://mas.umairshah.dev/",
      githubUrl: "#",
      longDescription:
        "Includes features like prayer times management, announcements, events, and donations. Built with a focus on utility and clean UI for masjid admins and attendees.",
    },
    {
      id: 3,
      title: "Solutions App",
      description:
        "A platform for managing appointments and posts effectively.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://solutions-nextjs-app.vercel.app/",
      githubUrl: "#",
      longDescription:
        "Solutions App allows for streamlined scheduling and post publishing with a clean admin interface. Built to cater to service providers and content managers.",
    },
    {
      id: 4,
      title: "PDFCenter.io",
      description:
        "An online PDF utility tool for converting, compressing, and managing PDFs.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://pdfcentre.io/",
      githubUrl: "#",
      longDescription:
        "PDFCenter.io helps users convert documents to and from PDF, compress files, and manage pages with ease. Optimized for speed and simplicity.",
    },
    {
      id: 5,
      title: "Pak Draw (Experimental)",
      description:
        "A creative experimental web app focused on drawing and visuals.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Canvas API", "JavaScript", "Next.js"],
      liveUrl: "https://pak-draw-by-afaq.vercel.app/",
      githubUrl: "#",
      longDescription:
        "An experimental drawing application using the Canvas API. Designed to test interactivity and real-time performance in a web-based creative tool.",
    },
    {
      id: 6,
      title: "Pokerply Telegram App",
      description:
        "A Telegram app for managing and interacting with poker games.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Telegram API", "Next.js", "Tailwind CSS"],
      liveUrl: "https://pokerply.vercel.app/",
      githubUrl: "#",
      longDescription:
        "Pokerply is a Telegram-integrated app that supports poker game management. It includes features like session tracking, scoreboards, and interactive commands.",
    },
  ];


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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-effect rounded-xl overflow-hidden card-hover">
              <div className="relative group">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold mb-2 neon-cyan hover:underline block"
                >
                  {project.title}
                </a>
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
            </div>
          ))}
        </div>

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

