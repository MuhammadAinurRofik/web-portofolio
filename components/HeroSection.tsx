"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Code2 } from "lucide-react";

export default function HeroSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col overflow-hidden selection:bg-red-200 selection:text-red-900">
      
      {/* --- LATAR BELAKANG GEOMETRIS (DIREVISI) --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />
      
      {/* Lingkaran Besar - Ditarik lebih jauh ke pojok */}
      <div className="absolute -top-48 -left-48 w-[36rem] h-[36rem] bg-yellow-200/40 rounded-full z-0" />
      <div className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] bg-cyan-200/30 rounded-full z-0" />
      
      {/* Cincin Cyan - Dipindah ke kanan atas (area kosong) */}
      <div className="absolute top-[12%] right-[8%] w-20 h-20 border-[6px] border-cyan-300 rounded-full z-0 opacity-70" />
      
      {/* Kotak Merah - Dipindah ke tengah bawah (antara tombol dan kotak bento) */}
      <div className="absolute bottom-[15%] left-[45%] w-20 h-20 bg-red-200/60 rounded-3xl rotate-[25deg] z-0" />
      
      {/* Aksen Silang - Dipindah ke kiri tengah */}
      <div className="absolute top-[45%] left-[3%] w-8 h-8 flex items-center justify-center opacity-50 z-0 rotate-45">
        <div className="absolute w-full h-1.5 bg-red-300 rounded-full"></div>
        <div className="absolute h-full w-1.5 bg-red-300 rounded-full"></div>
      </div>


      {/* --- MENU NAVIGASI --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full container mx-auto px-6 py-8 flex justify-between items-center"
      >
        <div className="text-2xl font-black tracking-tighter text-gray-900">
          Fikstory<span className="text-red-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-gray-600 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-red-500 transition-colors">About Me</a>
          <a href="#tools" className="hover:text-cyan-600 transition-colors">Tools</a>
          <a href="#project" className="hover:text-yellow-500 transition-colors">Project</a>
          <a href="#services" className="hover:text-cyan-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact Me</a>
        </div>
      </motion.nav>

      {/* --- KONTEN UTAMA --- */}
      <main className="relative z-10 flex-1 w-full container mx-auto px-6 flex items-center justify-center pb-16">
        
        <div className="w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Bagian Kiri */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeUp}>
              <Badge className="bg-[#FDE047] hover:bg-yellow-500 text-gray-900 px-4 py-4 rounded-full text-xs font-black tracking-widest border-none shadow-sm flex items-center gap-2 w-max">
                WEB DEVELOPER & SERVER ENTHUSIAST
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-gray-900">
              Membangun <span className="text-cyan-500">Sistem.</span><br />
              Mengotomatisasi <span className="text-red-500">Masa Depan.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-xl leading-relaxed bg-white/30 backdrop-blur-[2px] rounded-lg p-1 -ml-1">
              Halo, saya Muhammad Ainur Rofik. Saya merancang arsitektur backend yang tangguh, mengelola infrastruktur Linux, dan memanfaatkan AI untuk mempercepat alur kerja. Saat ini sedang fokus menyempurnakan platform Whypanel untuk menuju tahap Seminar Hasil.
            </motion.p>

          </motion.div>

          {/* Bagian Kanan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 bg-yellow-400 rounded-[2rem] p-8 flex flex-col justify-between h-48 shadow-sm group hover:scale-[1.02] transition-transform relative overflow-hidden">
              <Code2 className="w-10 h-10 text-yellow-900 mb-4 relative z-10" />
              <div className="relative z-10">
                <h3 className="font-black text-2xl text-yellow-900">Backend System</h3>
                <p className="text-yellow-800 font-medium text-sm mt-1">PHP & Python</p>
              </div>
            </div>

            <div className="col-span-1 bg-cyan-200 rounded-[2rem] p-6 flex flex-col justify-between h-56 shadow-sm group hover:scale-[1.02] transition-transform">
              <Server className="w-8 h-8 text-cyan-800 mb-4" />
              <div>
                <h3 className="font-black text-xl text-cyan-900 leading-tight">Server<br/>Management</h3>
                <p className="text-cyan-700 font-medium text-xs mt-2">Nginx & Linux</p>
              </div>
            </div>

            <div className="col-span-1 bg-red-500 rounded-[2rem] p-6 flex flex-col justify-between h-56 shadow-sm group hover:scale-[1.02] transition-transform">
              <Terminal className="w-8 h-8 text-white mb-4" />
              <div>
                <h3 className="font-black text-xl text-white leading-tight">Automated<br/>Deployment</h3>
                <p className="text-red-100 font-medium text-xs mt-2">Efficiency & Speed</p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}