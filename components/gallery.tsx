"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./section-header";

const projects = [
  { title: "مشروع 1", image: "/placeholder.svg?height=300&width=400" },
  { title: "مشروع 2", image: "/placeholder.svg?height=300&width=400" },
  { title: "مشروع 3", image: "/placeholder.svg?height=300&width=400" },
  { title: "مشروع 4", image: "/placeholder.svg?height=300&width=400" },
  { title: "مشروع 5", image: "/placeholder.svg?height=300&width=400" },
  { title: "مشروع 6", image: "/placeholder.svg?height=300&width=400" },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Gallery() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="أعمال سابقة"
          subtitle="مجموعة من مشاريعنا السابقة"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
