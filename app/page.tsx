// Mengimpor potongan Lego (komponen) HeroSection yang sudah kita buat
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Memasang komponen di halaman utama */}
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <ProjectSection />
      <ServiceSection/>
      <ContactSection />
    </main>
  );
}