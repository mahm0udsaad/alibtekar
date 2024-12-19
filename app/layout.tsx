import { Tajawal } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'مركز الإبتكار الفني للألمنيوم',
  description: 'مركز متخصص في أعمال الألمنيوم والمعادن وأبواب WPC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

