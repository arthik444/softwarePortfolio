import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">Karthik Reddy Vemireddy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer specializing in full-stack development, 
              AI/ML systems, and data-driven applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Work", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Writing", href: "#blog" },
                { name: "Contact", href: "#contact" }
              ].map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/arthik444", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/karthikvemireddy18/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:karthikmasters444@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 md:mb-0">
            <span>© 2025 Karthik Reddy Vemireddy</span>
            <span>•</span>
            <span>United States</span>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="p-2 surface surface-hover rounded-lg group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4 group-hover:text-foreground transition-colors" />
            <span className="sr-only">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}