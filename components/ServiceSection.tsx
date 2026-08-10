"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Zap, ArrowRight, Layers, Cpu, Globe } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      id: "01",
      title: "Web Development",
      desc: "Merancang aplikasi web dinamis berarsitektur MVC. Performa tinggi dengan antarmuka yang responsif dan manajemen database yang solid.",
      icon: Code2,
      accent: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-500",
      glow: "group-hover:shadow-[0_20px_40px_-12px_rgba(56,189,248,0.3)] group-hover:border-blue-200",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      ]
    },
    {
      id: "02",
      title: "Server & VPS",
      desc: "Infrastruktur server tingkat lanjut. Mulai dari setup OS Linux, konfigurasi Nginx, isolasi keamanan, hingga optimasi produksi.",
      icon: Terminal,
      accent: "from-emerald-500 to-green-400",
      iconColor: "text-emerald-500",
      glow: "group-hover:shadow-[0_20px_40px_-12px_rgba(52,211,153,0.3)] group-hover:border-emerald-200",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      ]
    },
    {
      id: "03",
      title: "Auto Deployment",
      desc: "Membangun pipeline CI/CD dan skrip otomatisasi untuk rilis aplikasi yang instan, meminimalisir error, dan pencatatan log real-time.",
      icon: Zap,
      accent: "from-amber-500 to-orange-400",
      iconColor: "text-amber-500",
      glow: "group-hover:shadow-[0_20px_40px_-12px_rgba(251,191,36,0.3)] group-hover:border-amber-200",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      ]
    }
  ];

  return (
    // Background diubah ke off-white/slate sangat muda agar elegan
    <section className="py-12 lg:py-0 min-h-screen flex items-center justify-center relative font-sans bg-[#f8fafc] overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND (Efek Garis Minimalis Terang) --- */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] [background-position:center_center] z-0" /> */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none z-0" /> */}
      <div id="services" className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl w-full">
        
        {/* === HEADER SECTION === */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-gray-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Spesialisasi Teknis</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
          >
            Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Deploy.</span> Automate.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium"
          >
            Menciptakan ekosistem digital yang mulus, dari penulisan kode arsitektur backend hingga otomatisasi infrastruktur server.
          </motion.p>
        </div>

        {/* === 3 COLUMN CARDS (Mode Terang) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              // Wrapper dengan border transparan yang berubah warna saat hover
              className={`group relative rounded-3xl p-[1px] border border-gray-200/60 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ${service.glow}`}
            >
              {/* Inner Card Layer */}
              <div className="relative h-full bg-white rounded-[23px] p-6 sm:p-8 flex flex-col overflow-hidden">
                
                {/* Efek Cahaya Sudut (Lembut) saat di-hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none`} />

                {/* Header Card: Ikon & Nomor */}
                <div className="flex justify-between items-start mb-6 z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:bg-white group-hover:shadow-sm transition-all duration-500`}>
                    <service.icon className={`w-6 h-6 text-slate-400 group-hover:${service.iconColor} transition-colors duration-500`} strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-slate-900/5 group-hover:text-slate-900/10 transition-colors duration-500">
                    {service.id}
                  </span>
                </div>

                {/* Konten Teks */}
                <div className="z-10 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-[12px] sm:text-[13px] leading-relaxed font-medium mb-8">
                    {service.desc}
                  </p>
                </div>

                {/* Footer Card: Tech Stack & Panah */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 z-10 mt-auto">
                  <div className="flex items-center gap-3">
                    {service.tech.map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-slate-50 p-1.5 border border-slate-100 group-hover:border-slate-200 transition-colors">
                        <img src={icon} alt="Tech" className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}