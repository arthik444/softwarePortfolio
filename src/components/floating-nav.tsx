import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Briefcase, User, Mail } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        // Intersection Observer for active section tracking
        const observers = navItems.map(item => {
            const element = document.getElementById(item.id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(item.id);
                    }
                },
                { threshold: 0.3 }
            );

            observer.observe(element);
            return observer;
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="glass-morphism rounded-full px-6 py-3 border border-white/10 shadow-2xl backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;

                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 rounded-full transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon className="w-4 h-4" />
                                            <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-foreground/10 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
