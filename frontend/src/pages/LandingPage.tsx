import Navbar from "../components/landing/Navbar"
import Hero from "../components/landing/Hero"

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
    </main>
  )
}

export default LandingPage