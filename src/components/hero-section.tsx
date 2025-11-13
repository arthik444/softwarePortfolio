import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./scroll-reveal";
import professionalPortrait from "figma:asset/a32a1d651f5b7001a996f43fff5fc4f940eef324.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "1M+", label: "Users Impacted" },
  { value: "99.9%", label: "System Uptime" }
];

const specializations = [
  "AI & Machine Learning",
  "Distributed Systems",
  "Healthcare Technology",
  "Search Infrastructure"
];

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 dot-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse glow-effect" />
              <span className="text-muted-foreground text-sm tracking-wide uppercase">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gradient mb-6 text-shadow">
                Karthik Vemireddy
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
                Software Engineer
              </div>
              <div className="text-base text-muted-foreground/80 mono-font">
                Tallahassee, FL
              </div>
            </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                  {spec}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Building intelligent systems that scale. I architect and develop 
            production-grade applications serving millions of users, with expertise 
            in AI-powered solutions, distributed infrastructure, and healthcare technology.
          </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button 
                size="lg" 
                className="group bg-foreground text-background hover:bg-foreground/90 px-8 magnetic-hover"
              >
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="surface border-border/40 hover:border-foreground/20 px-8 magnetic-hover"
              >
                View projects
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 magnetic-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo & Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -inset-4">
              <div className="absolute top-0 right-0 w-32 h-32 accent-purple rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-24 h-24 accent-blue rounded-full blur-2xl opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 accent-emerald rounded-full blur-3xl opacity-30" />
            </div>

            {/* Photo Container */}
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glass Frame */}
                <div className="absolute inset-0 glass-morphism rounded-3xl" />
                
                {/* Photo */}
                <div className="relative w-full h-full p-4">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={professionalPortrait}
                      alt="Alex Chen"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -top-4 -right-4 glass-morphism rounded-2xl p-4 floating-element"
                >
                  <div className="text-center">
                    <div className="text-2xl font-light text-gradient-purple">5+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass-morphism rounded-2xl p-4 floating-element-delayed"
                >
                  <div className="text-center">
                    <div className="text-2xl font-light text-gradient-blue">50+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="surface surface-hover rounded-2xl p-6 text-center magnetic-hover"
            >
              <div className="text-2xl font-light mb-2 text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="text-xs text-muted-foreground tracking-wide">SCROLL</div>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
        </motion.div>


      </div>
    </section>
  );
}