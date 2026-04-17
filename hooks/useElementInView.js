import { useState, useEffect, useRef } from 'react';

export default function useElementInView(threshold = 0.15) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || typeof IntersectionObserver !== 'function') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once visible, stop observing (animations stay triggered)
          observer.unobserve(currentRef);
        }
      },
      { threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold]);
  
  return [ref, isInView];
}
