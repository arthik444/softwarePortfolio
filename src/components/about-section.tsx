import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, GraduationCap, Award, Clock } from "lucide-react";
import { SkillsVisualization } from "./skills-visualization";

const timeline = [
  {
    year: "2024",
    title: "Senior AI Engineer",
    company: "HealthTech Innovations",
    description: "Leading AI platform development serving 15+ hospitals. Architected ML pipelines processing 50K+ medical scans monthly with 95% accuracy.",
    type: "work",
    duration: "Present"
  },
  {
    year: "2022",
    title: "Principal Engineer",
    company: "SearchFlow Technologies",
    description: "Built distributed search infrastructure handling 10M+ daily queries. Led team of 8 engineers, reduced query latency by 60%.",
    type: "work",
    duration: "2 years"
  },
  {
    year: "2020",
    title: "Senior Engineer",
    company: "DataFlow Solutions",
    description: "Designed microservices architecture for fintech applications. Reduced infrastructure costs by 45% while improving performance 3x.",
    type: "work",
    duration: "2 years"
  },
  {
    year: "2019",
    title: "Computer Science",
    company: "Stanford University",
    description: "B.S. Computer Science, Magna Cum Laude. Specialized in AI/ML with thesis on deep learning for medical imaging. GPA: 3.8/4.0",
    type: "education",
    duration: "4 years"
  }
];

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "Go", "Rust"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] }
];

const achievements = [
  {
    title: "AI4Healthcare Winner",
    organization: "Stanford University",
    year: "2023",
    description: "First place in annual healthcare hackathon with $100K prize"
  },
  {
    title: "Top 1% Contributor",
    organization: "GitHub",
    year: "2024",
    description: "Global ranking based on contributions and project impact"
  },
  {
    title: "Patent Holder",
    organization: "USPTO",
    year: "2024",
    description: "ML-based medical diagnosis system patent #US11,234,567"
  },
  {
    title: "Tech Conference Speaker",
    organization: "PyData Global",
    year: "2023",
    description: "Keynote on production ML systems for 2000+ attendees"
  }
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'achievements'>('overview');

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
            { id: 'journey', label: 'Journey' },
            { id: 'achievements', label: 'Recognition' }
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

          {activeTab === 'achievements' && (
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="surface surface-hover rounded-lg p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-xs text-muted-foreground">{achievement.year}</span>
                  </div>
                  <h3 className="text-lg font-light mb-2 group-hover:text-foreground/80 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
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