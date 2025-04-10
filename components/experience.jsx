"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Animmza",
      location: "Remote",
      period: "Nov 2024 – Apr 2025",
      description: (
        <>
          Worked as a Full Stack Developer, contributing to production-level features using <strong>React</strong>,{" "}
          <strong>Next.js</strong>, and <strong>Node.js</strong>. Developed and maintained key projects including the{" "}
          <a href="https://solutions-nextjs-app.vercel.app/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Solutions App
          </a>{" "}
          (appointment & post management),{" "}
          <a href="https://flooring-admin-panel.vercel.app/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Flooring Admin Panel
          </a>
          , and{" "}
          <a href="https://convertify-by-afaq.vercel.app/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Convertify
          </a>{" "}
          (a digital universal converter). Optimized backend APIs and collaborated with the UI/UX team to deliver seamless user experiences.
        </>
      ),
    }
    ,
    {
      title: "Junior Web Developer",
      company: "Connextar Technologies",
      location: "Bradford, United Kingdom",
      period: "Mar 2023 – Present",
      description: (
        <>
          Built the company’s official website (
          <a href="https://connextar.com" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Connextar
          </a>
          ) using Next.js 14, Tailwind CSS, and TypeScript. Worked on key projects including the{" "}
          <a href="https://mas.umairshah.dev/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Masjid App Suite
          </a>
          ,{" "}
          <a href="https://pokerply.vercel.app/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Pokerply Telegram App
          </a>
          ,{" "}
          <a href="https://pdfcentre.io/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            PDFCenter.io
          </a>
          , and{" "}
          <a href="https://pak-draw-by-afaq.vercel.app/" className="neon-cyan" target="_blank" rel="noopener noreferrer">
            Pak Draw (experimental)
          </a>
          . Also developed an automatic invoice generator, contributed to a Chrome extension for time tracking, and supported backend development on various commercial apps.
        </>
      ),
    },

    {
      title: "Web Development Intern",
      company: "Connextar Technologies",
      location: "Bradford, United Kingdom",
      period: "Mar 2022 – Apr 2023",
      description: (
        <>
          Completed a year-long internship focused on the <strong>MERN stack</strong>, gaining hands-on experience through real tasks and mentorship. Built an{" "}
          <a
            href="https://invoice-generator-reactjs.vercel.app/"
            className="neon-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Invoice Generator App
          </a>{" "}
          and contributed to UI features like dropdown menus and translation work for the{" "}
          <a
            href="https://www.canvas-events.co.uk/"
            className="neon-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canvas Events website
          </a>
          . Successfully completed the{" "}
          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            className="neon-cyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete Web Development Bootcamp
          </a>{" "}
          on Udemy and contributed to internal tools and utilities.
        </>
      ),
    }
    
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
    <section id="experience" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="section-title neon-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="mb-12 relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 z-0"></div>
              )}

              <div className="glass-effect rounded-xl p-6 ml-16 relative card-hover">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 transform -translate-x-8 w-4 h-4 rounded-full bg-cyan-500 glow z-10"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold neon-purple">{exp.title}</h3>
                  <div className="text-gray-400 flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center text-gray-300 mb-4">
                  <div className="flex items-center mr-6">
                    <Briefcase className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

