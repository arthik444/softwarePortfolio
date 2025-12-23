import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowUpRight } from "lucide-react";
import { EnhancedProjectCard } from "./enhanced-project-card";
import { useScrollAnimation, useParallax } from "../hooks/use-scroll-animations";

const projects = [
  {
    id: 1,
    title: "LeetSpace",
    description: "A production-grade coding interview platform transforming ad-hoc practice into systematic learning via a custom spaced-repetition algorithm and active recall workflows. Live at myleetspace.com",
    image: "/leetspace-hero.png",
    techStack: ["React 19", "FastAPI", "MongoDB", "Firebase", "Python", "TypeScript"],
    category: "Full-Stack",
    year: "2025",
    status: "Active",
    metrics: { users: "100+", retention: "95%", problems: "1000+" },
    featured: true,
    impact: "Architected a high-concurrency FastAPI backend with Async I/O and MongoDB (Motor), enabling complex features like solution version control, mistake tracking, and 'retry later' queues. Built a performance-optimized React 19 frontend featuring an in-browser code editor (CodeMirror), interactive activity heatmaps, and secure token-based authentication.",
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
    description: "Winner - Google Cloud x Elastic AI Hackathon. An AI-driven clinical intelligence platform allowing customizable PDF ingestion, automatic embedding generation, and real-time streaming of actionable medical checklists.",
    image: "/procheck-hero.png",
    techStack: ["Elasticsearch", "Google Gemini", "Python", "FastAPI", "React"],
    category: "AI/ML",
    year: "2025",
    status: "Active",
    metrics: { protocols: "500+", accuracy: "92%", searches: "5K+" },
    featured: true,
    impact: "Engineered Elasticsearch Hybrid Search by combining BM25 keyword precision with vector embeddings using Reciprocal Rank Fusion (RRF), significantly improving retrieval relevance for ambiguous medical queries. Integrated Google Gemini for query expansion and context-aware checklist generation, orchestrated via a FastAPI backend with Pydantic validation and Firebase for conversation persistence.",
    github: "https://github.com/arthik444/procheck"
  },
  {
    id: 3,
    title: "Rift Rewind (AI Coach)",
    description: "Conversational coaching agent for League of Legends using AWS Bedrock (Claude 3) with function calling, enabling the AI to autonomously query real-time analytics to benchmark progress and generate practice plans.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    techStack: ["Python", "React", "AWS Bedrock", "Claude 3", "Riot Games API"],
    category: "AI/ML",
    year: "2025",
    status: "Active",
    metrics: { matches: "10K+", insights: "50+", users: "200+" },
    featured: true,
    impact: "Engineered an end-to-end data pipeline that ingests raw Riot API match history to compute derived features (vision trends, objective control), synthesizing them into structured insights and narratives. Optimized application latency using aggressive client-side caching and pre-aggregated analytics, allowing users to navigate full-year performance timelines instantly.",
    github: "https://github.com/arthik444/LeagueOfLegends_AICoach"
  }
];

const categories = ["All", "Full-Stack", "AI/ML"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref, scrollYProgress } = useScrollAnimation();
  const y = useParallax(scrollYProgress, 50);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section ref={ref as any} className="relative py-20 overflow-hidden">
      {/* Decorative Elements with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useParallax(scrollYProgress, -30) }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
            Building intelligent systems at the intersection of AI and scalable architecture. 
            From semantic search engines powered by multilingual embeddings achieving sub-150ms latency, 
            to AI-driven medical protocol platforms combining Elasticsearch hybrid search with LLM reasoning, 
            to offline-first mobile systems serving 500+ field engineers. Each project represents deep work 
            in production ML, vector databases, distributed systems, and full-stack orchestration—where AI 
            capabilities meet real-world infrastructure demands.
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
              className={`px-4 py-2 text-sm transition-all duration-300 border rounded-lg ${selectedCategory === category
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
          <a 
            href="https://github.com/arthik444" 
            target="_blank"
            rel="noopener noreferrer"
            className="surface surface-hover px-6 py-3 rounded-lg group inline-flex items-center"
          >
            View detailed case studies
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}