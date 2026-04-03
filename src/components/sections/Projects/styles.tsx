import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

export const MobileCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  touch-action: pan-y;

  ${mediaQuery.from("tablet")} {
    display: none;
  }
`;

export const MobileCardWrapper = styled.div<{
  $active: boolean;
  $direction: "left" | "right";
}>`
  display: ${({ $active }) => ($active ? "block" : "none")};
  width: 100%;

  ${({ $active, $direction }) =>
    $active &&
    `
    animation: mobileCardSlide 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) both;

    @keyframes mobileCardSlide {
      from {
        opacity: 0;
        transform: translateX(${$direction === "right" ? "40px" : "-40px"});
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
`;

export const MobileNavContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  & > button {
    display: none;
    flex-shrink: 0;
    margin-top: 70px;

    @media (hover: hover) and (pointer: fine) {
      display: flex;
    }
  }
`;

export const DesktopCardWrapper = styled.div`
  display: none;

  ${mediaQuery.from("tablet")} {
    display: block;
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
