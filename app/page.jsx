import Hero from "@/components/hero"
import About from "@/components/about"
import ScrollingText from "@/components/scrolling-text"
import Reviews from "@/components/reviews"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import FuturisticSection from "@/components/futuristic-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <ScrollingText />
      <Experience />
      <Projects />
      <Reviews />
      <FuturisticSection />
      <Contact />
      <Footer />
    </main>
  )
}

