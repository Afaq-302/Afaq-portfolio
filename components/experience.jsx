"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description:
        "Led the frontend development team in building a cutting-edge SaaS platform. Implemented modern React architecture with Next.js, optimized performance, and improved user experience. Reduced load times by 40% and increased user engagement by 25%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "New York, NY",
      period: "2019 - 2021",
      description:
        "Developed responsive web applications using React, Redux, and Tailwind CSS. Collaborated with UX/UI designers to implement pixel-perfect interfaces. Integrated RESTful APIs and optimized application performance.",
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      location: "Austin, TX",
      period: "2017 - 2019",
      description:
        "Built custom WordPress and Shopify themes for various clients. Created interactive UI components using JavaScript and CSS. Maintained and updated existing client websites and e-commerce platforms.",
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

