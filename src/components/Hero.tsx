'use client';

import { motion } from 'framer-motion';
import { MousePointer2, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-4">
              Salom, men — Behzod Abdugafforov
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-tight mb-6">
              <span className="gradient-text">Web & Bot</span> <br />
              Dasturlarini <span className="text-white/20 italic font-light">Yarataman</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              Men zamonaviy Frontend interfeyslar va kuchli Telegram botlar yaratishga ixtisoslashgan dasturchiman.
              Foydalanuvchilarga qulay va ko{`'`}zga tashlanadigan mahsulotlar yaratish mening maqsadim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="glass-card px-8 py-4 bg-blue-600 hover:bg-blue-700 !p-4 !px-8 flex items-center gap-2 font-semibold transition-all group"
            >
              Loyihalarni ko{`'`}rish
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="glass px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold hover:border-white/30 transition-all"
            >
              Bog{`'`}lanish
              <Download size={18} className="text-white/40" />
            </Link>
          </motion.div>

          {/* Social Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-12 pt-8"
          >
            <div>
              <div className="text-3xl font-bold font-outfit">10+</div>
              <div className="text-white/40 text-sm">Loyihalar</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-outfit">TG</div>
              <div className="text-white/40 text-sm">Bot Expert</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-outfit">24/7</div>
              <div className="text-white/40 text-sm">Dasturlash</div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10"
          >
            <div className="glass-card w-[400px] h-[400px] rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
              <MousePointer2 size={120} className="text-blue-500/50 group-hover:scale-110 transition-transform duration-500" />

              {/* Floating badges */}
              <div className="absolute top-10 left-[-20px] glass p-3 rounded-xl animate-bounce shadow-2xl">
                🚀 Frontend
              </div>
              <div className="absolute bottom-40 right-[-30px] glass p-3 rounded-xl animate-pulse shadow-2xl" style={{ animationDelay: '1s' }}>
                🤖 Bot Dev
              </div>
            </div>
          </motion.div>

          {/* Background circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full opacity-50" />
        </div>
      </div>
    </section>
  );
}
