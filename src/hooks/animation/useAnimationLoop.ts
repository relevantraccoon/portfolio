import { useRef, useEffect, useCallback } from "react";

export const useAnimationLoop = (
  shouldAnimate: boolean,
  onAnimate: (currentTime: number, animationStartTime: number) => void
) => {
  const animationRef = useRef<number | undefined>(undefined);
  const animationStartTimeRef = useRef<number>(0);

  const animate = useCallback(
    (currentTime: number) => {
      if (!shouldAnimate) return;

      if (animationStartTimeRef.current === 0 && shouldAnimate) {
        animationStartTimeRef.current = currentTime;
      }

      onAnimate(currentTime, animationStartTimeRef.current);
      animationRef.current = requestAnimationFrame(animate);
    },
    [shouldAnimate, onAnimate]
  );

  const resetAnimation = useCallback(() => {
    animationStartTimeRef.current = 0;
  }, []);

  const startAnimation = useCallback(() => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }

    if (shouldAnimate) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, shouldAnimate]);

  useEffect(() => {
    resetAnimation();
  }, [shouldAnimate, resetAnimation]);

  return {
    animationStartTimeRef,
    resetAnimation,
    startAnimation,
    stopAnimation,
  };
};