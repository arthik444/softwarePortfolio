import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="surface surface-hover rounded-full w-10 h-10 magnetic-hover lg:hidden"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="h-5 w-5 transition-transform duration-300" />
        )}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ 
          x: isOpen ? "0%" : "100%", 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
        className="fixed right-0 top-0 h-full w-80 max-w-[85vw] surface backdrop-blur-2xl border-l border-border z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="surface-hover rounded-full w-8 h-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: isOpen ? index * 0.1 : 0,
                    duration: 0.3 
                  }}
                >
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between p-3 rounded-lg surface-hover transition-all group"
                  >
                    <span className="font-medium">{item.label}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <div className="space-y-4">
              {/* Resume Download */}
              <Button 
                variant="outline" 
                className="w-full surface-hover"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Karthik_Vemireddy_Resume.pdf';
                  link.download = 'Karthik_Vemireddy_Resume.pdf';
                  link.click();
                  handleLinkClick();
                }}
              >
                Download Resume
              </Button>
              
              {/* Contact CTA */}
              <Button 
                className="w-full magnetic-hover"
                onClick={handleLinkClick}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleLinkClick}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}