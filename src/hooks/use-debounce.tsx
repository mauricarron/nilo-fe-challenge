import { useState, useEffect, useCallback } from "react";

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
