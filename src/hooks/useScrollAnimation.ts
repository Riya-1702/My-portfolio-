import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1, resetOnExit: boolean = true) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection
        setIsVisible(entry.isIntersecting);
        
        // If we don't want to reset on exit, unobserve after first appearance
        if (entry.isIntersecting && !resetOnExit) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
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
  }, [threshold, resetOnExit]);

  return { elementRef, isVisible };
};