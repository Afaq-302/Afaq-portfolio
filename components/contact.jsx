"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xyzwgweo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("✅ Message sent successfully via Formspree!");
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        console.log("❌ Failed to send via Formspree:", data?.errors || "Unknown error");
      }
    } catch (err) {
      console.log("❌ Something went wrong while sending email via Formspree:", err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="section-title neon-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-effect p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-8 neon-purple">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:ufaq3022@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      ufaq3022@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+923129113445" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +92 312 9113445
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Mardan, KPK, Pakistan</p>
                  </div>
                </div>
              </div>


              <div className="mt-12">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-8">
                  <a
                    href="https://www.linkedin.com/in/afaqy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 scale-125 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/Afaq-302/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 scale-125 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 neon-purple">
                {formSubmitted ? "Form Submitted ✅" : "Send a Message"}
              </h3>


              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

