import { useCallback, useRef } from "react";
import { GridPosition } from "@/hooks/animation/useResponsiveGrid";

export type Circle = {
  x: number;
  y: number;
  baseSize: number;
  currentSize: number;
  frontColor: string;
  backColor: string;
  pulseOffset: number;
  pulseSpeed: number;
  isCoinFlipping: boolean;
  coinFlipStartTime: number;
  coinFlipProgress: number;
  coinFlipRotation: number;
  coinFlipVelocity: number;
  coinFlipDelay: number;
  isShowingFront: boolean;
  finalSide: "front" | "back";
  hasFlippedOnce: boolean;
  targetRevolutions: number;
  gridRow: number;
  gridCol: number;
};

export type BubbleAnimationConfig = {
  bubbleCount: number;
  pulseSpeed: number;
  pulseIntensity: number;
  coinFlipVelocity: number;
  maxRevolutions: number;
  flipWaveSpeed: number;
  flipTimingRandomness: number;
  animationSpeed: number;
};

export const useBubbleAnimation = (
  config: BubbleAnimationConfig,
  generateGridPosition: (
    index: number,
    width: number,
    height: number
  ) => GridPosition,
  themeColors: string[]
) => {
  const circlesRef = useRef<Circle[]>([]);

  const calculateDirectionalDelay = useCallback(
    (row: number, col: number, totalRows: number, totalCols: number) => {
      const baseWaveLength = 2000 / config.flipWaveSpeed;
      const progress =
        (row / (totalRows - 1 || 1) +
          (totalCols - 1 - col) / (totalCols - 1 || 1)) /
        2;
      const delay = progress * baseWaveLength;
      const randomOffset =
        (Math.random() - 0.5) *
        (config.flipTimingRandomness / 100) *
        (baseWaveLength * 0.3);

      return Math.max(0, delay + randomOffset);
    },
    [config.flipWaveSpeed, config.flipTimingRandomness]
  );

  const generateCircles = useCallback(
    (canvasWidth: number, canvasHeight: number): Circle[] => {
      const circles: Circle[] = [];

      // Calculate how many bubbles the grid can actually fit
      const firstGridPos = generateGridPosition(0, canvasWidth, canvasHeight);
      const totalGridSlots = firstGridPos.totalRows * firstGridPos.totalCols;

      // Generate bubbles for all grid slots to fill the entire grid
      for (let i = 0; i < totalGridSlots; i++) {
        const gridPos = generateGridPosition(i, canvasWidth, canvasHeight);
        const baseSize = gridPos.bubbleSize;

        const x = gridPos.x;
        const y = gridPos.y;
        const row = gridPos.row;
        const col = gridPos.col;
        const totalRows = gridPos.totalRows;
        const totalCols = gridPos.totalCols;

        const coinFlipDelay = calculateDirectionalDelay(
          row,
          col,
          totalRows,
          totalCols
        );

        const frontColor =
          themeColors[i % themeColors.length] || "rgba(255,255,255,0.8)";
        const backColor =
          themeColors[
            (i + Math.floor(themeColors.length / 2)) % themeColors.length
          ] || "rgba(100,100,100,0.8)";

        circles.push({
          x,
          y,
          baseSize,
          currentSize: baseSize,
          frontColor,
          backColor,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: 0.5 + Math.random() * config.pulseSpeed,
          isCoinFlipping: false,
          coinFlipStartTime: 0,
          coinFlipProgress: 0,
          coinFlipRotation: 0,
          coinFlipVelocity: config.coinFlipVelocity + (Math.random() - 0.5) * 2,
          coinFlipDelay,
          isShowingFront: true,
          finalSide: "front",
          hasFlippedOnce: false,
          targetRevolutions: 0,
          gridRow: row,
          gridCol: col,
        });
      }

      circles.forEach((circle) => {
        const revolutions =
          Math.floor(Math.random() * config.maxRevolutions) + 1;
        circle.targetRevolutions = revolutions;
        circle.finalSide = revolutions % 2 === 0 ? "front" : "back";
      });

      return circles;
    },
    [config, generateGridPosition, calculateDirectionalDelay, themeColors]
  );

  const updateBubbles = useCallback(
    (currentTime: number) => {
      if (config.pulseIntensity > 0) {
        circlesRef.current.forEach((circle) => {
          const pulse = Math.sin(
            currentTime * 0.001 * circle.pulseSpeed * config.animationSpeed +
              circle.pulseOffset
          );
          const variation =
            (config.pulseIntensity / 100) * circle.baseSize * 0.5;
          circle.currentSize = circle.baseSize + pulse * variation;
        });
      } else {
        circlesRef.current.forEach((circle) => {
          circle.currentSize = circle.baseSize;
        });
      }
    },
    [config.pulseIntensity, config.animationSpeed]
  );

  const resetAnimation = useCallback(() => {
    circlesRef.current.forEach((circle) => {
      circle.isCoinFlipping = false;
      circle.coinFlipProgress = 0;
      circle.coinFlipRotation = 0;
      circle.isShowingFront = true;
      circle.hasFlippedOnce = false;
      circle.targetRevolutions =
        Math.floor(Math.random() * config.maxRevolutions) + 1;
    });
  }, [config.maxRevolutions]);

  return {
    circlesRef,
    generateCircles,
    updateBubbles,
    resetAnimation,
  };
};
