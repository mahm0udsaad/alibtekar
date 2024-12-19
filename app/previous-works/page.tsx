import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'

export default function PreviousWorksPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=800&width=1200")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#3949AB]/60 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">أعمال سابقة</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            استعرض مجموعة من مشاريعنا السابقة التي تعكس جودة عملنا وتنوع خبراتنا
          </p>
        </div>
      </section>

      <Gallery />
      <Footer />
    </main>
  )
}

