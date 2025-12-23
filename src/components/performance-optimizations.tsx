import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeroSkeleton } from "./loading-states";

interface PageLoaderProps {
  children: React.ReactNode;
}

export function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate realistic loading sequence
    const loadingSequence = [
      { progress: 20, delay: 100, label: "Initializing..." },
      { progress: 40, delay: 200, label: "Loading assets..." },
      { progress: 70, delay: 300, label: "Preparing interface..." },
      { progress: 90, delay: 200, label: "Almost ready..." },
      { progress: 100, delay: 300, label: "Welcome!" },
    ];

    let currentStep = 0;

    const runNextStep = () => {
      if (currentStep < loadingSequence.length) {
        const step = loadingSequence[currentStep];
        setTimeout(() => {
          setLoadingProgress(step.progress);
          currentStep++;
          
          if (currentStep < loadingSequence.length) {
            runNextStep();
          } else {
            setTimeout(() => setIsLoading(false), 400);
          }
        }, step.delay);
      }
    };

    // Start loading sequence after a short delay
    const timer = setTimeout(runNextStep, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="text-center space-y-8">
              {/* Logo/Brand */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-3xl font-light tracking-wide">Karthik Reddy Vemireddy</h1>
                <p className="text-muted-foreground mt-2">Full-Stack Engineer</p>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-80 mx-auto space-y-4">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {loadingProgress}%
                </p>
              </div>

              {/* Loading Animation */}
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Intersection Observer Hook for performance
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  threshold: number = 0.1
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin: "50px" }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold]);

  return isIntersecting;
}

// Lazy loading wrapper for heavy components
export function LazySection({ 
  children, 
  fallback = <div className="h-96 surface animate-pulse rounded-lg" />
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef);

  useEffect(() => {
    if (isVisible && !shouldRender) {
      setShouldRender(true);
    }
  }, [isVisible, shouldRender]);

  return (
    <div ref={elementRef}>
      {shouldRender ? children : fallback}
    </div>
  );
}