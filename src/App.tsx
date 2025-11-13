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
import { GitHubStats } from "./components/github-stats";
import { EnhancedBlogSection } from "./components/enhanced-blog-section";
import { PerformanceMetrics } from "./components/performance-metrics";
import { Interactive3DScene } from "./components/interactive-3d-scene";
import { CodePlayground } from "./components/code-playground";
import { InteractiveSkillsComparison } from "./components/interactive-skills-comparison";

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
        <GitHubStats />
        <PerformanceMetrics />
        <ProjectsSection />
        <CodePlayground />
        <InteractiveSkillsComparison />
        <AboutSection />
        <TestimonialsSection />
        <EnhancedBlogSection />
        <ContactSection />
      </main>
      <Footer />
      <CursorFollower />
      <Toaster />
    </div>
  );
}