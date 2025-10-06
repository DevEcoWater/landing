import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Solutions } from "@/components/solutions"
import { BusinessModel } from "@/components/business-model"
import { Roadmap } from "@/components/roadmap"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Solutions />
      <BusinessModel />
      <Roadmap />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
