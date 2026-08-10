"use client";

import { motion } from "framer-motion";
// Mengganti Instagram dengan AtSign
import { Mail, MapPin, AtSign, Send, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@ainurrofik.dev",
      link: "mailto:hello@ainurrofik.dev", // Ganti dengan email asli Anda
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Surabaya, Jawa Timur", 
      link: "https://maps.google.com/?q=Surabaya",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: AtSign, // Menggunakan ikon @ untuk melambangkan username Instagram
      title: "Instagram",
      value: "@ainurrofik",
      link: "https://instagram.com/ainurrofik", // Ganti dengan username Anda
      color: "text-pink-500",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="py-10 lg:py-0 min-h-screen flex items-center relative font-sans bg-[#f8fafc] overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div id="contact" className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl w-full">
        
        {/* === HEADER SECTION (Sangat Minimalis) === */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
          >
            Mari Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Berkolaborasi.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* =========================================
              KOLOM KIRI: INFO KONTAK
          ========================================= */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${info.bg} group-hover:scale-110 transition-transform duration-500`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                    {info.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {info.value}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* =========================================
              KOLOM KANAN: FORMULIR KONTAK
          ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
              
              {/* Form Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Kirim Pesan</h3>
              </div>

              <form className="relative z-10 space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Nama */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[13px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Alamat Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[13px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Subjek */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Subjek</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Tawaran Proyek / Pertanyaan"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[13px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Pesan */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Pesan</label>
                  <textarea 
                    id="message"
                    rows={3}
                    placeholder="Ceritakan detail proyek atau pertanyaan Anda di sini..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-[13px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <button 
                  type="button" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-[13px] px-6 py-3 rounded-xl transition-colors duration-300 group"
                >
                  <span>Kirim Pesan Sekarang</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
                </button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}