import Image from 'next/image';
import { ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Editorial Header */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-forest transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Blog'a Dön
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-sage mb-6">
            <span>Kilo Yönetimi</span>
            <span>•</span>
            <span>5 dk okuma</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-forest leading-tight mb-8">
            Kalıcı kilo kaybı neden sadece kalori hesabından ibaret değil?
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-charcoal/70">
            <span className="font-semibold text-forest">Uzm. Dyt. Elif Yılmaz</span>
            <span>•</span>
            <span>12 Ekim 2026</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto h-[50vh] md:h-[70vh] relative rounded-3xl overflow-hidden mb-16">
          <Image src="/images/blog-detail.jpg" alt="Makale Görseli" fill className="object-cover" />
        </div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-forest prose-p:text-charcoal/80 prose-a:text-sage hover:prose-a:text-forest prose-blockquote:border-sage prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:text-forest">
          <p>Kalori saymak, on yıllardır kilo vermenin altın kuralı olarak öğretildi. Ancak laboratuvar ortamındaki bir kalorimetrenin ölçtüğü enerji ile insan bedeninin metabolize ettiği enerji aynı şey değildir...</p>
          
          <h2>Hormonların Gücü</h2>
          <p>Yediğiniz 100 kalorilik bir brokoli ile 100 kalorilik bir şekerin vücudunuzdaki hormonal tepkisi tamamen farklıdır. İnsülin seviyeleriniz, tokluk hormonlarınız (leptin) ve açlık hormonlarınız (ghrelin) ne yediğinize göre şekillenir.</p>

          <blockquote>
            "Bedeniniz bir hesap makinesi değil, karmaşık ve muazzam bir kimya laboratuvarıdır."
          </blockquote>
          
          <h3>Peki ne yapmalıyız?</h3>
          <ul>
            <li>Besin yoğunluğu yüksek gıdalara odaklanın.</li>
            <li>Lif alımınızı artırarak bağırsak mikrobiyatanızı destekleyin.</li>
            <li>Stres yönetimi ve uyku düzenini beslenmenin ayrılmaz bir parçası olarak görün.</li>
          </ul>
        </div>

        {/* Share Section */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-beige/40 flex items-center justify-between">
          <p className="text-sm font-semibold text-forest">Bu yazıyı faydalı bulduysanız paylaşabilirsiniz.</p>
          <button className="p-3 bg-off-white rounded-full text-forest hover:bg-beige transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

      </div>
    </article>
  );
}