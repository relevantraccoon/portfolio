import { useRef, useCallback, useEffect } from "react";

export type CanvasRefs = {
  circlesCanvasRef: React.RefObject<HTMLCanvasElement>;
  imageCanvasRef: React.RefObject<HTMLCanvasElement>;
};

export const useCanvas = () => {
  const circlesCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageCanvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvases = useCallback(() => {
    if (!circlesCanvasRef.current || !imageCanvasRef.current) return;
    if (!circlesCanvasRef.current.parentElement) return;

    const parent = circlesCanvasRef.current.parentElement;
    const rect = parent.getBoundingClientRect();

    circlesCanvasRef.current.width = rect.width;
    circlesCanvasRef.current.height = rect.height;

    imageCanvasRef.current.width = rect.width;
    imageCanvasRef.current.height = rect.height;

    return { width: rect.width, height: rect.height };
  }, []);

  const clearCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const getCanvasContext = useCallback(
    (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
      return canvasRef.current?.getContext("2d") || null;
    },
    []
  );

  useEffect(() => {
    resizeCanvases();
    window.addEventListener("resize", resizeCanvases);
    return () => window.removeEventListener("resize", resizeCanvases);
  }, [resizeCanvases]);

  return {
    circlesCanvasRef,
    imageCanvasRef,
    resizeCanvases,
    clearCanvas,
    getCanvasContext,
  };
};