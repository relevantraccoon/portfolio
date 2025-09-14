import { useCallback } from "react";

export type GridDimensions = {
  cols: number;
  rows: number;
  bubbleSize: number;
  spacingX: number;
  spacingY: number;
  startX: number;
  startY: number;
};

export type GridPosition = {
  x: number;
  y: number;
  row: number;
  col: number;
  totalRows: number;
  totalCols: number;
  bubbleSize: number;
};

export const useResponsiveGrid = (bubbleCount: number) => {
  const calculateResponsiveDimensions = useCallback(
    (canvasWidth: number, canvasHeight: number): GridDimensions => {
      const aspectRatio = canvasWidth / canvasHeight;
      
      const baseSize = Math.min(canvasWidth, canvasHeight) * 0.04;
      const minBubbleSize = 8;
      const maxBubbleSize = 24;
      const bubbleRadius = Math.max(
        minBubbleSize,
        Math.min(maxBubbleSize, baseSize)
      );
      
      const idealSpacing = bubbleRadius * 2.5;
      
      const cols = Math.max(3, Math.floor(canvasWidth / idealSpacing));
      const rows = Math.max(2, Math.floor(canvasHeight / idealSpacing));
      
      let finalCols = cols;
      let finalRows = rows;
      
      if (cols * rows > bubbleCount) {
        if (aspectRatio > 1) {
          finalCols = Math.min(
            cols,
            Math.ceil(Math.sqrt(bubbleCount * aspectRatio))
          );
          finalRows = Math.min(rows, Math.ceil(bubbleCount / finalCols));
        } else {
          finalRows = Math.min(
            rows,
            Math.ceil(Math.sqrt(bubbleCount / aspectRatio))
          );
          finalCols = Math.min(cols, Math.ceil(bubbleCount / finalRows));
        }
      }

      const marginX = bubbleRadius * 1.1;
      const marginY = bubbleRadius * 1.1;
      
      const adjustedGridWidth = canvasWidth - marginX * 2;
      const adjustedGridHeight = canvasHeight - marginY * 2;
      
      const finalSpacingX =
        finalCols > 1 ? adjustedGridWidth / (finalCols - 1) : 0;
      const finalSpacingY =
        finalRows > 1 ? adjustedGridHeight / (finalRows - 1) : 0;

      const startX = marginX;
      const startY = marginY;

      return {
        cols: finalCols,
        rows: finalRows,
        bubbleSize: bubbleRadius,
        spacingX: finalSpacingX,
        spacingY: finalSpacingY,
        startX,
        startY,
      };
    },
    [bubbleCount]
  );

  const generateGridPosition = useCallback(
    (
      index: number,
      canvasWidth: number,
      canvasHeight: number
    ): GridPosition => {
      const dimensions = calculateResponsiveDimensions(
        canvasWidth,
        canvasHeight
      );

      const row = Math.floor(index / dimensions.cols);
      const col = index % dimensions.cols;

      const x = dimensions.startX + col * dimensions.spacingX;
      const y = dimensions.startY + row * dimensions.spacingY;

      return {
        x,
        y,
        row,
        col,
        totalRows: dimensions.rows,
        totalCols: dimensions.cols,
        bubbleSize: dimensions.bubbleSize,
      };
    },
    [calculateResponsiveDimensions]
  );

  return {
    calculateResponsiveDimensions,
    generateGridPosition,
  };
};