import React, { useState } from "react";
import styled from "styled-components";

export type CarouselProps = {
  children: React.ReactNode[];
  itemsPerView?: number;
  gap?: string;
  showArrows?: boolean;
  className?: string;
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled.div<{ $translateX: number; $gap: string }>`
  display: flex;
  gap: ${({ $gap }) => $gap};
  transform: translateX(${({ $translateX }) => $translateX}px);
  transition: ${({ theme }) => theme.transitions.transformSnappy};
`;

const CarouselItem = styled.div<{ $itemWidth: string }>`
  flex: 0 0 ${({ $itemWidth }) => $itemWidth};
`;

const ArrowButton = styled.button`
  background: ${({ theme }) => theme.colors.palette.surface};
  border: 2px solid ${({ theme }) => theme.colors.palette.secondary};
  color: ${({ theme }) => theme.colors.palette.onSurface};
  width: ${({ theme }) => theme.controls.button.medium.width};
  height: ${({ theme }) => theme.controls.button.medium.height};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.palette.secondary};
    color: ${({ theme }) => theme.colors.palette.onSecondary};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(ArrowButton)``;

const NextButton = styled(ArrowButton)``;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: 20px;
`;


export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 1,
  gap = "2rem",
  showArrows = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const itemWidth = `calc((100% - ${gap} * ${itemsPerView - 1}) / ${itemsPerView})`;

  const getTranslateX = () => {
    const containerWidth = 100;
    const gapWidth = parseFloat(gap) * currentIndex;
    return -(currentIndex * (containerWidth / itemsPerView)) - gapWidth;
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };


  return (
    <div className={className}>
      <CarouselContainer>
        <CarouselTrack $translateX={getTranslateX()} $gap={gap}>
          {children.map((child, index) => (
            <CarouselItem key={index} $itemWidth={itemWidth}>
              {child}
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>

      {showArrows && (
        <DotsContainer>
          <PrevButton
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ‹
          </PrevButton>
          <NextButton
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            ›
          </NextButton>
        </DotsContainer>
      )}
    </div>
  );
};