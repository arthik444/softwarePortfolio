import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { FloatingSidebar } from "./components/floating-sidebar";
import { CursorFollower } from "./components/cursor-follower";
import { Interactive3DScene } from "./components/interactive-3d-scene";
import { FloatingNav } from "./components/floating-nav";
import { CustomCursor } from "./components/ui/custom-cursor";
import { Toaster } from "./components/ui/sonner";
import { useSmoothScrollProgress } from "./hooks/use-scroll-animations";
import { ThemeProvider } from "./contexts/theme-context";
import { motion } from "motion/react";

export default function App() {
  const scrollProgress = useSmoothScrollProgress();

  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Floating Navigation */}
        <FloatingNav />

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Interactive3DScene />
        </div>

        {/* Original Navigation */}
        <Navigation />
        <FloatingSidebar />

        {/* Main Content */}
        <main className="relative z-10">
          <section id="hero">
            <HeroSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>

        <Footer />
        <CursorFollower />
        <Toaster />
      </motion.div>
    </ThemeProvider>
  );
}