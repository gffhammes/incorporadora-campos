import { useState, useRef, useCallback } from "react";

export const useLoadingDebounce = () => {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleLoadingStart = useCallback((ms?: number) => {
    timeoutRef.current = window.setTimeout(() => {
      setLoading(true);
    }, ms ?? 500);
  }, []);

  const handleLoadingEnd = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setLoading(false);
  }, []);

  return { loading, handleLoadingStart, handleLoadingEnd };
};
