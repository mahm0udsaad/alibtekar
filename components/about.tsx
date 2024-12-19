import { SectionHeader } from './section-header'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="من نحن"
          subtitle="تعرف على قصتنا ورؤيتنا"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            نحن في مركز الإبتكار الفني للألمنيوم نسعى جاهدين لتقديم أفضل الحلول في مجال الألمنيوم والمعادن وأبواب WPC. نجمع بين الخبرة والابتكار لنقدم منتجات تتميز بالجودة العالية والتصميم الفريد.
          </p>
          <p className="text-lg text-gray-700">
            منذ تأسيسنا، ونحن نعمل على تطوير أنفسنا باستمرار لنواكب أحدث التقنيات والاتجاهات في مجالنا. نفخر بفريقنا المتخصص وبالثقة التي منحها لنا عملاؤنا على مر السنين.
          </p>
        </div>
      </div>
    </section>
  )
}

