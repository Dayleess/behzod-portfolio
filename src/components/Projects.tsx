'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Bot, Globe, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'itclub-site',
    description: `IT Club uchun yaratilgan maxsus veb-sayt.`,
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    image: <Globe size={40} className="text-blue-400/50" />,
    github: 'https://github.com/Dayleess/itclub-site',
    link: '#',
  },
  {
    title: 'anitime-bot',
    description: `Foydalanuvchilarga turli amallarni bajarishda yordamlashuvchi Telegram bot.`,
    tech: ['Python', 'Aiogram', 'Telegram API'],
    category: 'bot',
    image: <Bot size={40} className="text-purple-400/50" />,
    github: 'https://github.com/Dayleess/anitime-bot',
    link: 'https://t.me/Dayleess_dev',
  },
  {
    title: 'ocp-control-hub',
    description: 'Boshqaruv tizimi (Control Hub) uchun ishlab chiqilgan loyiha.',
    tech: ['React', 'TypeScript', 'Node.js'],
    category: 'web',
    image: <Globe size={40} className="text-blue-400/50" />,
    github: 'https://github.com/Dayleess/ocp-control-hub',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Minimalist va professional portfolio shabloni (-portfolio).',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'web',
    image: <Globe size={40} className="text-blue-400/50" />,
    github: 'https://github.com/Dayleess/-portfolio',
    link: '#',
  },
];

const categories = ['all', 'web', 'bot'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                Mening <span className="gradient-text">Loyihalarim</span>
              </h2>
            </motion.div>
            <p className="text-white/40 max-w-md">
              Eng yaxshi va qiziqarli ishlarimdan namunalar.
            </p>
          </div>

          <div className="flex bg-white/5 p-1 rounded-xl glass border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card flex flex-col group h-full"
              >
                <div className="aspect-video bg-white/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                  {project.image}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 hover:text-white"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold font-outfit group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    {project.title}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
