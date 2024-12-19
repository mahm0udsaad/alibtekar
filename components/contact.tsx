"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "./section-header";

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

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="اتصل بنا"
          subtitle="نحن هنا لمساعدتك في تحقيق رؤيتك"
        />
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary ml-2" />
                <p>المدير العام (فيصل العتيبي): 0555318553</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary ml-2" />
                <p>مسؤول المبيعات: 0532766480</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary ml-2" />
                <p>info@alibtikar-alfani.com</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary ml-2" />
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">ارسل لنا رسالة</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <motion.button
                type="submit"
                className="border px-6 py-2 rounded hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إرسال
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            className="col-span-1 lg:col-span-2 h-[450px] rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3718.2661218904027!2d40.44707867526308!3d21.260930980447117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE1JzM5LjQiTiA0MMKwMjYnNTguOCJF!5e0!3m2!1sen!2seg!4v1734537463004!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
