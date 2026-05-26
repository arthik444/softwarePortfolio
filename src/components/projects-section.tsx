import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowUpRight } from "lucide-react";
import { EnhancedProjectCard } from "./enhanced-project-card";
import { useScrollAnimation, useParallax } from "../hooks/use-scroll-animations";

const projects = [
  {
    id: 1,
    title: "LeetSpace",
    description: "Production-grade coding interview prep platform built around spaced-repetition scheduling and active recall. Tracks every solution attempt, surfaces problems at optimal review intervals, and identifies weak topic clusters from mistake history. Live at myleetspace.com",
    image: "/leetspace-hero.png",
    techStack: ["React 19", "FastAPI", "MongoDB", "Firebase", "Python", "TypeScript"],
    category: "Full-Stack",
    year: "2025",
    status: "Active",
    metrics: { users: "100+", retention: "95%", problems: "1000+" },
    featured: true,
    impact: "Architected a high-concurrency FastAPI backend with Async I/O and MongoDB (Motor), enabling complex features like solution version control, mistake tracking, and 'retry later' queues. Built a performance-optimized React 19 frontend featuring an in-browser code editor (CodeMirror), interactive activity heatmaps, and secure token-based authentication.",
    github: "https://github.com/arthik444/leetspace",
    liveUrl: "https://myleetspace.com/",
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
    title: "BillBeam",
    description: "AI-powered bill splitting web app. Upload a receipt photo and Gemini 2.0 Flash extracts every line item, price, tax, and tip — then the app handles per-person assignment and full settlement math including discounts. Live at billbeam.pro",
    image: "/billbeam-hero.png",
    techStack: ["React 19", "TypeScript", "Google Gemini 2.0 Flash", "Firebase", "Tailwind CSS"],
    category: "Full-Stack",
    year: "2025",
    status: "Active",
    metrics: { accuracy: "95%+", formats: "Multi-format", auth: "Google Auth" },
    featured: true,
    impact: "Gemini 2.0 Flash performs receipt authenticity validation, structured line-item extraction, discount identification, and financial amount parsing (subtotal, tax, tip, total). Firestore persistence enables receipt history and reusable saved friend groups. Haptic-feedback-optimized mobile UX with Framer Motion animations throughout.",
    github: "https://github.com/arthik444/preSplit",
    liveUrl: "https://billbeam.pro/",
  },
  {
    id: 3,
    title: "VidMod",
    description: "Autonomous AI agent that watches a video, identifies compliance violations (brand safety, profanity, regulatory issues), and remediates them end-to-end through five action pipelines: blur, pixelate, generative replacement, voice-swapped dubbing, and beep. Every edit is grounded in a specific policy clause.",
    image: "/vidmod-hero.png",
    techStack: ["Gemini 3.0 Pro", "SAM3", "Runway Gen-4", "ElevenLabs", "FastAPI", "Cloud Run"],
    category: "AI/ML",
    year: "2025",
    status: "Active",
    metrics: { pipelines: "5", model: "Gemini 3.0", arch: "Agentic" },
    featured: true,
    impact: "Leverages Gemini's native video understanding across its 1M+ token context window for temporal consistency detection that frame-sampling cannot achieve. SAM3 tracks objects across frames for blur/pixelate; Runway Gen-4 inpaints brand-safe replacements; custom Demucs pipeline separates vocals/background for ElevenLabs voice cloning. Marathon Agent pattern with state persistence surviving server restarts.",
    github: "https://github.com/arthik444/VidMod",
    liveUrl: "https://www.youtube.com/watch?v=Yl4bevvtUls",
  },
  {
    id: 4,
    title: "ProCheck",
    description: "2nd Place — Google Cloud × Elastic AI Hackathon (2,732 participants, $50K prize pool). AI-driven clinical intelligence platform: PDF ingestion, automatic embedding generation, and real-time streaming of actionable medical checklists. Reduced protocol lookup from 3–5 min to under 10 seconds.",
    image: "/procheck-hero.png",
    techStack: ["Elasticsearch", "Google Gemini", "Python", "FastAPI", "React", "Firebase"],
    category: "AI/ML",
    year: "2025",
    status: "Active",
    metrics: { protocols: "134", accuracy: "85%", latency: "450ms cached" },
    featured: true,
    impact: "Engineered Elasticsearch Hybrid Search combining BM25 keyword precision with dense vector embeddings via Reciprocal Rank Fusion (RRF), achieving 85% first-try accuracy on ambiguous medical queries. Google Gemini handles query expansion and context-aware checklist generation. 85% cache hit rate via LRU + Firestore caching layer.",
    github: "https://github.com/arthik444/procheck",
    liveUrl: "https://devpost.com/software/procheck",
  },
  {
    id: 5,
    title: "Rift Analyzer",
    description: "2nd Place — AWS × Riot Games Rift Rewind Hackathon (2,636 participants, $26K prize pool). Agentic coaching system on Amazon Bedrock (Claude 3 Sonnet) with multi-step tool-calling. Computes 20+ engineered metrics — objective conversion, vision control, gold-swing deltas — with z-score outlier detection.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    techStack: ["AWS Bedrock", "Claude 3 Sonnet", "Python", "FastAPI", "React", "DynamoDB"],
    category: "AI/ML",
    year: "2025",
    status: "Active",
    metrics: { cacheImprovement: "97%", responseTime: "<200ms", metrics: "20+" },
    featured: true,
    impact: "End-to-end data pipeline ingests raw Riot API match history to compute derived features (vision trends, objective control, gold-swing deltas) with rolling-window aggregation and z-score outlier detection. 97% page-load improvement via aggressive client-side caching (16s → <0.5s). Late-game vision score identified as strongest rank predictor (r=0.67).",
    github: "https://github.com/arthik444/LeagueOfLegends_AICoach",
    liveUrl: "https://devpost.com/software/rift-analyser",
  }
];

const categories = ["All", "AI/ML", "Full-Stack"];

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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