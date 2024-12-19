"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductMetalDoors() {
  return (
    <section id="metal-doors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://i.pinimg.com/736x/75/05/8f/75058f30ee7b192a5effcbae0da85e9c.jpg"
              alt="أبواب معدنية"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-[35rem]"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3949AB]">
              أبواب معدنية
            </h2>
            <p className="text-lg mb-6">
              أبوابنا المعدنية تجمع بين القوة والجمال. مصممة لتوفير أقصى درجات
              الأمان مع الحفاظ على المظهر الجمالي. مثالية للاستخدامات السكنية
              والتجارية على حد سواء.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>متانة عالية ومقاومة للاقتحام</li>
              <li>عزل حراري وصوتي ممتاز</li>
              <li>تصاميم متنوعة تناسب جميع الأذواق</li>
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
