import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { FloatingSidebar } from "./components/floating-sidebar";
import { CursorFollower } from "./components/cursor-follower";
import { ScrollProgress } from "./components/scroll-progress";
import { Toaster } from "./components/ui/sonner";
import { Interactive3DScene } from "./components/interactive-3d-scene";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      <FloatingSidebar />
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Interactive3DScene />
      </div>

      <main className="relative z-10" id="hero">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CursorFollower />
      <Toaster />
    </div>
  );
}