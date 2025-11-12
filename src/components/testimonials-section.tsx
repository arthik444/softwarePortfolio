import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ScrollReveal, StaggeredReveal } from "./scroll-reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Exceptional technical skills combined with outstanding communication. Delivered a complex React application ahead of schedule with zero bugs.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Incredible attention to detail and user experience. The dashboard they built increased our user engagement by 40%.",
    rating: 5,
    project: "Analytics Dashboard"
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Lead Designer",
    company: "DesignStudio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "A rare developer who truly understands design principles. Perfect pixel-perfect implementation of our Figma designs.",
    rating: 5,
    project: "Brand Website"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartupX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Transformed our vision into reality with elegant code architecture. The performance improvements were remarkable.",
    rating: 5,
    project: "SaaS Platform"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="surface mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl mb-6">
              What <span className="text-gradient-purple">Clients</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by founders, CTOs, and product teams to deliver exceptional results
            </p>
          </div>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={150}>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="surface surface-hover p-8 mb-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full accent-purple flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Project Badge */}
                  <Badge variant="secondary" className="mb-4">
                    {testimonial.project}
                  </Badge>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </StaggeredReveal>

        {/* Call to Action */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-16">
            <Card className="surface p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                Join these satisfied clients and let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors magnetic-hover"
                >
                  Start a Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg surface surface-hover transition-colors"
                >
                  View My Work
                </a>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}