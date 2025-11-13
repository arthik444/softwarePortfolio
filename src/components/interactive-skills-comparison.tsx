import { useState } from "react";
import { motion } from "motion/react";
import { Code, Database, Cloud, Brain, Wrench, Shield } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  experience: string;
  projects: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, experience: "5 years", projects: 42 },
      { name: "TypeScript", level: 92, experience: "4 years", projects: 38 },
      { name: "Next.js", level: 88, experience: "3 years", projects: 24 },
      { name: "Tailwind CSS", level: 90, experience: "3 years", projects: 35 }
    ]
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Python", level: 96, experience: "6 years", projects: 58 },
      { name: "Node.js", level: 90, experience: "5 years", projects: 45 },
      { name: "PostgreSQL", level: 85, experience: "5 years", projects: 40 },
      { name: "FastAPI", level: 88, experience: "3 years", projects: 28 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "AWS", level: 87, experience: "4 years", projects: 36 },
      { name: "Docker", level: 89, experience: "4 years", projects: 42 },
      { name: "Kubernetes", level: 82, experience: "3 years", projects: 22 },
      { name: "Terraform", level: 78, experience: "2 years", projects: 18 }
    ]
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "TensorFlow", level: 91, experience: "4 years", projects: 25 },
      { name: "PyTorch", level: 87, experience: "3 years", projects: 20 },
      { name: "Scikit-learn", level: 85, experience: "5 years", projects: 32 },
      { name: "MLflow", level: 80, experience: "2 years", projects: 15 }
    ]
  }
];

export function InteractiveSkillsComparison() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-foreground" />
            <Wrench className="w-5 h-5" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Technical Skills
            </span>
            <div className="w-8 h-px bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Interactive Skills Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across the modern tech stack
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 magnetic-hover ${
                selectedCategory.title === category.title
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "surface surface-hover text-muted-foreground"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {selectedCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="surface surface-hover rounded-xl p-6 magnetic-hover relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${selectedCategory.color} opacity-0`}
                animate={{
                  opacity: hoveredSkill === skill.name ? 0.1 : 0
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{skill.experience} experience</span>
                      <span>•</span>
                      <span>{skill.projects} projects</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{skill.level}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-muted/20 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${selectedCategory.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{skill.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{skill.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{skill.level}%</div>
                    <div className="text-xs text-muted-foreground">Mastery</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 surface rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Skill Level Comparison</h3>
          
          <div className="space-y-4">
            {selectedCategory.skills.map((skill, index) => (
              <div key={skill.name} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium truncate">{skill.name}</div>
                <div className="flex-1 h-8 bg-muted/20 rounded-lg overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${selectedCategory.color} flex items-center justify-end px-3 text-xs font-semibold text-white`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  >
                    {skill.level}%
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
