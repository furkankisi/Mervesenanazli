'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, ChevronRight } from 'lucide-react';
import { staggerContainer, fadeUp, textReveal, imageReveal } from '@/lib/animations';
import { blogPosts, recipes } from '@/data/content';

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] pt-32 pb-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <div className="overflow-hidden mb-6">
              <motion.h1 variants={textReveal} className="font-serif text-6xl md:text-8xl leading-[1.05] text-forest">
                İyi beslen.<br/>
                <span className="text-sage">İyi hisset.</span><br/>
                Hayatını değiştir.
              </motion.h1>
            </div>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-charcoal/70 max-w-lg mb-10 leading-relaxed">
              Beslenme, geçici bir diyet değil, kendinize duyduğunuz saygının en somut halidir. Uzm. Dyt. Merve Sena Nazlı ile sürdürülebilir bir yaşam.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <Link href="/danismanlik" className="px-8 py-4 bg-forest text-off-white rounded-full hover:bg-charcoal transition-all hover:scale-105 hover:shadow-xl hover:shadow-forest/20 active:scale-95 flex items-center gap-2 group">
                Online Randevu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog" className="px-8 py-4 border border-forest/20 text-forest rounded-full hover:border-forest hover:bg-forest/5 transition-all">
                Blogu Keşfet
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full group"
            initial="hidden"
            animate="show"
            variants={imageReveal}
          >
            {/* Organic Shape Image Crop */}
            <div className="w-full h-full relative rounded-[120px_40px_200px_40px] overflow-hidden shadow-2xl shadow-forest/10 transition-transform duration-700 group-hover:scale-[1.02]">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Uzm. Dyt. Merve Sena Nazlı - Wellness" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-forest/10 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3 hover:scale-105 transition-transform cursor-default"
            >
              <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest" />
              </div>
              <div>
                <p className="text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Danışan Başarısı</p>
                <p className="font-serif text-xl text-forest">%98 Memnuniyet</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. APPROACH SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="sticky top-32 h-fit"
            >
              <span className="text-sage text-8xl font-serif leading-none mb-6 block">01</span>
              <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Beslenmeye<br/>farklı bakıyorum.</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                Yasaklar, katı kurallar ve suçluluk duygusu üzerine kurulu sistemler çalışmaz. Amacım bedeninizi tanımanız ve ona ihtiyacı olanı vermeniz.
              </p>
              <Link href="/hakkimda" className="inline-flex items-center gap-2 text-forest font-semibold hover:text-sage transition-colors group">
                Hikayemi Keşfet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <div className="space-y-6">
              {[
                { title: "Kişiye Özel", desc: "Genetik yapınız, yaşam tarzınız ve damak tadınız tek. Programınız da öyle olmalı." },
                { title: "Bilimsel", desc: "Popüler diyet mitleri yerine, güncel literatür ve kanıta dayalı tıp ışığında ilerliyoruz." },
                { title: "Sürdürülebilir", desc: "Sosyal hayatınızdan kopmadan, ömür boyu uygulayabileceğiniz alışkanlıklar inşa ediyoruz." }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                  className="group p-10 border border-beige/40 rounded-3xl hover:bg-off-white hover:border-beige transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-beige/30"
                >
                  <p className="text-sm font-semibold text-sage mb-2 transition-colors group-hover:text-forest">0{index + 2}</p>
                  <h3 className="text-2xl font-serif text-forest mb-3">{item.title}</h3>
                  <p className="text-charcoal/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED BLOG & GRID SECTION */}
      <section className="py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4">Bilgiyle beslen.</h2>
            <p className="text-charcoal/70 text-lg">Bilimsel veriler ışığında günlük hayata uyarlanabilir öneriler.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-8 group cursor-pointer">
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <p className="text-sage text-sm font-semibold uppercase tracking-wider mb-3">{blogPosts[0].category} • {blogPosts[0].readTime}</p>
              <h3 className="text-3xl font-serif text-forest mb-4 group-hover:text-sage transition-colors">{blogPosts[0].title}</h3>
              <span className="inline-flex items-center gap-2 text-forest text-sm font-medium">Yazıyı Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></span>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              {blogPosts.slice(1).map((post) => (
                <motion.div key={post.slug} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="group cursor-pointer flex flex-col gap-4">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  </div>
                  <div>
                    <p className="text-sage text-xs font-semibold uppercase tracking-wider mb-2">{post.category}</p>
                    <h3 className="text-xl font-serif text-forest group-hover:text-sage transition-colors leading-snug">{post.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECIPES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif text-forest">Denemeye Değer <br/> Tarifler</motion.h2>
            <Link href="/tarifler" className="hidden md:flex items-center gap-2 text-charcoal/60 hover:text-forest transition-colors group">
              Tümünü Gör <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {recipes.map((recipe) => (
              <motion.div key={recipe.title} variants={fadeUp} className="group cursor-pointer">
                <div className="relative h-[350px] rounded-3xl overflow-hidden mb-6">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-forest group-hover:bg-forest group-hover:text-white transition-colors">{recipe.macros.cal} kcal</span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-forest group-hover:bg-forest group-hover:text-white transition-colors">{recipe.macros.pro} Protein</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-forest mb-2 group-hover:text-sage transition-colors">{recipe.title}</h3>
                <p className="text-sm text-charcoal/60 flex items-center gap-2">Hazırlama süresi: {recipe.macros.time}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 bg-forest relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-5xl md:text-7xl font-serif text-off-white mb-6">
            Değişim küçük bir<br/>adımla başlar.
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-beige text-xl mb-12">
            Merve Sena Nazlı ile beslenme hedeflerin için birlikte çalışalım.
          </motion.p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/randevu" className="inline-block px-10 py-5 bg-off-white text-forest text-lg font-semibold rounded-full hover:bg-beige transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20">
              Hemen Randevu Al
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}