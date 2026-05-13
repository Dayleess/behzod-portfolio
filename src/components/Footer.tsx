'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/50 text-sm font-light">
          © {new Date().getFullYear()} Behzod Abdug‘afforov. Barcha huquqlar himoyalangan.
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" onClick={scrollToTop} className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Yuqoriga
          </a>
          <Link href="#projects" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Loyihalar
          </Link>
          <Link href="#contact" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Aloqa
          </Link>
          <Link href="https://github.com/Dayleess" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            GitHub
          </Link>
          <Link href="https://t.me/Dayleess_dev" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}
