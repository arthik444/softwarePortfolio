import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "" 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getTransformClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} transform translate-y-8 opacity-0`;
        case "down":
          return `${baseClasses} transform -translate-y-8 opacity-0`;
        case "left":
          return `${baseClasses} transform translate-x-8 opacity-0`;
        case "right":
          return `${baseClasses} transform -translate-x-8 opacity-0`;
        case "scale":
          return `${baseClasses} transform scale-95 opacity-0`;
        default:
          return `${baseClasses} transform translate-y-8 opacity-0`;
      }
    }
    
    return `${baseClasses} transform translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

export function StaggeredReveal({ 
  children, 
  staggerDelay = 100,
  direction = "up",
  className = "" 
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerDelay}
          direction={direction}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}