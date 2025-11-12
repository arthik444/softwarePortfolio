import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Reviews" },
  { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" }
];

export function FloatingSidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);

      // Find active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: section.id === "hero" ? document.body : document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element, id }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return id === "hero" ? rect.top > -100 : rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="glass-morphism rounded-full px-2 py-4">
            <div className="flex flex-col gap-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 group ${
                    activeSection === section.id
                      ? "bg-white shadow-lg"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-black/90 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
                      {section.label}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}