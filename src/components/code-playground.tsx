import { useState } from "react";
import { motion } from "motion/react";
import { Play, Copy, Check, Code2, Terminal } from "lucide-react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Register languages
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);

interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  output: string;
}

const codeExamples: CodeExample[] = [
  {
    id: "binary-search",
    title: "Binary Search Algorithm",
    description: "Efficient search algorithm with O(log n) complexity",
    language: "python",
    code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Test the function
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
target = 13
result = binary_search(arr, target)
print(f"Found {target} at index: {result}")`,
    output: "Found 13 at index: 6"
  },
  {
    id: "async-await",
    title: "Async/Await Pattern",
    description: "Modern asynchronous JavaScript with error handling",
    language: "typescript",
    code: `async function fetchUserData(userId: string): Promise<User> {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Usage with Promise chaining
fetchUserData('123')
  .then(user => console.log('User:', user))
  .catch(error => console.error('Error:', error));`,
    output: "User: { id: '123', name: 'John Doe', email: 'john@example.com' }"
  },
  {
    id: "memoization",
    title: "Memoization for Performance",
    description: "Cache function results to optimize repeated calculations",
    language: "javascript",
    code: `function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Returning cached result');
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Expensive Fibonacci calculation
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast with memoization!`,
    output: "102334155\nExecution time: 0.3ms (with memoization)\nvs 2847ms (without memoization)"
  }
];

export function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState(codeExamples[0]);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 1500);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
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
            <Code2 className="w-5 h-5" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Interactive Code
            </span>
            <div className="w-8 h-px bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gradient mb-6">
            Code Playground
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore algorithms and patterns with live code examples
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Example Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4"
          >
            {codeExamples.map((example, index) => (
              <motion.button
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedExample(example);
                  setShowOutput(false);
                }}
                className={`w-full text-left surface surface-hover rounded-xl p-6 transition-all duration-300 magnetic-hover ${
                  selectedExample.id === example.id
                    ? "ring-2 ring-purple-500/50 bg-purple-500/10"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{example.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-foreground/10 text-foreground">
                    {example.language}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-4"
          >
            {/* Toolbar */}
            <div className="surface rounded-t-xl p-4 flex items-center justify-between border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-sm text-muted-foreground ml-4">
                  {selectedExample.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-sm surface surface-hover rounded-lg flex items-center gap-2 hover:bg-foreground/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="px-4 py-1.5 text-sm bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Play className={`w-4 h-4 ${isRunning ? 'animate-pulse' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            {/* Code Display */}
            <div className="surface rounded-b-xl overflow-hidden">
              <SyntaxHighlighter
                language={selectedExample.language}
                style={atomOneDark}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  fontSize: '0.9rem',
                  background: 'transparent'
                }}
                showLineNumbers
              >
                {selectedExample.code}
              </SyntaxHighlighter>
            </div>

            {/* Output Terminal */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="surface rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 flex items-center gap-2 border-b border-border/40">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium">Output</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ml-auto" />
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-emerald-400">
                    $ Executing {selectedExample.language} code...
                  </div>
                  <div className="mt-2 text-muted-foreground">
                    {selectedExample.output}
                  </div>
                  <div className="mt-2 text-emerald-500">
                    ✓ Execution completed successfully
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
