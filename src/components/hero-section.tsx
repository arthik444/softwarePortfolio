import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./scroll-reveal";
import { MagneticButton } from "./ui/magnetic-button";
import professionalPortrait from "figma:asset/a32a1d651f5b7001a996f43fff5fc4f940eef324.png";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "10", label: "GitHub Repos" },
  { value: "350+", label: "LeetCode Solved" }
];

const specializations = [
  "Full-Stack Development",
  "Semantic Search & OCR",
  "React & Angular",
  "Data-Driven Applications"
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
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gradient text-shadow">
                  Karthik Vemireddy
                </h1>
                <div className="text-lg text-muted-foreground font-light mono-font">
                  Software Engineer • Tallahassee, FL
                </div>
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
              Proactive and highly motivated Software Engineer with 2+ years of industry experience
              in full-stack development, specializing in Angular, React, and data-driven web applications.
              Proven ability to build scalable solutions, from frontend UIs to backend integrations.
              Recent research experience in semantic search, OCR-based data extraction, and MongoDB-backed
              search engines. Strong foundation in algorithms and problem-solving, honed through
              competitive programming.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <MagneticButton
                className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-md font-medium inline-flex items-center justify-center"
              >
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                className="group surface border-border/40 hover:border-foreground/20 px-8 py-3 rounded-md font-medium inline-flex items-center justify-center"
              >
                View projects
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/arthik444", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/karthikvemireddy18/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:karthikmasters444@gmail.com", label: "Email" }
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