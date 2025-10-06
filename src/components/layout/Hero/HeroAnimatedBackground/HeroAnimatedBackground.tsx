import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { useResponsiveGrid } from "@/hooks/animation/useResponsiveGrid";
import {
  useBubbleAnimation,
  type BubbleAnimationConfig,
} from "@/hooks/animation/useBubbleAnimation";
import {
  useCoinFlipAnimation,
  type CoinFlipConfig,
} from "@/hooks/animation/useCoinFlipAnimation";
import { useCanvas } from "@/hooks/canvas/useCanvas";
import { useAnimationLoop } from "@/hooks/animation/useAnimationLoop";
import {
  Container,
  CirclesCanvas,
  ImageCanvas,
} from "@/components/layout/Hero/HeroAnimatedBackground/styles";

export type HeroAnimatedBackgroundProps = {
  shouldAnimate?: boolean;
  profileImageUrl?: string;
  colorOpacity?: number;
  bubbleCount?: number;
  coinFlipVelocity?: number;
  coinFlipDuration?: number;
  flipWaveSpeed?: number;
  flipTimingRandomness?: number;
  maxRevolutions?: number;
  pulseSpeed?: number;
  pulseIntensity?: number;
  animationSpeed?: number;
  enableCoinFlip?: boolean;
  coinFlipAxis?: "x" | "y";
};

const defaultConfig = {
  bubbleCount: 147,
  pulseSpeed: 1,
  pulseIntensity: 0,
  animationSpeed: 1,
  coinFlipVelocity: 6,
  coinFlipDuration: 1300,
  flipWaveSpeed: 2.2,
  flipTimingRandomness: 10,
  maxRevolutions: 4,
  enableCoinFlip: true,
  coinFlipAxis: "x" as const,
  colorOpacity: 100,
};

export const HeroAnimatedBackground: React.FC<HeroAnimatedBackgroundProps> = ({
  shouldAnimate = false,
  profileImageUrl,
  colorOpacity,
  bubbleCount,
  coinFlipVelocity,
  coinFlipDuration,
  flipWaveSpeed,
  flipTimingRandomness,
  maxRevolutions,
  pulseSpeed,
  pulseIntensity,
  animationSpeed,
  enableCoinFlip,
  coinFlipAxis,
}) => {
  const config = useMemo(
    () => ({
      ...defaultConfig,
      ...(bubbleCount !== undefined && { bubbleCount }),
      ...(coinFlipVelocity !== undefined && { coinFlipVelocity }),
      ...(coinFlipDuration !== undefined && { coinFlipDuration }),
      ...(flipWaveSpeed !== undefined && { flipWaveSpeed }),
      ...(flipTimingRandomness !== undefined && { flipTimingRandomness }),
      ...(maxRevolutions !== undefined && { maxRevolutions }),
      ...(pulseSpeed !== undefined && { pulseSpeed }),
      ...(pulseIntensity !== undefined && { pulseIntensity }),
      ...(animationSpeed !== undefined && { animationSpeed }),
      ...(enableCoinFlip !== undefined && { enableCoinFlip }),
      ...(coinFlipAxis !== undefined && { coinFlipAxis }),
      ...(colorOpacity !== undefined && { colorOpacity }),
    }),
    [
      bubbleCount,
      coinFlipVelocity,
      coinFlipDuration,
      flipWaveSpeed,
      flipTimingRandomness,
      maxRevolutions,
      pulseSpeed,
      pulseIntensity,
      animationSpeed,
      enableCoinFlip,
      coinFlipAxis,
      colorOpacity,
    ]
  );

  const bubbleAnimationConfig: BubbleAnimationConfig = {
    bubbleCount: config.bubbleCount,
    pulseSpeed: config.pulseSpeed,
    pulseIntensity: config.pulseIntensity,
    coinFlipVelocity: config.coinFlipVelocity,
    maxRevolutions: config.maxRevolutions,
    flipWaveSpeed: config.flipWaveSpeed,
    flipTimingRandomness: config.flipTimingRandomness,
    animationSpeed: config.animationSpeed,
  };

  const coinFlipConfig: CoinFlipConfig = {
    enableCoinFlip: config.enableCoinFlip,
    coinFlipDuration: config.coinFlipDuration,
    coinFlipAxis: config.coinFlipAxis,
  };

  const imageRef = useRef<HTMLImageElement>(null);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);

  const extractImageColors = useCallback(
    (image: HTMLImageElement) => {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return [];

      tempCanvas.width = 32;
      tempCanvas.height = 32;
      tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height);

      const imageData = tempCtx.getImageData(
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );
      const colors = new Set<string>();

      for (let i = 0; i < imageData.data.length; i += 16) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];

        if (a > 50) {
          const opacity = config.colorOpacity / 100;
          const color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          colors.add(color);
        }
      }

      const palette = Array.from(colors);

      return palette;
    },
    [config.colorOpacity]
  );

  const { generateGridPosition } = useResponsiveGrid(config.bubbleCount);
  const { circlesCanvasRef, imageCanvasRef, resizeCanvases, getCanvasContext } =
    useCanvas();

  const {
    circlesRef,
    generateCircles,
    updateBubbles,
    resetAnimation: resetBubbleAnimation,
  } = useBubbleAnimation(
    bubbleAnimationConfig,
    generateGridPosition,
    extractedColors
  );

  const { updateCoinFlip, startCoinFlip, getFlipScale } =
    useCoinFlipAnimation(coinFlipConfig);

  const drawCircles = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      currentTime: number,
      animationStartTime: number
    ) => {
      const canvas = ctx.canvas;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsedTime = currentTime - animationStartTime;

      updateBubbles(currentTime);

      circlesRef.current.forEach((circle) => {
        startCoinFlip(circle, currentTime, animationStartTime, elapsedTime);
        updateCoinFlip(circle, currentTime);

        ctx.save();
        ctx.translate(circle.x, circle.y);

        const { scaleX, scaleY } = getFlipScale(circle);
        const currentColor = circle.isShowingFront
          ? circle.frontColor
          : circle.backColor;

        ctx.scale(scaleX, scaleY);

        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, circle.currentSize), 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        ctx.fill();

        ctx.restore();
      });
    },
    [circlesRef, updateBubbles, startCoinFlip, updateCoinFlip, getFlipScale]
  );

  const onAnimate = useCallback(
    (currentTime: number, animationStartTime: number) => {
      const circlesCtx = getCanvasContext(circlesCanvasRef);
      if (circlesCtx && circlesRef.current.length > 0) {
        drawCircles(circlesCtx, currentTime, animationStartTime);
      }
    },
    [getCanvasContext, circlesCanvasRef, circlesRef, drawCircles]
  );

  const { resetAnimation: resetAnimationLoop } = useAnimationLoop(
    shouldAnimate,
    onAnimate
  );

  const initializeCircles = useCallback(() => {
    if (!circlesCanvasRef.current) return;
    const canvas = circlesCanvasRef.current;
    circlesRef.current = generateCircles(canvas.width, canvas.height);
  }, [generateCircles, circlesRef, circlesCanvasRef]);

  const handleResize = useCallback(() => {
    const dimensions = resizeCanvases();
    if (dimensions && extractedColors.length > 0 && circlesCanvasRef.current) {
      const canvas = circlesCanvasRef.current;
      circlesRef.current = generateCircles(canvas.width, canvas.height);
    }
  }, [
    resizeCanvases,
    extractedColors,
    circlesCanvasRef,
    generateCircles,
    circlesRef,
  ]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    resetAnimationLoop();
    resetBubbleAnimation();
  }, [shouldAnimate, resetAnimationLoop, resetBubbleAnimation]);

  useEffect(() => {
    if (profileImageUrl && imageRef.current) {
      const img = imageRef.current;
      const handleImageLoad = () => {
        const colors = extractImageColors(img);
        if (colors.length > 0) {
          setExtractedColors(colors);
        }
      };

      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        return () => img.removeEventListener("load", handleImageLoad);
      }
    }
  }, [profileImageUrl, extractImageColors]);

  useEffect(() => {
    if (extractedColors.length > 0) {
      initializeCircles();
    }
  }, [extractedColors, initializeCircles]);

  return (
    <Container>
      <CirclesCanvas ref={circlesCanvasRef} />
      <ImageCanvas ref={imageCanvasRef} />
      {profileImageUrl && (
        <img
          ref={imageRef}
          src={profileImageUrl}
          alt="Hidden image for color extraction"
          style={{ display: "none" }}
          crossOrigin="anonymous"
        />
      )}
    </Container>
  );
};
