import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  ArrowUpRight,
  MapPin,
  Clock
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully. I'll get back to you within 24 hours.", {
      duration: 5000,
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-foreground" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Let's Build Something
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you have a project in mind, want to discuss opportunities, 
            or just want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="surface border-border/40 focus:border-foreground/40 h-12 bg-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="surface border-border/40 focus:border-foreground/40 h-12 bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="surface border-border/40 focus:border-foreground/40 h-12 bg-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="surface border-border/40 focus:border-foreground/40 min-h-32 resize-none bg-transparent"
                  required
                />
              </div>

              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 group h-12"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-background border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Quick Info */}
            <div className="surface surface-hover rounded-lg p-6">
              <h3 className="text-lg font-light mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm">alex.chen@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <p className="text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="surface surface-hover rounded-lg p-6">
              <h3 className="text-lg font-light mb-6">Connect online</h3>
              <div className="space-y-4">
                {[
                  { 
                    icon: Github, 
                    label: "GitHub", 
                    href: "https://github.com/alexchen",
                    description: "Open source projects and contributions"
                  },
                  { 
                    icon: Linkedin, 
                    label: "LinkedIn", 
                    href: "https://linkedin.com/in/alexchen",
                    description: "Professional background and network"
                  },
                  { 
                    icon: Mail, 
                    label: "Email", 
                    href: "mailto:alex.chen@example.com",
                    description: "For direct communication"
                  }
                ].map(({ icon: Icon, label, href, description }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 p-3 -m-3 rounded-lg hover:bg-foreground/5 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div className="flex-1">
                      <p className="text-sm group-hover:text-foreground/80 transition-colors">{label}</p>
                      <p className="text-xs text-muted-foreground">{description}</p>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="surface surface-hover rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-lg font-light">Available for opportunities</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently open to new projects, collaborations, and full-time opportunities. 
                Particularly interested in AI applications and distributed systems.
              </p>
            </div>

            {/* Schedule Call */}
            <motion.div
              className="surface surface-hover rounded-lg p-6 text-center group"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-light mb-2">Prefer to talk?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sometimes a conversation is better than email. 
                Let's schedule a 30-minute call to discuss your project.
              </p>
              <Button 
                variant="outline"
                className="surface border-border/40 hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background transition-all"
              >
                Schedule a call
                <ArrowUpRight className="ml-2 w-3 h-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}