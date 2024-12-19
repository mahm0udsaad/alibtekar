import { Contact } from '@/components/contact'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Contact />
      <Footer />
    </main>
  )
}

