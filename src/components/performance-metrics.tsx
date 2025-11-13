import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { TrendingUp, Zap, Users, Shield, Clock, Database } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: any;
  color: string;
}

export function PerformanceMetrics() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const metrics: Metric[] = [
    {
      label: "Response Time",
      value: "47ms",
      change: "-23%",
      trend: "up",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      label: "System Uptime",
      value: "99.97%",
      change: "+0.12%",
      trend: "up",
      icon: Shield,
      color: "from-emerald-500 to-teal-500"
    },
    {
      label: "Active Users",
      value: "1.2M",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Query Latency",
      value: "23ms",
      change: "-31%",
      trend: "up",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      label: "Data Processed",
      value: "2.4TB",
      change: "+42%",
      trend: "up",
      icon: Database,
      color: "from-indigo-500 to-purple-500"
    },
    {
      label: "Throughput",
      value: "10K/s",
      change: "+28%",
      trend: "up",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues({
        responseTime: Math.random() * 100,
        uptime: 95 + Math.random() * 5,
        users: Math.random() * 100,
        latency: Math.random() * 100,
        data: Math.random() * 100,
        throughput: Math.random() * 100
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Performance Metrics
            </span>
            <div className="w-8 h-px bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Production Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time metrics from systems serving millions of users daily
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="surface surface-hover rounded-2xl p-6 relative overflow-hidden magnetic-hover"
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-10 blur-2xl`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} p-2.5 mb-4 flex items-center justify-center`}>
                  <metric.icon className="w-full h-full text-white" />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <motion.div 
                    className="text-3xl font-bold mb-1"
                    key={metric.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>

                {/* Change indicator */}
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === "down" ? "rotate-180" : ""}`} />
                    {metric.change}
                  </div>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>

                {/* Mini chart */}
                <div className="mt-4 h-12 flex items-end gap-1">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const height = Math.random() * 100;
                    return (
                      <motion.div
                        key={i}
                        className={`flex-1 rounded-t bg-gradient-to-t ${metric.color} opacity-60`}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="surface surface-hover rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">System Performance</h3>
              <p className="text-muted-foreground">Real-time monitoring across all services</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          {/* Large Chart */}
          <div className="h-64 flex items-end gap-2">
            {Array.from({ length: 50 }).map((_, i) => {
              const height = 30 + Math.random() * 70;
              const isHighlight = i % 10 === 0;
              return (
                <motion.div
                  key={i}
                  className={`flex-1 rounded-t ${
                    isHighlight 
                      ? "bg-gradient-to-t from-purple-500 to-blue-500" 
                      : "bg-gradient-to-t from-blue-500/30 to-cyan-500/30"
                  }`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.02 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.8)"
                  }}
                />
              );
            })}
          </div>

          {/* Timeline */}
          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
