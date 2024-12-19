"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const products = [
  { name: "نوافذ ألمنيوم", image: "/placeholder.svg?height=300&width=400" },
  { name: "أبواب معدنية", image: "/placeholder.svg?height=300&width=400" },
  { name: "واجهات زجاجية", image: "/placeholder.svg?height=300&width=400" },
  { name: "أبواب WPC", image: "/placeholder.svg?height=300&width=400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="منتجاتنا"
          subtitle="اكتشف مجموعتنا المتنوعة من المنتجات عالية الجودة"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
