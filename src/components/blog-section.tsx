import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowUpRight, X } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Production ML Pipelines",
    excerpt: "Lessons learned from deploying machine learning models that serve millions of predictions daily. Architecture patterns, monitoring strategies, and performance optimization.",
    content: `# Building Production ML Pipelines

When deploying ML models to production, the focus shifts from model accuracy to system reliability. Here's what I've learned building systems that process millions of predictions daily.

## Architecture Principles

**Separation of Concerns**: Model training, serving, and monitoring should be separate systems. This allows for independent scaling and reduces blast radius during failures.

**Stateless Serving**: Model serving should be stateless to enable horizontal scaling. Store model artifacts in object storage and load them at startup.

**Graceful Degradation**: Always have fallback mechanisms. If the ML model fails, the system should degrade gracefully rather than crash.

## Key Patterns

\`\`\`python
class MLPipeline:
    def __init__(self, model_config):
        self.model = self.load_model(model_config)
        self.preprocessor = DataPreprocessor()
        self.cache = RedisCache()
        self.monitor = ModelMonitor()
    
    async def predict(self, data):
        # Input validation
        if not self.validate_input(data):
            return self.fallback_prediction(data)
        
        # Preprocessing
        processed_data = self.preprocessor.transform(data)
        
        # Prediction with monitoring
        with self.monitor.track_prediction():
            prediction = self.model.predict(processed_data)
        
        return prediction
\`\`\`

## Monitoring and Observability

Production ML systems require different monitoring than traditional applications:

- **Model Drift Detection**: Monitor input distributions to detect when the world changes
- **Prediction Quality**: Track business metrics, not just technical metrics  
- **Latency Percentiles**: P99 latency matters more than average latency
- **Resource Utilization**: ML models can be resource-intensive

The key insight: treat ML models as living systems that require continuous care, not static artifacts that work forever.`,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    tags: ["ML", "Production", "Architecture"]
  },
  {
    id: 2,
    title: "The Evolution of Search Systems",
    excerpt: "How modern search engines are moving beyond keyword matching to semantic understanding. Vector embeddings, neural ranking, and the future of information retrieval.",
    content: `# The Evolution of Search Systems

Traditional search engines relied on keyword matching and link analysis. Modern systems understand meaning and context. Here's how the landscape is evolving.

## From Keywords to Meaning

The shift from lexical to semantic search represents a fundamental change in how we think about information retrieval:

**Lexical Search**: "red car" only finds documents containing those exact words
**Semantic Search**: understands that "crimson vehicle" and "cherry automobile" are related concepts

## Vector Embeddings

The breakthrough came with dense vector representations:

\`\`\`python
# Modern semantic search pipeline
embedder = SentenceTransformer('all-MiniLM-L6-v2')
vector_db = PineconeIndex('search-index')

def semantic_search(query, top_k=10):
    # Convert query to vector
    query_vector = embedder.encode(query)
    
    # Search in vector space
    results = vector_db.query(
        vector=query_vector,
        top_k=top_k,
        include_metadata=True
    )
    
    return results
\`\`\`

## Hybrid Approaches

The best systems combine multiple signals:

1. **Lexical matching** for exact terms and phrases
2. **Semantic similarity** for conceptual matches
3. **Neural ranking** to reorder results
4. **User context** for personalization

## Architecture Patterns

Modern search systems are built as multi-stage pipelines:

- **Retrieval**: Cast a wide net with fast, approximate methods
- **Ranking**: Use expensive models on a smaller candidate set
- **Personalization**: Adjust results based on user context

The future of search is conversational, multimodal, and deeply contextual. We're moving from "finding documents" to "answering questions" to "understanding intent."`,
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Search", "AI", "Information Retrieval"]
  },
  {
    id: 3,
    title: "Ethics in Healthcare AI",
    excerpt: "Building responsible AI systems for healthcare requires more than technical excellence. Privacy, bias, transparency, and the unique challenges of medical applications.",
    content: `# Ethics in Healthcare AI

Healthcare AI systems can save lives, but they can also cause harm. Building responsible systems requires careful consideration of ethics at every stage.

## The Stakes Are Different

In healthcare, algorithmic failures aren't just inconvenient—they can be life-threatening. This creates unique ethical obligations:

- **Patient Safety**: First, do no harm
- **Privacy**: Medical data is deeply personal
- **Equity**: Biased systems can worsen health disparities
- **Transparency**: Doctors need to understand AI recommendations

## Privacy by Design

Healthcare AI must protect patient privacy from the ground up:

\`\`\`python
class PrivacyPreservingModel:
    def __init__(self):
        self.differential_privacy = DifferentialPrivacy(epsilon=1.0)
        self.federated_client = FederatedLearningClient()
    
    def train(self, hospital_data):
        # Add noise to preserve privacy
        private_data = self.differential_privacy.apply(hospital_data)
        
        # Train without centralizing data
        self.federated_client.train_local(private_data)
        
        # Only share model updates, not data
        return self.federated_client.get_model_updates()
\`\`\`

## Bias Detection and Mitigation

Medical AI systems must work fairly across all patient populations:

- **Demographic Parity**: Equal outcomes across groups
- **Equalized Odds**: Equal accuracy across populations
- **Calibration**: Confidence scores should be meaningful for all groups

## Explainability

Healthcare providers need to understand AI decisions:

- **Feature Importance**: Which symptoms drove the diagnosis?
- **Counterfactuals**: What would change the recommendation?
- **Uncertainty**: How confident is the model?

## Regulatory Considerations

Healthcare AI operates in a heavily regulated environment:

- **FDA Approval**: Medical devices require rigorous validation
- **HIPAA Compliance**: Patient data protection is mandatory
- **Clinical Validation**: Real-world efficacy must be demonstrated

The goal isn't to build the most accurate model—it's to build systems that improve patient outcomes while respecting human dignity and autonomy.`,
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Ethics",
    tags: ["Healthcare", "AI", "Ethics", "Privacy"]
  }
];

const categories = ["All", "Engineering", "Technology", "Ethics"];

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-24 px-6" id="blog">
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
              Writing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Technical Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Thoughts on software engineering, AI systems, and the intersection of 
            technology with society. Deep dives into production challenges and emerging patterns.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm transition-all duration-300 border rounded-lg ${
                selectedCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "text-muted-foreground border-border/40 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface surface-hover rounded-lg p-6 cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 bg-foreground/10 rounded">
                  {post.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              
              <h3 className="text-lg font-light mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-foreground/5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to stay updated with my latest thoughts on technology and engineering?
          </p>
          <button className="surface surface-hover px-6 py-3 rounded-lg group">
            Subscribe to newsletter
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Article Modal */}
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="surface rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-foreground/10 rounded text-xs">
                        {selectedPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(selectedPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {selectedPost.readTime}
                      </div>
                    </div>
                    <h1 className="text-3xl font-light mb-4">{selectedPost.title}</h1>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {selectedPost.content}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/20">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-foreground/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}