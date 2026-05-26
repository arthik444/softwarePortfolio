import { motion } from "motion/react";
import { Trophy, BookOpen, ExternalLink, Users, Zap, MapPin } from "lucide-react";

const hackathonWins = [
  {
    title: "ProCheck",
    prize: "2nd Place — Elastic Challenge",
    hackathon: "Google Cloud × Elastic Hackathon",
    hackathonFull: "AI Accelerate: Unlocking New Frontiers",
    description:
      "AI-powered medical-protocol assistant. Clinicians query official guidelines in natural language and receive ranked, cited checklists. Built Elasticsearch hybrid search combining BM25 keyword precision with dense vector embeddings via Reciprocal Rank Fusion (RRF), plus Google Gemini for query expansion and context-aware checklist generation. Reduced protocol lookup time from 3–5 minutes to under 10 seconds with 85% first-try accuracy.",
    tech: ["Elasticsearch", "Google Gemini", "FastAPI", "React", "Firebase"],
    stats: { participants: "2,732", pool: "$50,000", award: "$7,500" },
    links: {
      project: "https://devpost.com/software/procheck",
      hackathon: "https://ai-accelerate.devpost.com/",
    },
    gradient: "from-blue-500/15 to-purple-500/15",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    dot: "bg-blue-400",
  },
  {
    title: "Rift Analyzer",
    prize: "2nd Place",
    hackathon: "AWS × Riot Games Hackathon",
    hackathonFull: "Rift Rewind: Your Season, Your Story",
    description:
      "Agentic coaching system built on multi-step tool-calling with Amazon Bedrock (Claude 3 Sonnet). The agent chains custom analytics tools over a match-analysis engine computing 20+ engineered metrics — objective conversion, vision control, gold-swing deltas — with z-score outlier detection and rolling-window aggregation. Achieved 97% page-load improvement via aggressive client-side caching.",
    tech: ["AWS Bedrock", "Claude 3 Sonnet", "FastAPI", "React", "DynamoDB", "S3"],
    stats: { participants: "2,636", pool: "$26,000", award: "$7K cash + $7K AWS credits" },
    links: {
      project: "https://devpost.com/software/rift-analyser",
      hackathon: "https://riftrewind.devpost.com/",
    },
    gradient: "from-orange-500/15 to-red-500/15",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    dot: "bg-orange-400",
  },
  {
    title: "CaseTwin",
    prize: "Special Technology Winner",
    hackathon: "Google MedGemma Impact Challenge",
    hackathonFull: "HAI-DEF Program — Google Research × Kaggle",
    description:
      "Clinical decision-support tool that matches acute chest X-rays with historical 'twin' cases and uses an agentic workflow to accelerate specialist referrals in rural hospitals. Built on Google's MedGemma medical AI models, addressing healthcare access gaps by surfacing the most relevant historical precedents for each incoming case.",
    tech: ["Google MedGemma", "Python", "React", "Google Cloud Run"],
    stats: { participants: "850+ teams", pool: "$100,000", award: "Special Technology Winner" },
    links: {
      project:
        "https://www.kaggle.com/competitions/med-gemma-impact-challenge/writeups/new-writeup-1771703368723",
      hackathon:
        "https://blog.google/innovation-and-ai/technology/health/med-gemma-impact-challenge/",
    },
    gradient: "from-emerald-500/15 to-teal-500/15",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
  },
];

const publications = [
  {
    title: "Hemolix.Extract.V",
    venue: "SIGMOD 2026",
    track: "Demo Track",
    location: "Bengaluru, India",
    description:
      "LLM-based information extraction system that auto-selects the optimal extraction plan per document, dynamically routing across Gemini, Mistral, and Groq to balance cost, accuracy, and latency. Accepted at the ACM SIGMOD International Conference on Management of Data.",
    group: "Hemolix Research Group",
    affiliation: "Florida State University & University of South Florida",
    status: "Accepted",
    color: "from-violet-500/15 to-indigo-500/15",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    title: "Hemolix.TabGen",
    venue: "ACL 2026",
    track: "Industrial Track",
    location: "San Diego, USA",
    description:
      "Domain-agnostic system for generating structured tables from unstructured documents using a bi-dimensional hierarchical metadata schema and LLM-profile-based optimization. Accepted at the Annual Meeting of the Association for Computational Linguistics.",
    group: "Hemolix Research Group",
    affiliation: "Florida State University & University of South Florida",
    status: "Accepted",
    color: "from-pink-500/15 to-rose-500/15",
    border: "border-pink-500/20",
    accent: "text-pink-400",
  },
];

const aggregateStats = [
  { value: "6,200+", label: "Competitors Across All Hackathons" },
  { value: "$176K", label: "Combined Prize Pools" },
  { value: "3×", label: "Hackathon Winner" },
  { value: "2", label: "Research Papers Accepted" },
];

export function AchievementsSection() {
  return (
    <section className="py-24 px-6" id="achievements">
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
              Recognition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Wins & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Competed globally, won against thousands of engineers, and published research
            at top-tier venues — building systems that actually matter.
          </p>
        </motion.div>

        {/* Aggregate Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {aggregateStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="surface rounded-xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-light text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Wins */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h3 className="text-2xl font-light">Hackathon Wins</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hackathonWins.map((win, index) => (
              <motion.div
                key={win.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative surface rounded-2xl overflow-hidden border ${win.border} group`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${win.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-6 flex flex-col h-full">
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 border border-border/30 mb-3 ${win.accent}`}
                      >
                        <Trophy className="w-3 h-3" />
                        {win.prize}
                      </div>
                      <h4 className="text-xl font-light mb-1">{win.title}</h4>
                      <p className="text-xs text-muted-foreground">{win.hackathon}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {win.description}
                  </p>

                  {/* Scale stats */}
                  <div className="mb-5 py-3 border-t border-b border-border/20 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Users className="w-3 h-3 text-muted-foreground" />
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Participants</span>
                        </div>
                        <div className="text-sm font-light text-foreground">{win.stats.participants}</div>
                      </div>
                      <div className="text-center border-l border-border/20">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Zap className="w-3 h-3 text-muted-foreground" />
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Prize Pool</span>
                        </div>
                        <div className="text-sm font-light text-foreground">{win.stats.pool}</div>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-border/10 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 border border-border/10 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full ${win.dot} animate-pulse`} />
                        <span className="text-muted-foreground">Awarded:</span>
                        <span className={`font-medium ${win.accent}`}>{win.stats.award}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {win.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-foreground/5 rounded-full border border-border/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border/10 mt-auto">
                    <a
                      href={win.links.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Devpost
                    </a>
                    <a
                      href={win.links.hackathon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Hackathon
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Publications */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-5 h-5 text-violet-400" />
            <h3 className="text-2xl font-light">Research Publications</h3>
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/30 bg-foreground/5 ml-1">
              Both accepted · forthcoming
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative surface rounded-2xl overflow-hidden border ${pub.border} group flex flex-col h-full`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pub.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-6 flex flex-col h-full justify-between flex-grow">
                  <div>
                    {/* Conference badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`text-lg font-semibold tracking-tight ${pub.accent}`}
                          >
                            {pub.venue}
                          </span>
                          <span className="text-xs text-muted-foreground border border-border/30 rounded px-3 py-1">
                            {pub.track}
                          </span>
                          <span className="text-xs text-emerald-400 border border-emerald-500/30 rounded px-3 py-1">
                            {pub.status}
                          </span>
                        </div>
                        <h4 className="text-xl font-light mb-1">{pub.title}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {pub.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {pub.description}
                    </p>
                  </div>

                  {/* Affiliation */}
                  <div className="pt-4 border-t border-border/20 mt-auto">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-foreground/70">{pub.group}</span>
                      {" · "}
                      {pub.affiliation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
