"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Navigation, Pin, MapPin, Monitor, CheckCircle2 } from "lucide-react";

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
    // Menghapus bg-gray-50 agar menyatu dengan halaman parent (page.tsx)
    <section id="about" className="py-24 relative font-sans overflow-hidden">
      
      {/* --- LATAR BELAKANG PENYAMBUNG (BRIDGING) --- */}
      {/* Pola Titik (Dot Grid) dasar */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />
      
      {/* Bentuk penyambung dari Hero Section (Nempel di atas) */}
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-cyan-100/50 rounded-full z-0" />
      <div className="absolute top-[10%] -left-20 w-[30rem] h-[30rem] bg-yellow-100/40 rounded-full z-0" />
      
      {/* Aksen geometris kecil */}
      <div className="absolute top-[20%] left-[45%] w-12 h-12 border-[4px] border-red-300 rounded-full z-0 opacity-40" />
      <div className="absolute bottom-[10%] left-[10%] w-20 h-20 bg-yellow-200/50 rounded-2xl rotate-[-15deg] z-0" />


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[70vh]">
          
          {/* --- KOLOM KIRI: TEKS (7 Kolom) --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-7 space-y-8"
          >
            <Badge className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2.5 rounded-full text-xs font-black tracking-widest border-none shadow-sm flex items-center gap-2 w-max">
              <Navigation className="w-4 h-4 fill-gray-900 rotate-90" />
              PORTOFOLIO DEVELOPER
            </Badge>

            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900">
              About <span className="text-red-500">Me.</span>
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-3 -ml-3 rounded-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <p>
                Saya Muhammad Ainur Rofik, seorang Web Developer yang berfokus pada efisiensi sistem, otomasi, dan arsitektur backend. Saya memiliki ketertarikan kuat dalam membangun aplikasi modern dari awal hingga siap digunakan. Keahlian saya mencakup perancangan logika backend menggunakan <strong>Laravel</strong> dan <strong>Python Flask</strong>, pengelolaan basis data, hingga konfigurasi perangkat lunak web server seperti <strong>Nginx</strong> di lingkungan operasi Linux.
              </p>
              <p>
                Dalam proses pengembangan, saya sangat nyaman mengadopsi alur kerja <em>AI-Assisted Development</em> untuk mempercepat penulisan kode, <em>debugging</em>, dan mencari solusi logis. Saya berfokus pada sisi perangkat lunak dan <em>deployment</em> aplikasi, sementara untuk urusan perangkat keras fisik (*hardware* lab/server) saya serahkan kepada pihak infrastruktur yang berwenang.
              </p>
              <p>
                Saat ini, saya sedang menaruh fokus penuh untuk merampungkan platform <strong>Whypanel</strong> guna menyambut tahap Seminar Hasil.
              </p>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: GAMBAR & KARTU (5 Kolom) --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeLeft}
            className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Wadah Utama Foto */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] z-10">
              
              {/* Bingkai Foto */}
              <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 relative">
                {/* 
                  Menggunakan tag <img> HTML biasa dengan sistem Fallback.
                  Jika foto-profil.jpg tidak ditemukan, otomatis menampilkan avatar huruf AR.
                */}
                <img 
                  src="/images/foto-profil.jpg" 
                  alt="Muhammad Ainur Rofik"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Ainur+Rofik&background=FDE047&color=1F2937&size=512&font-size=0.33";
                  }}
                />
              </div>

              {/* Card 1: Kutipan (Nempel di pojok kanan atas bingkai) */}
              <div className="absolute -top-6 -right-12 lg:-right-20 w-56 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block">
                <Pin className="absolute -top-3 -right-2 w-6 h-6 text-red-500 fill-red-500 rotate-12" />
                <p className="text-xs font-bold text-gray-800 leading-snug">
                  "Infrastruktur perangkat lunak yang solid dan kode yang bersih adalah fondasi aplikasi yang skalabel."
                </p>
              </div>

              {/* Card 2: Profil Detail (Nempel di sisi kanan tengah) */}
              <div className="absolute top-[40%] -right-8 lg:-right-16 w-52 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block">
                <h4 className="font-black text-gray-900 mb-3 text-xs border-b pb-2">Profil Singkat</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase">Lokasi</p>
                      <p className="text-xs font-bold text-gray-900 leading-none mt-0.5">Sidoarjo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Monitor className="w-4 h-4 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase">Fokus</p>
                      <p className="text-xs font-bold text-gray-900 leading-tight mt-0.5">Backend & Automasi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Keahlian Utama (Blok Kuning di kiri bawah) */}
              <div className="absolute -bottom-8 -left-8 lg:-left-12 w-64 bg-yellow-400 p-5 rounded-2xl shadow-xl z-30">
                <h4 className="font-black text-yellow-950 text-sm mb-3">Keahlian Utama</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-red-500 shrink-0" />
                    <span className="text-xs font-bold text-yellow-950">Arsitektur MVC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-red-500 shrink-0" />
                    <span className="text-xs font-bold text-yellow-950">Isolasi & Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-red-500 shrink-0" />
                    <span className="text-xs font-bold text-yellow-950">Pemecahan Logika</span>
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