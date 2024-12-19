"use client";
import { motion } from "framer-motion";
import { Building2, DoorOpenIcon as Gate, DoorClosed } from "lucide-react";
import { SectionHeader } from "./section-header";

const services = [
  {
    icon: Building2,
    title: "أعمال الألمنيوم",
    description:
      "تصاميم مخصصة للنوافذ والأبواب والواجهات، تجمع بين الوظائف العملية والجماليات الحديثة",
  },
  {
    icon: Gate,
    title: "أعمال المعادن",
    description:
      "حرفية عالية الجودة للبوابات والدرابزين والأسوار والقطع الزخرفية",
  },
  {
    icon: DoorClosed,
    title: "أبواب WPC",
    description:
      "أبواب مركبة من الخشب والبلاستيك، متينة وصديقة للبيئة، تضيف أناقة لأي مساحة",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="خدماتنا"
          subtitle="نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتكم"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#3949AB] flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
