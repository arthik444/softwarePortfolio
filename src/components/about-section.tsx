import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, GraduationCap, Award, Clock } from "lucide-react";
import { SkillsVisualization } from "./skills-visualization";

const timeline = [
  {
    year: "2024",
    title: "Research Assistant",
    company: "BigLab @ Florida State University",
    description: "Architected semantic search engine for clinical research using multilingual-e5-large embeddings and HNSW indexing, achieving <150ms query latency across 50K+ documents with 90% response time improvement. Engineered automated OCR pipeline processing medical PDFs to structured JSON, reducing manual review by 60%.",
    type: "work",
    duration: "May 2024 – May 2025"
  },
  {
    year: "2023",
    title: "Master of Science in Computer Science",
    company: "Florida State University",
    description: "Coursework: Analytical Methods, Software Engineering, Cryptography, Computer Architecture, Advanced Databases, Machine Learning, Artificial Intelligence",
    type: "education",
    duration: "Aug 2023 – May 2025"
  },
  {
    year: "2022",
    title: "Software Developer",
    company: "Maximl Labs Pvt. Ltd",
    description: "Built offline-first mobile platform serving 500+ field engineers with 100% task continuity, reducing support tickets by 60% and enabling $2M+ in rural contracts. Developed real-time critical path dashboard using DAG algorithms and D3.js visualizations, preventing $500K+ in project overruns.",
    type: "work",
    duration: "Jan 2022 – Jul 2023"
  },
  {
    year: "2018",
    title: "Bachelor of Engineering in Computer Engineering",
    company: "International Institute of Information Technology",
    description: "Coursework: Algorithms, Data Structures, Databases, Object-Oriented Programming, Operating Systems, Computer Networking",
    type: "education",
    duration: "Aug 2018 – Jul 2022"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL"] },
  { category: "Frontend", items: ["React", "Angular", "HTML/CSS", "Ionic", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "Express", "PostgreSQL", "MongoDB"] },
  { category: "ML/AI", items: ["PyTorch", "scikit-learn", "Hugging Face", "Vector DBs"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Redis", "D3.js"] }
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
            Building the Future
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
                  <h3 className="text-2xl font-light mb-6">Philosophy</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I believe in building systems that solve real problems. Every line of code 
                      should serve a purpose, every architecture decision should scale, and every 
                      product should improve lives.
                    </p>
                    <p>
                      My approach combines deep technical expertise with practical experience. 
                      I've spent years in the trenches, debugging production systems at 3 AM, 
                      optimizing database queries, and mentoring junior engineers.
                    </p>
                    <p>
                      Currently focused on AI applications in healthcare, where the intersection 
                      of cutting-edge technology and human impact creates the most meaningful work.
                    </p>
                  </div>
                </div>

                {/* Current Focus */}
                <div>
                  <h4 className="text-lg font-light mb-4">Current Focus</h4>
                  <div className="space-y-3">
                    {[
                      "AI-powered medical diagnostics",
                      "Distributed system architecture",
                      "Production ML operations",
                      "Engineering team leadership"
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
          <button className="surface surface-hover px-6 py-3 rounded-lg group">
            Download full resume
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}