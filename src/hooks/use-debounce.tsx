import { useState, useEffect, useCallback } from "react";

/**
 * A Custom React hook that debounces a value, delaying updates until after a specified delay period.
 * Useful for search inputs, API calls, or any scenario where you want to limit how often
 * a value updates in response to rapid changes.
 *
 * @template T - The type of the value being debounced
 * @param initialValue - The initial value for both the input and debounced value
 * @param delay - The delay in milliseconds before the debounced value updates (default: 500ms)
 * @returns A tuple containing [debouncedValue, setValue] where:
 *   - debouncedValue: The debounced value that updates after the delay
 *   - setValue: Function to update the input value immediately
 *
 * @example
 * ```typescript
 * // Basic usage with string search
 * const [searchQuery, setSearchQuery] = useDebounceValue("", 300);
 *
 * // Usage with numbers
 * const [count, setCount] = useDebounceValue<number>(0, 1000);
 *
 * // In a search component
 * <input
 *   onChange={(e) => setSearchQuery(e.target.value)}
 *   placeholder="Search..."
 * />
 * // searchQuery will only update 300ms after user stops typing
 * ```
 */
export function useDebounceValue<T = string>(
  initialValue: T = "" as T,
  delay: number = 500,
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  const setDebouncedValueCallback = useCallback((newValue: T) => {
    setValue(newValue);
  }, []);

  return [debouncedValue, setDebouncedValueCallback];
}
