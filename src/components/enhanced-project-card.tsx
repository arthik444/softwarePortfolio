import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowUpRight, TrendingUp, Users, Zap, Award } from "lucide-react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    category: string;
    year: string;
    status: string;
    metrics: Record<string, string>;
    featured: boolean;
    impact?: string;
    challenges?: string[];
    solutions?: string[];
  };
  index: number;
}

export function EnhancedProjectCard({ project, index }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      "AI/ML": "from-purple-500/20 to-purple-500/5",
      "Infrastructure": "from-blue-500/20 to-blue-500/5",
      "FinTech": "from-emerald-500/20 to-emerald-500/5",
      "IoT": "from-orange-500/20 to-orange-500/5",
      "Web3": "from-pink-500/20 to-pink-500/5",
      "DevOps": "from-cyan-500/20 to-cyan-500/5"
    };
    return gradients[category] || "from-gray-500/20 to-gray-500/5";
  };

  const getStatusColor = (status: string) => {
    return status === "Production" ? "text-emerald-400" : "text-yellow-400";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="surface surface-hover rounded-2xl overflow-hidden magnetic-hover">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              className="glass-morphism p-3 rounded-xl hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              className="glass-morphism p-3 rounded-xl hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Category & Status Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryGradient(project.category)} backdrop-blur-sm border border-white/10`}>
              {project.category}
            </div>
            <div className={`px-3 py-1 text-xs font-medium rounded-full glass-morphism ${getStatusColor(project.status)}`}>
              {project.status}
            </div>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full glass-morphism text-white/80">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-light mb-2 group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-4 p-2 rounded-lg hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-45' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
            </motion.button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border/20">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-light text-gradient mb-1">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-border/20"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-border/20 text-muted-foreground">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border/20 pt-4 space-y-4"
              >
                {project.impact && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Impact
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                )}

                {project.challenges && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Challenges
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-400" />
                      Solutions
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Complete Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-foreground/5 rounded border border-border/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}