"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductWPCDoors() {
  return (
    <section id="wpc-doors" className="py-20">
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
              src="https://i.pinimg.com/736x/b7/3a/51/b73a51558faa2ec49e318005b82d41a2.jpg"
              alt="أبواب WPC"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-[35rem]"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3949AB]">
              أبواب WPC
            </h2>
            <p className="text-lg mb-6">
              أبواب WPC (مركب الخشب والبلاستيك) تجمع بين جمال الخشب ومتانة
              البلاستيك. مثالية للاستخدامات الداخلية والخارجية، وتوفر حلاً
              مستداماً وطويل الأمد.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>مقاومة للماء والرطوبة</li>
              <li>لا تتعرض للتشقق أو التشويه</li>
              <li>صديقة للبيئة ومصنوعة من مواد معاد تدويرها</li>
              <li>متوفرة بتشكيلة واسعة من الألوان والتصاميم</li>
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
