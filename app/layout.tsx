import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: 'Uzm. Dyt. Elif Yılmaz | Modern Beslenme ve Sağlıklı Yaşam',
  description: 'Beslenmeyi bir diyetten daha fazlasına dönüştürün. Kişiye özel, bilimsel ve sürdürülebilir beslenme danışmanlığı.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${playfair.variable} ${manrope.variable} font-sans bg-off-white text-charcoal antialiased selection:bg-sage selection:text-forest`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}