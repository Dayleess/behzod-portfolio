import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/50 text-sm font-light">
          © {new Date().getFullYear()} Portfolio. Built with Next.js & Framer Motion.
        </div>

        <div className="flex items-center space-x-8">
          <Link href="#" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Top
          </Link>
          <Link href="#projects" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Work
          </Link>
          <Link href="#contact" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Contact
          </Link>
          <Link href="https://t.me/Dayleess_dev" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors text-sm">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}
