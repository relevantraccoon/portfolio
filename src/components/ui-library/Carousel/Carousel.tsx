import React, { useState } from "react";
import styled from "styled-components";

export type CarouselProps = {
  children: React.ReactNode[];
  itemsPerView?: number;
  gap?: string;
  showDots?: boolean;
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
  transition: ${({ theme }) => theme.transitions.transformQuick};
`;

const CarouselItem = styled.div<{ $itemWidth: string }>`
  flex: 0 0 ${({ $itemWidth }) => $itemWidth};
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.palette.surface};
  border: 2px solid ${({ theme }) => theme.colors.palette.secondary};
  color: ${({ theme }) => theme.colors.palette.onSurface};
  width: ${({ theme }) => theme.controls.button.width};
  height: ${({ theme }) => theme.controls.button.height};
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.palette.secondary};
    color: ${({ theme }) => theme.colors.palette.onSecondary};
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%);
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: 20px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ theme }) => theme.controls.dot.width};
  height: ${({ theme }) => theme.controls.dot.height};
  border-radius: 50%;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.palette.secondary : theme.colors.palette.outline};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.palette.secondary};
    transform: scale(1.2);
  }
`;

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 1,
  gap = "2rem",
  showDots = true,
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

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  return (
    <div className={className}>
      <CarouselContainer>
        {showArrows && (
          <>
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
          </>
        )}
        
        <CarouselTrack $translateX={getTranslateX()} $gap={gap}>
          {children.map((child, index) => (
            <CarouselItem key={index} $itemWidth={itemWidth}>
              {child}
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>

      {showDots && totalItems > itemsPerView && (
        <DotsContainer>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <Dot
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      )}
    </div>
  );
};