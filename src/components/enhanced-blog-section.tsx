import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowUpRight, X, ChevronRight } from "lucide-react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Register languages
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('typescript', typescript);

const blogPosts = [
  {
    id: 1,
    title: "Building Production ML Pipelines",
    excerpt: "Lessons learned from deploying machine learning models that serve millions of predictions daily. Architecture patterns, monitoring strategies, and performance optimization.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    tags: ["ML", "Production", "Architecture"],
    codeExample: {
      language: "python",
      code: `class MLPipeline:
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
        
        return prediction`
    },
    content: `When deploying ML models to production, the focus shifts from model accuracy to system reliability. Here's what I've learned building systems that process millions of predictions daily.

## Architecture Principles

**Separation of Concerns**: Model training, serving, and monitoring should be separate systems. This allows for independent scaling and reduces blast radius during failures.

**Stateless Serving**: Model serving should be stateless to enable horizontal scaling. Store model artifacts in object storage and load them at startup.

**Graceful Degradation**: Always have fallback mechanisms. If the ML model fails, the system should degrade gracefully rather than crash.

## Monitoring and Observability

Production ML systems require different monitoring than traditional applications:

- **Model Drift Detection**: Monitor input distributions to detect when the world changes
- **Prediction Quality**: Track business metrics, not just technical metrics  
- **Latency Percentiles**: P99 latency matters more than average latency
- **Resource Utilization**: ML models can be resource-intensive

The key insight: treat ML models as living systems that require continuous care, not static artifacts that work forever.`
  },
  {
    id: 2,
    title: "The Evolution of Search Systems",
    excerpt: "How modern search engines are moving beyond keyword matching to semantic understanding. Vector embeddings, neural ranking, and the future of information retrieval.",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Search", "AI", "Distributed Systems"],
    codeExample: {
      language: "python",
      code: `from sentence_transformers import SentenceTransformer
import pinecone

# Modern semantic search pipeline
embedder = SentenceTransformer('all-MiniLM-L6-v2')
vector_db = pinecone.Index('search-index')

def semantic_search(query: str, top_k: int = 10):
    # Convert query to vector
    query_vector = embedder.encode(query)
    
    # Search in vector space
    results = vector_db.query(
        vector=query_vector.tolist(),
        top_k=top_k,
        include_metadata=True
    )
    
    return results`
    },
    content: `Traditional search engines relied on keyword matching and link analysis. Modern systems understand meaning and context. Here's how the landscape is evolving.

## From Keywords to Meaning

The shift from lexical to semantic search represents a fundamental change in how we think about information retrieval:

**Lexical Search**: "red car" only finds documents containing those exact words
**Semantic Search**: understands that "crimson vehicle" and "cherry automobile" are related concepts

## Vector Embeddings

The breakthrough came with dense vector representations. Modern embedding models can capture semantic meaning in high-dimensional space.

## Hybrid Approaches

The best systems combine both approaches:
1. Use semantic search for understanding intent
2. Apply lexical matching for exact matches
3. Blend results using learned ranking functions`
  },
  {
    id: 3,
    title: "Microservices at Scale",
    excerpt: "Architectural patterns for building resilient distributed systems. Service mesh, circuit breakers, and lessons from production incidents.",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Microservices", "DevOps", "Scalability"],
    codeExample: {
      language: "typescript",
      code: `interface CircuitBreaker {
  execute<T>(fn: () => Promise<T>): Promise<T>;
}

class SimpleCircuitBreaker implements CircuitBreaker {
  private failures = 0;
  private lastFailureTime?: number;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  
  constructor(
    private threshold: number = 5,
    private timeout: number = 60000
  ) {}
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime! > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }
  
  private onFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();
    if (this.failures >= this.threshold) {
      this.state = 'OPEN';
    }
  }
}`
    },
    content: `Building microservices is easy. Operating them at scale is hard. Here are patterns that have saved our production systems.

## The Circuit Breaker Pattern

When a service fails, stop calling it. Give it time to recover. This simple pattern prevents cascading failures.

## Service Mesh Benefits

- **Traffic Management**: Canary deployments, A/B testing
- **Observability**: Distributed tracing out of the box
- **Security**: mTLS between all services
- **Resilience**: Automatic retries and timeouts

## Key Lessons

1. **Design for Failure**: Everything will fail eventually
2. **Monitor Everything**: You can't fix what you can't see
3. **Keep It Simple**: Complexity is the enemy of reliability`
  }
];

export function EnhancedBlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
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
              Technical Writing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Thoughts & Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Deep dives into software engineering, architecture decisions, and lessons learned
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "surface surface-hover text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface surface-hover rounded-2xl overflow-hidden group cursor-pointer magnetic-hover"
              onClick={() => setSelectedPost(post)}
            >
              {/* Category Badge */}
              <div className="p-6 pb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground mb-4">
                  {post.category}
                </span>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Code Preview */}
                {post.codeExample && (
                  <div className="relative rounded-lg overflow-hidden mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-2 right-2 px-2 py-1 rounded bg-background/80 text-xs text-muted-foreground">
                      {post.codeExample.language}
                    </div>
                    <SyntaxHighlighter
                      language={post.codeExample.language}
                      style={atomOneDark}
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        fontSize: '0.7rem',
                        maxHeight: '120px',
                        overflow: 'hidden'
                      }}
                    >
                      {post.codeExample.code.split('\n').slice(0, 6).join('\n') + '\n...'}
                    </SyntaxHighlighter>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-xl"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground mb-4">
                        {selectedPost.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {selectedPost.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {selectedPost.readTime}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="surface surface-hover w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Code Example */}
                  {selectedPost.codeExample && (
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">Code Example</h3>
                        <span className="text-sm text-muted-foreground">
                          {selectedPost.codeExample.language}
                        </span>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <SyntaxHighlighter
                          language={selectedPost.codeExample.language}
                          style={atomOneDark}
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            fontSize: '0.875rem'
                          }}
                          showLineNumbers
                        >
                          {selectedPost.codeExample.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="prose prose-invert max-w-none">
                    {selectedPost.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h3 key={index} className="text-2xl font-semibold mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h3>
                        );
                      } else if (paragraph.startsWith('**')) {
                        const parts = paragraph.match(/\*\*(.*?)\*\*: (.*)/);
                        if (parts) {
                          return (
                            <p key={index} className="mb-4">
                              <strong className="text-foreground">{parts[1]}</strong>: {parts[2]}
                            </p>
                          );
                        }
                      } else if (paragraph.startsWith('- ')) {
                        return (
                          <li key={index} className="mb-2 text-muted-foreground">
                            {paragraph.replace('- ', '')}
                          </li>
                        );
                      }
                      return (
                        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
