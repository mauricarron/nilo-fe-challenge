import { useEffect, useRef } from "react";

export function useInfiniteScroll(callback: () => void) {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 },
    );

    const currentElement = loaderRef.current;
    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [callback]);

  return loaderRef;
}
