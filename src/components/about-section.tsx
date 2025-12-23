import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, GraduationCap, Award, Clock } from "lucide-react";
import { SkillsVisualization } from "./skills-visualization";

const timeline = [
  {
    year: "2024",
    title: "AI Research Engineer",
    company: "Florida State University",
    description: "Engineered a high-throughput document processing system using LLM agents, reducing manual data extraction time from hours to minutes for thousands of healthcare documents. Architected a dynamic model routing system that integrates multiple LLMs, programmatically selecting the optimal model for each task to balance cost, latency, and accuracy. Built a cancer-specific semantic search engine using HNSW graphs and multilingual embeddings, enabling discovery of synonymic medical terms and reducing research search time by 70%.",
    type: "work",
    duration: "Aug 2023 – Present"
  },
  {
    year: "2023",
    title: "Master of Science in Computer Science",
    company: "Florida State University",
    description: "Coursework: Machine Learning, Artificial Intelligence, Advanced Databases, Software Engineering, Analytical Methods. GPA: 3.8/4.0",
    type: "education",
    duration: "Aug 2023 – May 2025"
  },
  {
    year: "2022",
    title: "Software Development Engineer",
    company: "Maximl India",
    description: "Engineered a 'Dynamic Critical Path' feature using Angular, D3.js, and BFS graph algorithms, enabling project managers to visually identify bottlenecks and optimize plant shutdown timelines. Spearheaded the end-to-end development of a complex Shift Planning module, digitizing workforce management for large-scale industrial teams and significantly reducing manual scheduling errors. Delivered high-performance client interfaces across web and mobile ecosystems using Angular, React, Ionic, and Android Java.",
    type: "work",
    duration: "Jan 2022 – Jul 2023"
  },
  {
    year: "2018",
    title: "Bachelor of Engineering in Computer Engineering",
    company: "International Institute of Information Technology, Bhubaneswar",
    description: "Coursework: Algorithms, Data Structures, Object-Oriented Programming, Databases, Operating Systems, Computer Networks, Software Engineering",
    type: "education",
    duration: "Aug 2018 – Jul 2022"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"] },
  { category: "Frontend", items: ["React 19", "Angular", "Next.js", "Tailwind CSS", "Redux", "D3.js"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "Firebase"] },
  { category: "AI & ML", items: ["LLMs", "RAG", "LangChain", "AWS Bedrock", "Google Gemini", "Vector DBs", "OCR"] },
  { category: "DevOps & Cloud", items: ["AWS", "GCP", "Docker", "Git", "Jira", "Lambda", "S3"] }
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'journey'>('overview');

  return (
    <section className="py-24 px-6" id="about">
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
              About
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Engineering Journey
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex gap-8 mb-12 border-b border-border/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'journey', label: 'Journey' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`pb-4 text-sm transition-colors relative ${
                activeTab === id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {activeTab === id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <motion.div
              className="grid lg:grid-cols-2 gap-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Bio */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-6">Background</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Software Engineer with 2+ years of industry experience building scalable full-stack 
                      applications and AI-powered systems. Currently pursuing a Master's in Computer Science 
                      at Florida State University while working as an AI Research Engineer.
                    </p>
                    <p>
                      My professional journey began at Maximl India, where I engineered critical production 
                      features using Angular, React, and graph algorithms—delivering solutions that optimized 
                      industrial workflows and enabled multi-million dollar contracts. I built offline-first 
                      mobile platforms and real-time dashboards with D3.js that prevented project overruns.
                    </p>
                    <p>
                      In my research role, I've architected LLM-powered document processing systems that 
                      reduced manual work from hours to minutes, built semantic search engines with HNSW 
                      indexing achieving 70% faster retrieval, and designed dynamic model routing systems 
                      that balance cost, latency, and accuracy across multiple AI models.
                    </p>
                  </div>
                </div>

                {/* Current Focus */}
                <div>
                  <h4 className="text-lg font-light mb-4">Current Focus</h4>
                  <div className="space-y-3">
                    {[
                      "LLM Agents & Agentic Workflows",
                      "Retrieval-Augmented Generation (RAG)",
                      "Full-Stack AI Applications",
                      "Vector Databases & Semantic Search"
                    ].map((focus, index) => (
                      <motion.div
                        key={focus}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-1 h-1 bg-foreground/60 rounded-full" />
                        {focus}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Visualization */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-6 text-gradient">Technical Expertise</h3>
                  <SkillsVisualization />
                </div>


              </div>
            </motion.div>
          )}

          {activeTab === 'journey' && (
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-border/20 last:border-l-transparent"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-1 top-0 w-2 h-2 bg-foreground rounded-full" />
                    
                    {/* Content */}
                    <div className="surface surface-hover rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {item.type === 'work' ? (
                              <Briefcase className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <GraduationCap className="w-4 h-4 text-muted-foreground" />
                            )}
                            <span className="text-sm text-muted-foreground">{item.year}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-lg font-light mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <a 
            href="/Karthik_Vemireddy_Resume.pdf" 
            download="Karthik_Vemireddy_Resume.pdf"
            className="surface surface-hover px-6 py-3 rounded-lg group inline-flex items-center"
          >
            Download full resume
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}