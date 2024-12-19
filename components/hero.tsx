"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1684511765573-ab69e14f7f87?q=80&w=2071&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#3949AB]/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          مركز الإبتكار الفني للألمنيوم
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          نبتكر لنرتقي بعالم الألمنيوم والمعادن وأبواب WPC
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-white text-[#3949AB] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          تواصل معنا
        </motion.a>
      </div>
    </section>
  );
}
