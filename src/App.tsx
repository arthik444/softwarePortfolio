import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { AboutSection } from "./components/about-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { FloatingSidebar } from "./components/floating-sidebar";
import { CursorFollower } from "./components/cursor-follower";
import { ScrollProgress } from "./components/scroll-progress";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      <FloatingSidebar />
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl floating-element" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-500/10 blur-3xl floating-element-delayed" />
        <div className="absolute top-3/4 left-1/6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-2xl floating-element" />
      </div>

      <main className="relative z-10" id="hero">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <CursorFollower />
      <Toaster />
    </div>
  );
}