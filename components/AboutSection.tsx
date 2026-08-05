"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Navigation, Pin, MapPin, Check, User, Activity } from "lucide-react";

export default function AboutSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    /* PERBAIKAN UTAMA:
      - `scroll-mt-24`: Memberikan jarak aman saat di-scroll dari Navbar agar tidak mentok ke Hero Section.
      - `min-h-screen`: Memaksa section ini mengambil tinggi minimal satu layar penuh.
      - `flex items-center`: Memastikan semua konten berada di tengah-tengah layar secara vertikal saat di-scroll.
    */
    <section className="relative z-10 min-h-screen flex items-center py-20 lg:py-28 font-sans overflow-hidden bg-white scroll-mt-24">
      
      {/* --- LATAR BELAKANG --- */}
      <div  className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />

      <div id="about" className="container mx-auto px-6 py-16 relative z-10W">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- KOLOM KIRI: TEKS (6 Kolom) --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-6 space-y-8"
          >
            <Badge className="bg-[#FDE047] hover:bg-yellow-500 text-gray-900 px-5 py-4 rounded-full text-xs font-black tracking-widest border-none shadow-sm flex items-center gap-2 w-max">
              PORTOFOLIO DEVELOPER
            </Badge>

            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900">
              About <span className="text-[#F87171]">Me</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed font-medium text-justify pr-0 lg:pr-4">
              <p>
                Saya Muhammad Ainur Rofik, seorang Web Developer yang berfokus pada efisiensi sistem, manajemen server, dan pemecahan masalah. Saya memiliki ketertarikan yang kuat dalam membangun aplikasi dari hulu ke hilir. Keahlian saya mencakup perancangan arsitektur backend menggunakan Laravel, pengelolaan basis data, hingga konfigurasi web server seperti Nginx di lingkungan OS Linux. 
              </p>
              <p>
                Saya mengadopsi alur kerja AI-Assisted Development untuk mempercepat penulisan kode, debugging, dan memastikan aplikasi aman serta siap di-deploy. Di luar keahlian teknis, saya mampu bekerja secara mandiri maupun di dalam tim, serta memiliki kemampuan komunikasi yang solid untuk berkolaborasi dan berkoordinasi dengan berbagai pihak guna memastikan kelancaran pengembangan aplikasi.
              </p>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: GAMBAR & KARTU MELAYANG (6 Kolom) --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeLeft}
            className="lg:col-span-6 relative flex justify-center lg:justify-start items-center mt-12 lg:mt-0 lg:pl-6"
          >
            <div className="relative flex flex-col lg:block w-[280px] lg:w-[320px] h-auto lg:h-[420px] z-10 mx-auto lg:mx-0 lg:ml-2 gap-5 lg:gap-0">
              
              {/* Bingkai Foto Utama */}
              <div className="relative lg:absolute lg:inset-0 h-[380px] lg:h-auto w-full lg:w-full bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white z-10">
                <img 
                  src="/images/foto-profil.jpg" 
                  alt="Muhammad Ainur Rofik"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Ainur+Rofik&background=FDE047&color=1F2937&size=512&font-size=0.33";
                  }}
                />
              </div>

              {/* Card 1: Kutipan */}
              <div className="relative lg:absolute lg:top-8 lg:-right-28 xl:-right-48 w-full lg:w-[240px] bg-white p-4 lg:p-5 rounded-2xl shadow-xl z-20 border border-gray-100">
                <Pin className="absolute -top-4 -right-3 w-8 h-8 text-[#F87171] fill-[#F87171] rotate-12" />
                <p className="text-[12px] lg:text-[13px] font-bold text-gray-800 leading-snug">
                  Infrastruktur yang solid dan kode yang bersih adalah fondasi dari aplikasi web yang skalabel dan efisien.
                </p>
              </div>

              {/* Card 2: Profil Developer */}
              <div className="relative lg:absolute lg:top-38 lg:-right-28 xl:-right-48 w-full lg:w-[240px] bg-white p-4 lg:p-5 rounded-2xl shadow-xl z-20 border border-gray-100">
                <h4 className="font-black text-gray-900 mb-4 text-[14px] lg:text-[15px]">Profil Developer</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase leading-none mt-1">Nama</p>
                      <p className="text-[11px] lg:text-xs font-bold text-gray-900 leading-tight mt-1">Muhammad Ainur Rofik</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase leading-none mt-1">Lokasi</p>
                      <p className="text-[11px] lg:text-xs font-bold text-gray-900 leading-tight mt-1">Sidoarjo, Jawa Timur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase leading-none mt-1">Fokus</p>
                      <p className="text-[11px] lg:text-xs font-bold text-gray-900 leading-tight mt-1">Backend, frontend,<br/>Server, Automasi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Keahlian Utama (Kuning) */}
              <div className="relative lg:absolute lg:-bottom-20 lg:-left-8 w-full lg:w-[480px] bg-[#FDE047] py-3 px-5 lg:py-4 lg:px-6 rounded-2xl shadow-xl z-30 flex flex-col justify-center min-h-[100px]">
                
                {/* Jarak bawah judul (mb) dikurangi agar tidak memakan banyak ruang */}
                <h4 className="font-black text-gray-900 text-sm lg:text-base mb-2 lg:mb-3 text-left">
                  Keahlian Utama
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                  {/* Poin 1 (items-center agar ikon lurus dengan teks) */}
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#F87171] flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 leading-tight">Pengembangan<br className="hidden sm:block"/>MVC</span>
                  </div>
                  
                  {/* Poin 2 */}
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#F87171] flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 leading-tight">Isolasi & Deployment<br className="hidden sm:block"/>Server</span>
                  </div>
                  
                  {/* Poin 3 */}
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#F87171] flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 leading-tight">Pemecahan<br className="hidden sm:block"/>Masalah Logika</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}