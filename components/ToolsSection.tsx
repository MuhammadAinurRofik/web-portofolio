"use client";

import { motion, Variants } from "framer-motion";

export default function ToolsSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const tools = [
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      desc: "Digunakan sebagai bahasa pemrograman utama di sisi backend untuk membangun logika aplikasi web dan pemrosesan data."
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      desc: "Framework PHP yang diandalkan untuk membangun aplikasi web yang terstruktur, aman, dan menerapkan pola arsitektur Model-View-Controller (MVC)."
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      desc: "Digunakan untuk membangun sisi antarmuka pengguna (frontend) yang interaktif dan dinamis."
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      desc: "Digunakan dalam pengembangan sistem pendukung, skrip otomasi, maupun pengembangan aplikasi berbasis backend."
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      desc: "Sistem manajemen basis data relasional (Relational Database) yang digunakan untuk menyimpan, mengelola, dan mengamankan data aplikasi."
    },
    {
      name: "Ubuntu",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
      desc: "Sistem operasi utama yang digunakan sebagai lingkungan server yang stabil, aman, dan andal untuk menjalankan serta menguji aplikasi."
    },
    {
      name: "Nginx",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      desc: "Perangkat lunak web server berkinerja tinggi yang dikonfigurasi untuk mengelola lalu lintas jaringan dan penerapan situs web."
    },
    {
      name: "Gemini",
      icon: "gemini", // Custom SVG icon di bawah
      desc: "Alat bantu kecerdasan buatan (AI) yang diintegrasikan dalam alur kerja pengembangan untuk mempercepat penulisan kode, debugging, dan pencarian solusi logika."
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      desc: "version control system yang digunakan untuk melacak perubahan kode dan mempermudah kolaborasi pengembangan proyek."
    }
  ];

  return (
    <section id="tools" className="min-h-screen flex items-center py-16 lg:py-24 relative font-sans bg-gray-50/50">
      
      {/* --- LATAR BELAKANG TITIK-TITIK --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* WADAH UTAMA GRID (Kunci layout 6 Kolom seperti gambar) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 items-stretch"
        >
          
          {/* HEADER JUDUL (Mengambil 3 kolom pertama di baris atas) */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col justify-center lg:pl-6 lg:pr-8 mb-6 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-gray-900 leading-[1.05] tracking-tight">
              Alat & <span className="text-[#F87171]">Teknologi<br />Pengembangan</span>
            </h2>
            <p className="mt-5 lg:mt-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed font-medium max-w-xl text-justify md:text-left">
              Membangun sistem yang terstruktur melalui integrasi arsitektur backend yang andal, manajemen server berbasis Linux, dan pemanfaatan AI untuk efisiensi pengembangan perangkat lunak.
            </p>
          </motion.div>

          {/* KARTU-KARTU TOOLS */}
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="col-span-1 bg-white rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Ikon Alat */}
              <div className="h-10 lg:h-12 flex items-center justify-center mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300">
                {tool.icon === "gemini" ? (
                  <div className="flex items-center gap-1.5">
                    {/* Bintang Gemini (Custom SVG Gradient) */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.4363 9.56372L22 12L14.4363 14.4363L12 22L9.56372 14.4363L2 12L9.56372 9.56372L12 2Z" fill="url(#geminiGradient)"/>
                      <defs>
                        <linearGradient id="geminiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#4285F4"/>
                          <stop offset="0.33" stopColor="#EA4335"/>
                          <stop offset="0.66" stopColor="#FBBC05"/>
                          <stop offset="1" stopColor="#34A853"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="font-bold text-gray-700 text-lg tracking-tight">Gemini</span>
                  </div>
                ) : (
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                )}
              </div>

              {/* Teks Deskripsi */}
              <p className="text-[10px] lg:text-[11.5px] text-gray-600 leading-[1.4] font-medium">
                {tool.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}