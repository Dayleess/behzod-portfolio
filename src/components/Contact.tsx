'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Github, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { name: "Telegram", Icon: Send, href: "https://t.me/Dayleess_dev", color: "hover:bg-blue-500" },
  { name: "GitHub", Icon: Github, href: "https://github.com/Dayleess", color: "hover:bg-white/10" },
  { name: "Email", Icon: Mail, href: "mailto:behruzabdugafforov366@gmail.com", color: "hover:bg-red-500" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsLoading(true);
    
    try {
      // Bu yerda API ga so'rov yuborasiz
      // Misol: EmailJS, FormSubmit, yoki o'zingizning backend-ingiz
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text & Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold font-outfit">
                Keling, <span className="gradient-text">Gaplashamiz!</span>
              </h2>
            </motion.div>
            <p className="text-white/40 text-lg max-w-md italic">
              Yangi g{`'`}oya, hamkorlik yoki shunchaki salob berish uchun ham yozishingiz mumkin.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 glass-card p-6 !rounded-3xl hover:border-blue-500/30 transition-all">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Manzil</p>
                <p className="text-xl font-semibold">Toshkent, O{`'`}zbekiston</p>
              </div>
            </div>

            <div className="flex items-center gap-6 glass-card p-6 !rounded-3xl hover:border-blue-500/30 transition-all">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                <MessageSquare size={28} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Telegram</p>
                <p className="text-xl font-semibold">@Dayleess_dev</p>
              </div>
            </div>
          </div>

          {/* Social Links Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glass rounded-2xl transition-all ${social.color} hover:text-white border-white/5`}
              >
                <social.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-8 md:!p-12 !rounded-3xl space-y-8 relative"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-outfit">Habar yuboring</h3>
            <p className="text-white/40 text-sm italic">Tez orada sizga aloqaga chiqaman.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Ismingiz</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingizni kiriting"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Emailingizni kiriting"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Habar</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Bu yerga habaringizni yozing..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-card !bg-blue-600 hover:!bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed py-5 text-lg font-bold flex items-center justify-center gap-3 transition-all"
            >
              {isLoading ? 'Yuborilmoqda...' : 'Yuborish'} 
              {!isLoading && <Send size={20} />}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center">
                ✓ Habaringiz muvaffaqiyatli yuborildi!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                ✗ Barcha maydonlarni to{`'`}ldiring yoki qayta urinib ko{`'`}ring.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
