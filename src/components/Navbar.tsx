'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-outfit tracking-wider gradient-text">
          PORTFOLIO
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link font-medium">
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <Link href="https://github.com/Dayleess" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://t.me/Dayleess_dev" target="_blank" className="text-white/70 hover:text-white transition-colors">
              <Send size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                <Link href="https://github.com/Dayleess" target="_blank" className="text-white/70 hover:text-white">
                  <Github size={24} />
                </Link>
                <Link href="https://t.me/Dayleess_dev" target="_blank" className="text-white/70 hover:text-white">
                  <Send size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
