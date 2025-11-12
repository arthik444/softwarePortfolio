import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const skillsData = [
  { name: 'Python', level: 95, category: 'Backend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'AWS', level: 85, category: 'Cloud' },
  { name: 'Docker', level: 87, category: 'DevOps' },
  { name: 'PostgreSQL', level: 83, category: 'Database' },
  { name: 'TensorFlow', level: 89, category: 'AI/ML' },
  { name: 'Go', level: 78, category: 'Backend' },
  { name: 'Kubernetes', level: 80, category: 'DevOps' }
];

const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Cloud', 'DevOps', 'Database'];

export function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animatedSkills, setAnimatedSkills] = useState<typeof skillsData>([]);

  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(filteredSkills);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Frontend': 'from-blue-500/20 to-blue-500/5',
      'Backend': 'from-emerald-500/20 to-emerald-500/5',
      'AI/ML': 'from-purple-500/20 to-purple-500/5',
      'Cloud': 'from-cyan-500/20 to-cyan-500/5',
      'DevOps': 'from-orange-500/20 to-orange-500/5',
      'Database': 'from-pink-500/20 to-pink-500/5'
    };
    return colors[category] || 'from-gray-500/20 to-gray-500/5';
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 magnetic-hover ${
              selectedCategory === category
                ? "bg-foreground text-background"
                : "surface surface-hover text-muted-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="surface surface-hover rounded-xl p-4 magnetic-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)}`} />
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-2 bg-muted/20 rounded-full overflow-hidden">
              <motion.div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
            
            <div className="mt-2">
              <span className="text-xs text-muted-foreground">{skill.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="surface surface-hover rounded-xl p-6"
      >
        <h4 className="text-lg font-light mb-4">Proficiency Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1).map((category) => {
            const categorySkills = skillsData.filter(skill => skill.category === category);
            const avgLevel = categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length;
            
            return (
              <div key={category} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center`}>
                  <span className="text-sm font-medium">{Math.round(avgLevel)}%</span>
                </div>
                <div className="text-xs text-muted-foreground">{category}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}