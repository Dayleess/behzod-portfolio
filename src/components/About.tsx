'use client';

import { motion } from 'framer-motion';
import { User, Code2, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Tajriba', value: '2+', icon: <Globe size={20} /> },
  { label: 'Loyihalar', value: '15+', icon: <Code2 size={20} /> },
  { label: 'Mijozlar', value: '10+', icon: <User size={20} /> },
  { label: 'TG Botlar', value: '8+', icon: <Cpu size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto"  >
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left: Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square glass-card rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-40 transition-opacity z-10" />
              <div className="relative w-full h-full">
                <Image 
                  src="/behzod.png" 
                  alt="Behzod" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                <p className="text-sm font-medium text-blue-400 mb-1 italic">Hozirgi maqsad:</p>
                <p className="text-white font-semibold">Dunyo darajasidagi murakkab tizimlar yaratish.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-outfit">
                Men Haqimda <span className="text-blue-500">Qisqacha</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                Dasturlash olamiga 2 yil oldin kirib kelganman. Hozirda Frontend (React/Next.js) va Telegram Bot (Python/Node.js) developer sifatida faoliyat yuritaman. 
                Har bir loyihada nafaqat kod, balki san{`'`}at asari yaratishga harakat qilaman.
              </p>
              <p className="text-white/60 leading-relaxed text-lg">
                Mening asosiy qadriyatim — bu sifat. Foydalanuvchi interfeysi (UI) chiroyli bo{`'`}lishi bilan birga, foydalanishga qulay (UX) bo{`'`}lishi shart.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-tighter">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
