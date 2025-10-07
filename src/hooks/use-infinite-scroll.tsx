import { useEffect, useRef } from "react";

/**
 * A Custom React hook that triggers a callback when a target element becomes visible in the viewport.
 * Useful for implementing infinite scroll or lazy loading functionality.
 *
 * @param callback - Function to execute when the target element intersects the viewport
 * @returns A ref to attach to the element you want to observe for intersection
 *
 * @example
 * ```typescript
 * const loaderRef = useInfiniteScroll(() => {
 *   // Load more data when this element becomes visible
 *   fetchMoreItems();
 * });
 *
 * return (
 *   <div>
 *     {items.map(item => <Item key={item.id} data={item} />)}
 *     <div ref={loaderRef}>Loading...</div>
 *   </div>
 * );
 * ```
 */
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
