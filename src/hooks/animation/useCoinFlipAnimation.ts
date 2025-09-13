import { useCallback } from "react";
import { Circle } from "@/hooks/animation/useBubbleAnimation";

export type CoinFlipConfig = {
  enableCoinFlip: boolean;
  coinFlipDuration: number;
  coinFlipAxis: "x" | "y";
};

export const useCoinFlipAnimation = (config: CoinFlipConfig) => {
  const updateCoinFlip = useCallback(
    (circle: Circle, currentTime: number) => {
      if (!config.enableCoinFlip || !circle.isCoinFlipping) return;

      const elapsed = currentTime - circle.coinFlipStartTime;
      circle.coinFlipProgress = Math.min(elapsed / config.coinFlipDuration, 1);

      const targetRotation = circle.targetRevolutions * Math.PI * 2;

      const easedProgress = 1 - Math.pow(1 - circle.coinFlipProgress, 3);
      circle.coinFlipRotation = targetRotation * easedProgress;

      if (circle.coinFlipProgress < 1) {
        const normalizedRotation = circle.coinFlipRotation % (Math.PI * 2);
        circle.isShowingFront = Math.cos(normalizedRotation) >= 0;
      }

      if (circle.coinFlipProgress >= 1) {
        circle.isCoinFlipping = false;
        circle.hasFlippedOnce = true;
        circle.coinFlipRotation = targetRotation;
        const finalRotationNormalized = targetRotation % (Math.PI * 2);
        circle.isShowingFront = Math.cos(finalRotationNormalized) >= 0;
        circle.finalSide = circle.isShowingFront ? "front" : "back";
      }
    },
    [config.enableCoinFlip, config.coinFlipDuration]
  );

  const startCoinFlip = useCallback(
    (
      circle: Circle,
      currentTime: number,
      animationStartTime: number,
      elapsedTime: number
    ) => {
      if (
        config.enableCoinFlip &&
        !circle.isCoinFlipping &&
        !circle.hasFlippedOnce &&
        elapsedTime >= circle.coinFlipDelay &&
        animationStartTime > 0
      ) {
        circle.isCoinFlipping = true;
        circle.coinFlipStartTime = currentTime;
        circle.coinFlipProgress = 0;
        circle.coinFlipRotation = 0;
      }
    },
    [config.enableCoinFlip]
  );

  const getFlipScale = useCallback(
    (circle: Circle) => {
      let scaleX = 1;
      let scaleY = 1;

      if (circle.isCoinFlipping) {
        const flipAngle = circle.coinFlipRotation;

        if (config.coinFlipAxis === "x") {
          scaleY = Math.abs(Math.cos(flipAngle));
        } else {
          scaleX = Math.abs(Math.cos(flipAngle));
        }
      }

      return { scaleX, scaleY };
    },
    [config.coinFlipAxis]
  );

  return {
    updateCoinFlip,
    startCoinFlip,
    getFlipScale,
  };
};
