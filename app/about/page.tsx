"use client";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=800&width=1200")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#3949AB]/60 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            تعرف على قصتنا ورؤيتنا وفريقنا في مركز الإبتكار الفني للألمنيوم
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#3949AB]">قصتنا</h2>
              <p className="text-gray-600 mb-4">
                تأسس مركز الإبتكار الفني للألمنيوم في عام 2010 بهدف تقديم حلول
                مبتكرة وعالية الجودة في مجال الألمنيوم والمعادن وأبواب WPC. منذ
                ذلك الحين، نمونا لنصبح واحدة من الشركات الرائدة في المملكة
                العربية السعودية في هذا المجال.
              </p>
              <p className="text-gray-600 mb-4">
                على مر السنين، قمنا بتنفيذ مئات المشاريع الناجحة، من المنازل
                الخاصة إلى المباني التجارية الضخمة. نفخر بسمعتنا في تقديم منتجات
                عالية الجودة وخدمة عملاء استثنائية.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="صورة عن الشركة"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#3949AB] text-center">
              رؤيتنا وقيمنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#3949AB]">
                  الابتكار
                </h3>
                <p className="text-gray-600">
                  نسعى دائمًا لتقديم حلول مبتكرة وفريدة تلبي احتياجات عملائنا
                  وتتجاوز توقعاتهم.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#3949AB]">
                  الجودة
                </h3>
                <p className="text-gray-600">
                  نلتزم بأعلى معايير الجودة في كل منتج نقدمه وكل خدمة نقدمها
                  لضمان رضا عملائنا.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#3949AB]">
                  خدمة العملاء
                </h3>
                <p className="text-gray-600">
                  نضع عملاءنا في صميم كل ما نقوم به، ونسعى جاهدين لتقديم تجربة
                  استثنائية في كل مرحلة من مراحل المشروع.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
