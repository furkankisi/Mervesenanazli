import Link from 'next/link'; 

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white py-16 border-t border-forest/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Marka & Logo Alanı */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-off-white mb-6 block">
              Merve Sena Nazlı<span className="text-sage"></span>
            </Link>
            <p className="text-sm text-beige/70 leading-relaxed pr-4">
              Beslenmeyi bir diyetten daha fazlasına dönüştürün. Sürdürülebilir, bilimsel ve tamamen size özel bir yolculuk.
            </p>
          </div>
          
          {/* Navigasyon */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage">Menü</h4>
            <ul className="space-y-4 text-sm text-beige/80">
              <li><Link href="/hakkimda" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">Hakkımda</Link></li>
              <li><Link href="/blog" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">Blog</Link></li>
              <li><Link href="/tarifler" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">Tarifler</Link></li>
              <li><Link href="/danismanlik" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">Danışmanlık</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage">İletişim</h4>
            <ul className="space-y-4 text-sm text-beige/80">
              <li>hello@gmail.com</li>
              <li>+90 (555) 555 55 55</li>
              <li>Başakşehir, İstanbul</li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage">Sosyal Medya</h4>
            <ul className="space-y-4 text-sm text-beige/80">
              <li><a href="#" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">Instagram</a></li>
              <li><a href="#" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">LinkedIn</a></li>
              <li><a href="#" className="hover:text-off-white hover:translate-x-1 transition-all inline-block">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ); 
} 
 