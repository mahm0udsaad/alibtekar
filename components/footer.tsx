import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">مركز الإبتكار الفني للألمنيوم</h3>
            <p className="text-gray-400">نبتكر لنرتقي بعالم الألمنيوم والمعادن وأبواب WPC</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">خدماتنا</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">منتجاتنا</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">جميع الحقوق محفوظة © {new Date().getFullYear()} مركز الإبتكار الفني للألمنيوم</p>
        </div>
      </div>
    </footer>
  )
}

