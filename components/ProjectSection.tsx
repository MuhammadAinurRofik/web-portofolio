"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Navigation, FileText, ShoppingCart, Sparkles, ChevronLeft, ChevronRight, RotateCw, Globe, LayoutDashboard, ClipboardEdit, Rocket, Folder, Barcode, UserCheck, Users } from "lucide-react";
import { title } from "process";

interface ProjectTab {
  name: string;
  image: string;
}

interface ProjectItem {
  badge: string;
  title: string;
  desc: string;
  tabs: ProjectTab[]; 
  techIcons: string[];
  features: { title: string; desc: string; icon: any }[];
  
}

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [activeTab, setActiveTab] = useState(0); 
  const projects: ProjectItem[] = [
    {
      badge: "PROJECT MAGANG (PT RADNET DIGITAL INDONESIA)",
      title: "Mini E-Commerce Web Application",
      desc: "Aplikasi web e-commerce interaktif yang dibangun menggunakan arsitektur Model-View-Controller (MVC) pada kerangka kerja Laravel. Proyek ini dirancang dari nol untuk memberikan pengalaman berbelanja yang intuitif, berfokus pada kelancaran navigasi katalog produk dinamis dan efisiensi manajemen keranjang belanja.",
      tabs: [
        { name: "Landing Page", image: "/images/project1/img1.png" },
        { name: "Katalog Produk", image: "/images/project1/img2.png" },
        { name: "Keranjang Belanja", image: "/images/project1/img3.png" }
      ],
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      ],
      features: [
        { title: "Dynamic Catalog", desc: "Katalog produk dinamis dari database", icon: LayoutDashboard },
        { title: "Interactive Cart", desc: "Manajemen pesanan real-time", icon: ShoppingCart }
      ]
    },
    {
      badge: "PROJECT TUGAS AKHIR (SKIPSI)",
      title: "Automated Deployment & Management Panel",
      desc: "Sebuah platform panel manajemen berbasis web yang dibangun khusus untuk mengotomatisasi proses deployment dan mengelola lingkungan proyek. Sistem ini dirancang menggunakan kerangka kerja Laravel untuk memungkinkan pengguna mengelola file proyek mereka secara mandiri, sekaligus memberikan kontrol terpusat bagi administrator melalui pemantauan sistem real-time.",
      tabs: [
        { name: "Landing Page", image: "/images/project2/img1.png" },
        { name: "Dashboard Admin", image: "/images/project2/img2.png" },
        { name: "Antrean Deployment", image: "/images/project2/img3.png" },
        { name: "Log Aktivitas", image: "/images/project2/img4.png" },
        { name: "Dashboard User", image: "/images/project2/img5.png" }
      ],
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg", 
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",   
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      ],
      features: [
        { title: "File Manager", desc: "Pengelolaan file proyek secara mandiri", icon: Folder },
        { title: "Auto Deployment", desc: "Penerapan aplikasi secara otomatis kedalam server", icon: Rocket },
        { title: "Queue & Logging", desc: "Sistem antrean & log aktivitas", icon: ClipboardEdit }
      ]
    },
    {
      badge: "PROJECT FREELANCE DISHUB KOTA SURABAYA",
      title: "Sistem Presensi & Pelacakan Perangkat Juru Parkir",
      desc: "Aplikasi web manajemen aset berbasis Laravel yang dikembangkan khusus untuk Dinas Perhubungan (Dishub) guna melacak status absensi perangkat kerja juru parkir. Sistem ini memfasilitasi pencatatan log alat masuk, keluar, dan sisa stok melalui pemindaian barcode, serta dilengkapi pemisahan akses panel kontrol yang ketat antara Admin dan Superadmin untuk memantau sirkulasi perangkat secara real-time.",
      tabs: [
        { name: "Dashboard Superadmin", image: "/images/project3/img1.png" },
        { name: "Manage Data", image: "/images/project3/img2.png" },
        { name: "Scan Barcode", image: "/images/project3/img3.png" }
      ],
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      ],
      features: [
        { title: "Barcode Scan", desc: "Absensi masuk/keluar perangkat juru parkir", icon: Barcode },
        { title: "Multi-Role Dashboard", desc: "Akses terpisah khusus Admin & Superadmin", icon: Users },
        { title: "Automated Reporting", desc: "Rekap data & riwayat penggunaan alat", icon: ClipboardEdit }
      ]
    },
    {
      badge: "PROJECT PANEL SHARED HOSTING",
      title: "Automated Deployment Web Hosting Panel",
      desc: "Platform Software as a Service (SaaS) penyedia layanan web hosting yang mengandalkan teknologi automated deployment untuk mempermudah pengguna merilis aplikasi web secara instan. Sistem ini mengotomatisasi penyediaan lingkungan server, dilengkapi dengan modul pengelola fail (File Manager) dan database (phpMyAdmin) terintegrasi, serta didukung oleh sistem penagihan paket langganan otomatis berbasis dompet digital ",
      tabs: [
        { name: "Landing Page", image: "/images/project4/img1.png" },
        { name: "Dashboard Admin", image: "/images/project4/img3.png" },
        { name: "Halaman Pembayaran", image: "/images/project4/img5.png" },
        { name: "Dashboard User", image: "/images/project4/img6.png" },
        { name: "File Manager", image: "/images/project4/img7.png" }
      ],
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg", 
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",   
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      ],
      features: [
        { title: "Automated Deployment", desc: "Rilis aplikasi web ke server secara otomatis", icon: Rocket },
        { title: "Integrated Web Panel", desc: "Manajemen file dan akses database phpMyAdmin langsung dari dasbor", icon: Users },
        { title: "SaaS Subscription", desc: "Sistem langganan hosting berbayar via Dompet Digital", icon: ClipboardEdit }
      ]
    }
  ];

  const slideVariants: Variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeInOut" } },
    exit: (dir: number) => ({ x: dir < 0 ? 150 : -150, opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } })
  };

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setActiveTab(0); 
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveTab(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 lg:py-24 relative font-sans bg-gray-50/50 scroll-mt-16 overflow-hidden">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div id="project" className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* =========================================
              KOLOM KIRI: MONITOR MOCKUP DIPERBESAR
          ========================================= */}
          <div className="lg:col-span-6 flex flex-col relative">
            
            {/* Dynamic Badge */}
            <div className="h-12 flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-[#FDE047] text-gray-900 px-4 py-2 rounded-r-2xl rounded-l-md shadow-sm inline-flex items-center gap-2 font-black tracking-wide text-[10px] sm:text-xs uppercase"
                >
                  <Navigation className="w-4 h-4 fill-gray-900 rotate-90" />
                  {currentProject.badge}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mockup Monitor Tunggal (Lebar diperbesar max-w-3xl) */}
            <div className="relative w-full max-w-2xl mx-auto group select-none">
              
              {/* Kepala Monitor */}
              <div className="relative z-10 rounded-t-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] bg-slate-900 p-2 sm:p-3 pb-0 border border-slate-800">
                <div className="absolute top-1 sm:top-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-700 rounded-full z-20"></div>
                
                {/* Area Layar Monitor */}
                <div className="bg-white w-full aspect-video rounded-t-lg overflow-hidden relative border border-slate-950/10">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div 
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full absolute top-0 left-0 flex flex-col bg-white"
                    >
                      {/* === GOOGLE CHROME UI HEADER (SANGAT MINIMALIS) === */}
                      <div className="flex flex-col bg-[#dee1e6] border-b border-gray-300">
                        
                        {/* 1. Baris Tab */}
                        <div className="flex items-end h-5 sm:h-7 px-1.5 pt-1 gap-0.5 overflow-x-auto no-scrollbar relative w-full">
                          {currentProject.tabs.map((tab, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveTab(idx)}
                              className={`group relative flex items-center gap-1.5 px-2.5 py-1 h-full min-w-[70px] max-w-[130px] text-[7px] sm:text-[9px] rounded-t-md transition-colors z-10 ${
                                activeTab === idx
                                  ? "bg-white text-gray-800 font-medium"
                                  : "bg-transparent text-gray-600 hover:bg-[#c7c9ce] hover:text-gray-900"
                              }`}
                            >
                              <Globe className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-500 shrink-0" />
                              <span className="truncate w-full text-left">{tab.name}</span>
                              
                              {/* Garis Pemisah */}
                              {activeTab !== idx && activeTab !== idx + 1 && idx !== currentProject.tabs.length - 1 && (
                                <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-400/50 group-hover:bg-transparent"></div>
                              )}
                            </button>
                          ))}
                          
                          

                          {/* Tombol Windows Control (Diperkecil lagi) */}
                          <div className="absolute right-2 sm:right-2.5 top-1.5 flex gap-2 text-gray-500">
                            <div className="w-1.5 h-[1px] bg-gray-500 mt-2"></div>
                            <div className="w-1.5 h-1.5 border border-gray-500 mt-1"></div>
                            <div className="w-1.5 h-1.5 relative">
                              <div className="absolute w-full h-[1px] bg-gray-500 top-2 -mt-[0.5px] rotate-45"></div>
                              <div className="absolute w-full h-[1px] bg-gray-500 top-2 -mt-[0.5px] -rotate-45"></div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Baris Address Bar & Navigasi */}
                        <div className="h-6 sm:h-8 bg-white flex items-center px-1.5 sm:px-2 gap-1.5 sm:gap-2">
                          <div className="flex items-center gap-1 text-gray-500">
                            <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:bg-gray-100 rounded-full cursor-pointer" />
                            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-40" />
                            <RotateCw className="w-2.5 h-2.5 sm:w-3 sm:h-3 hover:bg-gray-100 rounded-full cursor-pointer" />
                          </div>
                          
                          {/* URL Pill Input (Dibuat jauh lebih pipih & proporsional) */}
                          <div className="flex-1 bg-[#f1f3f4] hover:bg-[#e8eaed] h-3.5 sm:h-5 rounded-full flex items-center px-2 text-[6.5px] sm:text-[8px] text-gray-700 truncate border border-transparent hover:border-gray-200 transition-colors cursor-text">
                            <span className="opacity-50 mr-1 hidden sm:inline">https://</span>
                            ainurrofik.dev/projects/{currentProject.title.toLowerCase().split(" ")[0]}/{currentProject.tabs[activeTab].name.toLowerCase().replace(/\s+/g, '-')}
                          </div>
                        </div>
                      </div>

                      {/* === BROWSER CONTENT (GAMBAR PROYEK) === */}
                      <div className="flex-1 bg-gray-50 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={activeTab} // Kunci animasi fade pada tab aktif
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={currentProject.tabs[activeTab].image} 
                            alt={currentProject.tabs[activeTab].name} 
                            className="w-full h-full object-cover object-top absolute top-0 left-0"
                            loading="lazy"
                          />
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* === TOMBOL SLIDER (DILETAKKAN PRESISI DI TENGAH LAYAR) === */}
                <button 
                  onClick={handlePrev} 
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-950 text-white p-1.5 sm:p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-40"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button 
                  onClick={handleNext} 
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-950 text-white p-1.5 sm:p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-40"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

              </div>

              {/* Dagu & Kaki Monitor */}
              <div className="bg-slate-900 h-4 sm:h-6 flex items-center justify-center rounded-b-lg border-t border-slate-800 relative z-10">
                <div className="w-6 sm:w-10 h-0.5 sm:h-1 bg-slate-700/60 rounded-full"></div>
              </div>
              {/* sm:w-24 jadi sm:w-20, sm:h-12 jadi sm:h-10 */}
              <div className="w-16 sm:w-20 h-8 sm:h-10 bg-gradient-to-b from-slate-800 to-slate-900 mx-auto -mt-0.5 shadow-inner border-x border-slate-950/30"></div>
              {/* sm:w-48 jadi sm:w-40 */}
              <div className="w-36 sm:w-40 h-1.5 sm:h-2 bg-slate-900 mx-auto rounded-t-full shadow-md"></div>
              
            </div>

          </div>

          {/* =========================================
              KOLOM KANAN: DETAIL PROYEK DINAMIS
          ========================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center xl:pl-4 min-h-[500px] mt-12 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-xl font-black text-gray-900 mb-4 leading-tight">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed text-justify mb-8 sm:mb-10 font-medium">
                  {currentProject.desc}
                </p>

                {/* Card Technical Highlights */}
                <div className="relative bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-5 sm:p-7 mt-4">
                  
                  <div className="absolute -top-4 left-5 bg-[#F87171] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-md">
                    Technical Highlights
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-6 mt-2 items-center">
                    
                    {/* Tech Icons */}
                    <div className="xl:col-span-5 grid grid-cols-3 gap-y-6 gap-x-4 sm:gap-y-0 sm:gap-x-6 place-items-center p-2 sm:p-4">
                      {currentProject.techIcons.map((icon, i) => (
                        <img 
                          key={i} 
                          src={icon} 
                          alt="Tech Icon" 
                          // Ukuran ikon disesuaikan agar pas untuk 3 kolom
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain hover:scale-125 hover:-translate-y-1 transition-all duration-300 drop-shadow-md" 
                        />
                      ))}
                    </div>

                    {/* Features Card - Sekarang Melebar Penuh & Ikon Disesuaikan */}
                    <div className="xl:col-span-7">
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-6 shadow-sm h-full">
                        
                        <div className="space-y-1">
                          {currentProject.features.map((feat, fIdx) => {
                            const Icon = feat.icon; // Memanggil ikon dari data secara dinamis
                            return (
                              <div key={fIdx} className="flex items-start gap-3 sm:gap-4">
                                <div className="mt-0.5">
                                  {/* strokeWidth={1.5} membuat garis ikon menjadi tipis elegan seperti di gambar */}
                                  <Icon className="w-5 h-5 sm:w-[18px] sm:h-[18px] text-gray-700 shrink-0" strokeWidth={1.5} />
                                </div>
                                <p className="text-[10px] sm:text-[11px] text-gray-700 leading-relaxed font-medium">
                                  <span className="font-bold text-gray-900 block mb-0.5">{feat.title}</span>
                                  {feat.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}