import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, Zap } from "lucide-react";
import { EnhancedProjectCard } from "./enhanced-project-card";

const projects = [
  {
    id: 1,
    title: "myLeetSpace",
    description: "A comprehensive coding interview preparation platform combining spaced repetition with systematic learning, serving 100+ active users with a 95% retention rate.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    techStack: ["React", "FastAPI", "MongoDB", "Firebase", "Python", "TypeScript"],
    category: "Full-Stack",
    year: "2024",
    status: "Active",
    metrics: { users: "100+", retention: "95%", problems: "1000+" },
    featured: true,
    impact: "Designed and architected a full-stack platform implementing real-time synchronization and a custom spaced repetition algorithm for optimal problem retention.",
    github: "https://github.com/arthik444/leetspace",
    challenges: [
      "Implementing efficient spaced repetition algorithm",
      "Real-time data synchronization across devices",
      "Scalable MongoDB schema design"
    ],
    solutions: [
      "Custom algorithm optimized for coding problem retention",
      "Firebase real-time database integration",
      "Indexed MongoDB collections for fast queries"
    ]
  },
  {
    id: 2,
    title: "ProCheck",
    description: "AI-Powered Medical Protocol Search & Generation. An intelligent medical protocol search and checklist generation platform powered by Elasticsearch Hybrid Search and Google Gemini AI.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    techStack: ["Elasticsearch", "Google Gemini AI", "Python", "FastAPI", "React"],
    category: "AI/ML",
    year: "2024",
    status: "Active",
    metrics: { protocols: "500+", accuracy: "92%", searches: "5K+" },
    featured: true,
    impact: "Streamlined medical protocol access with hybrid search combining semantic and keyword matching for healthcare professionals.",
    github: "https://github.com/arthik444/procheck"
  },
  {
    id: 3,
    title: "Rift Analyzer",
    description: "AI-powered League of Legends coaching companion that helps players reflect on a full year of matches, understand persistent habits, and plan their next climb using Riot Games API and Amazon Bedrock.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    techStack: ["Python", "Amazon Bedrock", "Riot Games API", "React", "FastAPI"],
    category: "AI/ML",
    year: "2024",
    status: "Active",
    metrics: { matches: "10K+", insights: "50+", users: "200+" },
    featured: true,
    impact: "Combines match data with AI to deliver personalized, data-rich retrospectives that help players improve their gameplay.",
    github: "https://github.com/arthik444/LeagueOfLegends_AICoach"
  }
];

const categories = ["All", "Full-Stack", "AI/ML"];

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