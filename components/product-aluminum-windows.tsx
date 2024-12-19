"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductAluminumWindows() {
  return (
    <section id="aluminum-windows" className="py-20 bg-gray-50">
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
              src="/window.jpeg"
              alt="نوافذ ألمنيوم"
              width={600}
              height={300}
              className="rounded-lg shadow-lg h-[35rem]"
            />
          </motion.div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3949AB]">
              نوافذ ألمنيوم
            </h2>
            <p className="text-lg mb-6">
              نوافذنا الألمنيوم تجمع بين الأناقة والوظائفية. مصممة لتحمل الظروف
              الجوية القاسية مع الحفاظ على جمالها لسنوات قادمة. توفر عزلاً
              حرارياً ممتازاً وتقلل من الضوضاء الخارجية.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>مقاومة للتآكل والصدأ</li>
              <li>متوفرة بألوان وتشطيبات متعددة</li>
              <li>سهلة التنظيف والصيانة</li>
              <li>توفير الطاقة من خلال العزل الحراري الممتاز</li>
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
