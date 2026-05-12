'use client';

import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  Smartphone, 
  Zap, 
  Database, 
  ShieldCheck, 
  ExternalLink,
  Code,
  FileCode,
  FileJson,
  Palette,
  Braces
} from 'lucide-react';

const fundamentals = [
  {
    name: "HTML5",
    level: "100%",
    Icon: FileCode,
    color: "text-orange-400"
  },
  {
    name: "CSS3",
    level: "100%",
    Icon: Palette,
    color: "text-blue-400"
  },
  {
    name: "JavaScript",
    level: "100%",
    Icon: FileJson,
    color: "text-yellow-400"
  },
  {
    name: "SASS / SCSS",
    level: "100%",
    Icon: Braces,
    color: "text-pink-400"
  },
];

const skills = [
  {
    name: "React / Next.js",
    level: "90%",
    Icon: Layers,
    color: "text-blue-400"
  },
  {
    name: "TypeScript",
    level: "85%",
    Icon: Zap,
    color: "text-yellow-400"
  },
  {
    name: "Tailwind CSS",
    level: "95%",
    Icon: Terminal,
    color: "text-cyan-400"
  },
  {
    name: "Python (TG Bot)",
    level: "88%",
    Icon: Code,
    color: "text-green-400"
  },
  {
    name: "Node.js",
    level: "80%",
    Icon: Database,
    color: "text-emerald-400"
  },
  {
    name: "Redux / Zustand",
    level: "85%",
    Icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    name: "Responsive UI",
    level: "95%",
    Icon: Smartphone,
    color: "text-pink-400"
  },
  {
    name: "API Integration",
    level: "92%",
    Icon: ExternalLink,
    color: "text-orange-400"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Texnik <span className="gradient-text">Ko{`'`}nikmalar</span>
          </h2>
        </motion.div>
        <p className="text-white/40 max-w-2xl mx-auto">
          Mening asosiy qurollarim va men erishgan mahorat darajasi.
        </p>
      </div>

      {/* Fundamentals row */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {fundamentals.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card group hover:-translate-y-2"
          >
            <div className={`p-4 bg-white/5 rounded-2xl w-fit mb-6 ${skill.color}`}>
              <skill.Icon />
            </div>
            <h3 className="text-xl font-bold mb-4 font-outfit">{skill.name}</h3>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
              />
            </div>
            <div className="mt-2 text-right text-xs text-white/20 font-mono italic">
              Level: {skill.level}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Skills */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card group hover:-translate-y-2"
          >
            <div className={`p-4 bg-white/5 rounded-2xl w-fit mb-6 ${skill.color}`}>
              <skill.Icon />
            </div>
            <h3 className="text-xl font-bold mb-4 font-outfit">{skill.name}</h3>
            
            {/* Progress Bar */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}
              />
            </div>
            <div className="mt-2 text-right text-xs text-white/20 font-mono italic">
              Level: {skill.level}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
