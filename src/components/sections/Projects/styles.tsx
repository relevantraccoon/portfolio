import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.palette.background};
`;

export const ProjectsContentWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) =>
    theme.layout.components.carousel.maxWidths.content};
  margin: 0 auto;
  padding: 0;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const CardStack = styled.div`
  position: relative;
  width: 70%;
  max-width: ${({ theme }) => theme.layout.components.carousel.maxWidths.stack};
  height: ${({ theme }) =>
    theme.layout.components.carousel.heights.stack.mobile};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery.from("mobileWide")} {
    width: 75%;
    height: ${({ theme }) =>
      theme.layout.components.carousel.heights.stack.mobileWide};
  }

  ${mediaQuery.from("tablet")} {
    width: 80%;
    height: ${({ theme }) =>
      theme.layout.components.carousel.heights.stack.tablet};
  }

  ${mediaQuery.from("desktop")} {
    width: 70%;
    height: ${({ theme }) =>
      theme.layout.components.carousel.heights.stack.desktop};
  }
`;

export const CarouselCard = styled.div<{
  $position: "left" | "active" | "right" | "hidden";
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ $position, theme }) =>
    $position === "active"
      ? theme.zIndex.carousel.active
      : $position === "left" || $position === "right"
      ? theme.zIndex.carousel.side
      : theme.zIndex.carousel.hidden};
  opacity: ${({ $position, theme }) =>
    $position === "hidden"
      ? theme.layout.components.carousel.opacity.hidden
      : $position === "left" || $position === "right"
      ? theme.layout.components.carousel.opacity.side
      : theme.layout.components.carousel.opacity.active};
  transform: ${({ $position }) =>
    $position === "left"
      ? "translateX(-30%) scale(0.8)"
      : $position === "active"
      ? "translateX(0%) scale(1)"
      : $position === "right"
      ? "translateX(30%) scale(0.8)"
      : "translateX(200%) scale(0.6)"};
  transition: all
    var(
      --carousel-duration,
      ${({ theme }) => theme.transitions.durations.snappy}
    )
    var(--carousel-easing, ${({ theme }) => theme.transitions.easings.snappy});
  pointer-events: ${({ $position }) =>
    $position === "active" ? "auto" : "none"};
`;

export const MobileCounter = styled.div`
  width: 100%;

  @media (pointer: coarse) and (min-width: 600px) {
    display: none;
  }
`;

export const MobileCarouselContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (pointer: coarse) {
    display: flex;
  }
`;

export const MobileScrollTrack = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg} 9%;
  touch-action: pan-x pan-y;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (pointer: coarse) and (min-width: 600px) {
    padding: ${({ theme }) => theme.spacing.sm} 4%;
  }
`;

export const MobileCardSlide = styled.div<{ $active: boolean; $side?: "left" | "right" }>`
  scroll-snap-align: center;
  flex: 0 0 82%;
  min-width: 0;

  @media (pointer: coarse) and (min-width: 600px) {
    flex: 0 0 92%;
  }
  transform: ${({ $active }) => ($active ? "translateY(0)" : "translateY(4px)")};
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  filter: ${({ $active }) => ($active ? "none" : "brightness(0.7)")};
  transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease;

  @media (pointer: coarse) and (min-width: 600px) {
    opacity: ${({ $active }) => ($active ? 1 : 0.9)};
    filter: ${({ $active }) => ($active ? "none" : "brightness(0.9)")};
  }

  ${({ $active, $side }) => {
    if ($active || !$side) return "";
    const direction = $side === "left" ? "to left" : "to right";
    return `
      -webkit-mask-image: linear-gradient(${direction}, transparent 0%, black 80%);
      mask-image: linear-gradient(${direction}, transparent 0%, black 80%);
    `;
  }}
`;

export const DesktopCardWrapper = styled.div`
  display: block;

  @media (pointer: coarse) {
    display: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.carousel.navigation};

  ${mediaQuery.from("mobileWide")} {
    margin-top: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xl};
  }

  ${mediaQuery.from("tablet")} {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }

  ${mediaQuery.from("desktop")} {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;
