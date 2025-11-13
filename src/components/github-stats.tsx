import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Star, GitFork, Code, TrendingUp, Activity } from "lucide-react";

interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  contributions: number;
  followers: number;
  streak: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 1247,
    totalForks: 384,
    totalRepos: 52,
    contributions: 1893,
    followers: 567,
    streak: 127
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and animate numbers
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      icon: Star,
      label: "Total Stars",
      value: stats.totalStars,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500"
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: stats.totalForks,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500"
    },
    {
      icon: Code,
      label: "Repositories",
      value: stats.totalRepos,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500"
    },
    {
      icon: Activity,
      label: "Contributions",
      value: stats.contributions,
      color: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-500"
    },
    {
      icon: TrendingUp,
      label: "Followers",
      value: stats.followers,
      color: "from-pink-500/20 to-pink-500/5",
      iconColor: "text-pink-500"
    },
    {
      icon: Github,
      label: "Day Streak",
      value: stats.streak,
      color: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-500"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="stats">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            <Github className="w-5 h-5" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              GitHub Impact
            </span>
            <div className="w-8 h-px bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Open Source Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building in public and contributing to the developer community
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`surface surface-hover rounded-2xl p-6 text-center relative overflow-hidden magnetic-hover`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50`} />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
                
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {isLoading ? (
                    <div className="h-9 bg-muted/20 rounded animate-pulse" />
                  ) : (
                    <CountUp end={stat.value} />
                  )}
                </motion.div>
                
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 surface surface-hover rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Contribution Activity</h3>
            <a
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              View on GitHub
              <Github className="w-4 h-4" />
            </a>
          </div>
          
          <ContributionGraph />
        </motion.div>
      </div>
    </section>
  );
}

// Animated counter component
function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
}

// Simplified contribution graph
function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  const getRandomIntensity = () => {
    const random = Math.random();
    if (random < 0.3) return 0;
    if (random < 0.5) return 1;
    if (random < 0.7) return 2;
    if (random < 0.9) return 3;
    return 4;
  };

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-muted/20";
      case 1: return "bg-emerald-500/20";
      case 2: return "bg-emerald-500/40";
      case 3: return "bg-emerald-500/60";
      case 4: return "bg-emerald-500/80";
      default: return "bg-muted/20";
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-1 min-w-max">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, dayIndex) => {
              const intensity = getRandomIntensity();
              return (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.2, 
                    delay: (weekIndex * 7 + dayIndex) * 0.001 
                  }}
                  whileHover={{ scale: 1.5 }}
                  className={`w-3 h-3 rounded-sm ${getColorClass(intensity)} cursor-pointer transition-all`}
                  title={`${intensity} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((intensity) => (
            <div
              key={intensity}
              className={`w-3 h-3 rounded-sm ${getColorClass(intensity)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
