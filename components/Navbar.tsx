'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımda', href: '/hakkimda' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tarifler', href: '/tarifler' },
  { name: 'Danışmanlık', href: '/danismanlik' }
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-off-white/80 backdrop-blur-lg border-b border-forest/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-forest group">
            Merve Sena Nazlı<span className="text-sage transition-colors group-hover:text-forest"></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.name} href={item.href} className="relative py-2 group text-charcoal/80 hover:text-forest transition-colors">
                  {item.name}
                  {/* Hover Underline (Görünmezden Büyüyen) */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sage transition-all duration-300 group-hover:w-full opacity-50"></span>
                  
                  {/* Active State (Framer Motion Layout Animation) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-forest"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <Link href="/randevu" className="px-6 py-3 bg-forest text-off-white rounded-full hover:bg-charcoal hover:shadow-lg hover:shadow-forest/20 transition-all active:scale-95 flex items-center gap-2 group ml-4">
              Randevu Al
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <button className="md:hidden text-forest hover:text-sage transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-forest text-off-white p-6 flex flex-col justify-center"
        >
          <button className="absolute top-6 right-6 hover:rotate-90 transition-transform duration-300" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col gap-8 text-4xl font-serif">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-sage transition-colors hover:translate-x-2 transform duration-300">
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}