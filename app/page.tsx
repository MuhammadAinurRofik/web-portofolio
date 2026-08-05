// Mengimpor potongan Lego (komponen) HeroSection yang sudah kita buat
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Memasang komponen di halaman utama */}
      <HeroSection />
      <AboutSection />
    </main>
  );
}