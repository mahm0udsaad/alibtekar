"use client";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  Building2,
  DoorOpenIcon as Gate,
  DoorClosed,
  Ruler,
  PaintBucket,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "أعمال الألمنيوم",
    description:
      "نقدم تصاميم مخصصة للنوافذ والأبواب والواجهات، تجمع بين الوظائف العملية والجماليات الحديثة. نستخدم أحدث التقنيات والمواد لضمان الجودة والمتانة.",
    details: [
      "تصميم وتركيب النوافذ والأبواب الألمنيوم",
      "واجهات زجاجية للمباني التجارية والسكنية",
      "أنظمة الستائر الجدارية",
      "أنظمة التظليل والمظلات الألمنيوم",
    ],
  },
  {
    icon: Gate,
    title: "أعمال المعادن",
    description:
      "نقدم حرفية عالية الجودة للبوابات والدرابزين والأسوار والقطع الزخرفية. نجمع بين التصميم الجمالي والوظيفة العملية لتلبية احتياجات عملائنا.",
    details: [
      "تصميم وتصنيع البوابات المعدنية",
      "درابزين للسلالم والشرفات",
      "أسوار معدنية للحدائق والمجمعات السكنية",
      "قطع زخرفية معدنية للديكور الداخلي والخارجي",
    ],
  },
  {
    icon: DoorClosed,
    title: "أبواب WPC",
    description:
      "نقدم أبواب مركبة من الخشب والبلاستيك، متينة وصديقة للبيئة، تضيف أناقة لأي مساحة. توفر هذه الأبواب مزايا فريدة تجمع بين جمال الخشب ومتانة البلاستيك.",
    details: [
      "أبواب WPC للاستخدامات الداخلية والخارجية",
      "مجموعة واسعة من الألوان والتشطيبات",
      "مقاومة للماء والرطوبة",
      "صيانة منخفضة وعمر افتراضي طويل",
    ],
  },
  {
    icon: Ruler,
    title: "خدمات القياس والتصميم",
    description:
      "نقدم خدمات قياس دقيقة وتصميم مخصص لجميع مشاريعنا. يعمل فريقنا المتخصص معك لتحقيق رؤيتك وضمان التناسب المثالي.",
    details: [
      "قياسات دقيقة في الموقع",
      "تصميم ثلاثي الأبعاد للمشاريع",
      "اقتراحات وحلول مبتكرة",
      "تعديلات وتحسينات على التصاميم الحالية",
    ],
  },
  {
    icon: PaintBucket,
    title: "خدمات الطلاء والتشطيب",
    description:
      "نقدم خدمات طلاء وتشطيب عالية الجودة لجميع منتجاتنا، مما يضمن مظهرًا جماليًا ومتانة طويلة الأمد.",
    details: [
      "طلاء الكتروستاتيك للألمنيوم والمعادن",
      "تشطيبات متنوعة (لامع، مطفي، خشبي، إلخ)",
      "طلاء مقاوم للعوامل الجوية للاستخدامات الخارجية",
      "خدمات إعادة الطلاء وتجديد المنتجات القديمة",
    ],
  },
  {
    icon: Wrench,
    title: "خدمات التركيب والصيانة",
    description:
      "نوفر خدمات تركيب احترافية وصيانة دورية لضمان أداء مثالي وعمر طويل لمنتجاتنا.",
    details: [
      "تركيب احترافي لجميع منتجاتنا",
      "صيانة دورية وإصلاحات",
      "استجابة سريعة لطلبات الصيانة الطارئة",
      "نصائح وإرشادات للعناية بالمنتجات",
    ],
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

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال الألمنيوم والمعادن
            وأبواب WPC
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#3949AB] flex items-center justify-center">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
