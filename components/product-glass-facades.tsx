"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductGlassFacades() {
  return (
    <section id="glass-facades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://i.pinimg.com/736x/b3/69/ef/b369ef654c5828316f09e88a5084be6d.jpg"
              alt="واجهات زجاجية"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-[35rem]"
            />
          </motion.div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3949AB]">
              واجهات زجاجية
            </h2>
            <p className="text-lg mb-6">
              واجهاتنا الزجاجية تمنح مبانيك مظهراً عصرياً وأنيقاً. مصممة لتوفير
              إضاءة طبيعية ممتازة مع الحفاظ على كفاءة الطاقة. مثالية للمباني
              التجارية والسكنية الفاخرة.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>زجاج عالي الأداء للعزل الحراري</li>
              <li>مقاومة للأشعة فوق البنفسجية</li>
              <li>تصاميم مخصصة لتناسب هوية مبناك</li>
              <li>سهولة الصيانة والتنظيف</li>
            </ul>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اطلب عرض أسعار
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
