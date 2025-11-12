import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, Zap } from "lucide-react";
import { EnhancedProjectCard } from "./enhanced-project-card";

const projects = [
  {
    id: 1,
    title: "HealthAI Diagnostic Platform",
    description: "Enterprise AI platform for medical imaging analysis. Deployed across 15+ hospitals, processing 50K+ scans monthly with 95% diagnostic accuracy.",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODg4OTI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker", "Kubernetes", "FastAPI"],
    category: "AI/ML",
    year: "2024",
    status: "Production",
    metrics: { users: "50K+", accuracy: "95%", hospitals: "15+" },
    featured: true,
    impact: "Reduced diagnostic time by 60% and improved early disease detection rates by 35% across partner hospitals.",
    challenges: [
      "Processing high-resolution medical images in real-time",
      "Ensuring HIPAA compliance for patient data",
      "Integrating with legacy hospital systems"
    ],
    solutions: [
      "Implemented distributed GPU processing pipeline",
      "Built end-to-end encryption with federated learning",
      "Developed custom APIs for seamless EHR integration"
    ]
  },
  {
    id: 2,
    title: "SearchFlow Infrastructure",
    description: "Distributed search engine handling 10M+ queries daily. Sub-100ms latency with advanced ranking algorithms and real-time indexing.",
    image: "https://images.unsplash.com/photo-1681644664127-b1f5f17528cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHRlY2hub2xvZ3klMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODg4OTI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Go", "Elasticsearch", "Redis", "Docker", "Kubernetes"],
    category: "Infrastructure",
    year: "2023",
    status: "Production",
    metrics: { queries: "10M+", latency: "<100ms", uptime: "99.9%" },
    featured: true
  },
  {
    id: 3,
    title: "FinTech Analytics Suite",
    description: "Real-time financial analytics platform processing $2B+ in transactions. Advanced fraud detection with ML-powered insights.",
    image: "https://images.unsplash.com/photo-1758691737207-e75821e080cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTg4ODkyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["TypeScript", "Next.js", "D3.js", "Python", "AWS"],
    category: "FinTech",
    year: "2023",
    status: "Production",
    metrics: { volume: "$2B+", detection: "99.7%", latency: "50ms" },
    featured: true
  },
  {
    id: 4,
    title: "IoT Management Platform",
    description: "Industrial IoT platform managing 100K+ sensors. Real-time monitoring with predictive maintenance algorithms.",
    image: "https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc1ODg4OTI4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Rust", "MQTT", "InfluxDB", "Grafana", "Kubernetes"],
    category: "IoT",
    year: "2022",
    status: "Production",
    metrics: { sensors: "100K+", uptime: "99.8%", alerts: "1M+" },
    featured: false
  },
  {
    id: 5,
    title: "DeFi Governance Protocol",
    description: "Decentralized governance platform with zero-knowledge proofs. Managing $500M+ in treasury assets across 50+ DAOs.",
    image: "https://images.unsplash.com/photo-1723731018011-c4374dd81a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjB0ZWNobm9sb2d5JTIwZ3JpZHxlbnwxfHx8fDE3NTg4ODkyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Solidity", "TypeScript", "React", "The Graph", "IPFS"],
    category: "Web3",
    year: "2024",
    status: "Production",
    metrics: { treasury: "$500M+", daos: "50+", votes: "10K+" },
    featured: false
  },
  {
    id: 6,
    title: "Cloud Infrastructure Engine",
    description: "Multi-cloud deployment platform reducing infrastructure costs by 40%. Automated CI/CD for 500+ applications.",
    image: "https://images.unsplash.com/photo-1559920666-ad86bd31b803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3QlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzU4ODg5MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Terraform", "Go", "Docker", "AWS", "GCP"],
    category: "DevOps",
    year: "2023",
    status: "Production",
    metrics: { apps: "500+", savings: "40%", deploys: "1K+/day" },
    featured: false
  }
];

const categories = ["All", "AI/ML", "Infrastructure", "FinTech", "IoT", "Web3", "DevOps"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="py-24 px-6" id="projects">
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
            <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Production systems serving millions of users. Each project represents 
            months of architectural decisions, performance optimization, and iterative refinement.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm transition-all duration-300 border rounded-lg ${
                selectedCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "text-muted-foreground border-border/40 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-gradient-purple mb-8"
            >
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <EnhancedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="surface surface-hover rounded-lg p-6 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-light mb-2 group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                        <span>•</span>
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Quick Metrics */}
                  <div className="flex gap-4 mb-4 text-xs">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-foreground">{value}</span>
                        <span className="text-muted-foreground ml-1 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-foreground/5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in the technical details behind these projects?
          </p>
          <button className="surface surface-hover px-6 py-3 rounded-lg group">
            View detailed case studies
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}