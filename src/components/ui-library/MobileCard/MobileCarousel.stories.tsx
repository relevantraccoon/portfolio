import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { MobileCard } from "@/components/ui-library/MobileCard/MobileCard";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { NavButton } from "@/components/ui-library/Button";
import plixitImg from "@/assets/images/projects/plixit.png";
import portfolioImg from "@/assets/images/projects/portfolio.png";

const cards = [
  {
    title: "Plixit",
    status: "Live \u2022 Active Development \u2022 2026",
    description:
      "Multiplayer territory game built on a custom game engine (Kubic Kode). Real-time sync over WebSockets. Self-hosted Docker stack with Grafana/Loki monitoring.",
    projectType: "Multiplayer Game",
    techStack: ["React", "TypeScript", "Node.js", "Docker", "Grafana"],
    thumbnail: plixitImg,
  },
  {
    title: "Portfolio",
    status: "Live \u2022 2025",
    description:
      "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
    projectType: "Portfolio",
    techStack: ["React", "TypeScript", "Styled Components"],
    thumbnail: portfolioImg,
  },
  {
    title: "Placeholder",
    status: "Coming Soon \u2022 2026",
    description: "A third card to test scroll behavior with more items in the carousel.",
    projectType: "Web App",
    techStack: ["React", "TypeScript"],
    thumbnail: portfolioImg,
  },
];

const Phone = styled.div`
  width: 375px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.palette.background};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.h2`
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.palette.primary};
`;

const Desc = styled.p`
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.palette.onBackground};
  opacity: 0.7;
`;

const Counter = styled.span`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.palette.onBackground};
`;

// ─── 1. Full width, no peek ──────────────────────────────────────
const Track1 = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;
const Slide1 = styled.div`
  scroll-snap-align: start;
  flex: 0 0 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
`;

// ─── 2. 85% width, center snap, side peek ────────────────────────
const Track2 = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 7.5%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide2 = styled.div`
  scroll-snap-align: center;
  flex: 0 0 85%;
`;

// ─── 3. 80% width, start snap, larger peek ───────────────────────
const Track3 = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 10%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide3 = styled.div`
  scroll-snap-align: start;
  flex: 0 0 80%;
`;

// ─── 4. 90% width, minimal peek ─────────────────────────────────
const Track4 = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 5%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide4 = styled.div`
  scroll-snap-align: center;
  flex: 0 0 90%;
`;

// ─── 5. 75% width, big peek, center snap ────────────────────────
const Track5 = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 12.5%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide5 = styled.div`
  scroll-snap-align: center;
  flex: 0 0 75%;
`;

// ─── 6. Full width, mandatory snap, no gap ──────────────────────
const Track6 = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;
const Slide6 = styled.div`
  scroll-snap-align: center;
  flex: 0 0 92%;
  margin: 0 4%;
`;

// ─── 7. 85%, proximity snap (loose) ─────────────────────────────
const Track7 = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 7.5%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide7 = styled.div`
  scroll-snap-align: center;
  flex: 0 0 85%;
`;

// ─── 8. 85% with scale on inactive ──────────────────────────────
const Track8 = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 4%;
  align-items: center;
  &::-webkit-scrollbar { display: none; }
`;
const Slide8 = styled.div<{ $active: boolean }>`
  scroll-snap-align: center;
  flex: 0 0 92%;
  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0.92)")};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

// ─── 9. 85% with subtle rotation on inactive ────────────────────
const Track9 = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 7.5%;
  align-items: center;
  perspective: 800px;
  &::-webkit-scrollbar { display: none; }
`;
const Slide9 = styled.div<{ $active: boolean }>`
  scroll-snap-align: center;
  flex: 0 0 85%;
  transform: ${({ $active }) => ($active ? "rotateY(0)" : "rotateY(-3deg) scale(0.95)")};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: transform 0.35s ease, opacity 0.35s ease;
`;

// ─── 10. Stacked feel: 88%, tight gap, shadow lift on active ────
const Track10 = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 6%;
  &::-webkit-scrollbar { display: none; }
`;
const Slide10 = styled.div<{ $active: boolean }>`
  scroll-snap-align: center;
  flex: 0 0 88%;
  transform: ${({ $active }) => ($active ? "translateY(0)" : "translateY(4px)")};
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  filter: ${({ $active }) => ($active ? "none" : "brightness(0.7)")};
  transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
`;

// ─── 11. Desktop-style stacked carousel ─────────────────────────
// Active card full width (with gutters), left/right cards peek from
// behind, scaled down and shifted down, like the desktop carousel.
const StackedContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
`;

const StackedTrack = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const StackedSlide = styled.div<{
  $position: "left" | "active" | "right" | "hidden";
}>`
  ${({ $position }) => $position !== "active" && "position: absolute; top: 0; left: 0; width: 100%; height: 100%;"}
  ${({ $position }) => $position === "active" && "position: relative;"}
  z-index: ${({ $position }) =>
    $position === "active" ? 3 : $position === "hidden" ? 0 : 1};
  opacity: ${({ $position }) =>
    $position === "hidden" ? 0 : $position === "active" ? 1 : 0.5};
  transform: ${({ $position }) =>
    $position === "left"
      ? "translateX(-15%) translateY(8px) scale(0.9)"
      : $position === "right"
      ? "translateX(15%) translateY(8px) scale(0.9)"
      : $position === "active"
      ? "translateX(0) scale(1)"
      : "translateX(100%) scale(0.8)"};
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  pointer-events: ${({ $position }) =>
    $position === "active" ? "auto" : "none"};
`;

// ─── 12. Infinite touch carousel with snap ──────────────────────
const InfiniteTrack = styled.div`
  position: relative;
  width: 100%;
  padding: 0 4%;
  box-sizing: border-box;
  touch-action: pan-y;
  overflow: visible;
`;

const InfiniteSlide = styled.div<{
  $offset: number;
  $dragging: boolean;
}>`
  position: absolute;
  top: 0;
  left: 4%;
  width: 92%;
  transform-origin: top center;
  transform: translateX(${({ $offset }) => $offset * 100}%)
    scale(${({ $offset }) => Math.max(1 - Math.abs($offset) * 0.08, 0.85)});
  opacity: ${({ $offset }) => Math.max(1 - Math.abs($offset) * 0.4, 0)};
  transition: ${({ $dragging }) =>
    $dragging ? "none" : "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)"};
  z-index: ${({ $offset }) => 10 - Math.round(Math.abs($offset) * 10)};
  pointer-events: ${({ $offset }) => (Math.abs($offset) < 0.01 ? "auto" : "none")};
`;

// ─── Helpers ─────────────────────────────────────────────────────

const useScrollIndex = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el || !el.children.length) return;
    const child = el.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(el).gap) || 0;
    const cardWidth = child.offsetWidth + gap;
    const i = Math.round(el.scrollLeft / cardWidth);
    setIndex(Math.min(i, cards.length - 1));
  }, []);

  return { index, ref, onScroll };
};

type VariantConfig = {
  Track: typeof Track1;
  Slide: typeof Slide1 | typeof Slide8;
  hasActive: boolean;
};

const variants: { label: string; desc: string; config: VariantConfig | null }[] = [
  { label: "1. Full width", desc: "No peek, 100% cards, start snap", config: { Track: Track1, Slide: Slide1, hasActive: false } },
  { label: "2. 85% center peek", desc: "12px gap, 7.5% padding, center snap", config: { Track: Track2, Slide: Slide2, hasActive: false } },
  { label: "3. 80% start peek", desc: "16px gap, 10% padding, start snap. Larger peek.", config: { Track: Track3, Slide: Slide3, hasActive: false } },
  { label: "4. 90% minimal peek", desc: "8px gap, 5% padding. Subtle hint of next card.", config: { Track: Track4, Slide: Slide4, hasActive: false } },
  { label: "5. 75% big peek", desc: "16px gap, 12.5% padding. Next card clearly visible.", config: { Track: Track5, Slide: Slide5, hasActive: false } },
  { label: "6. 92% stop-always", desc: "No gap, margin-based. scroll-snap-stop: always.", config: { Track: Track6, Slide: Slide6, hasActive: false } },
  { label: "7. Proximity snap", desc: "85% with proximity snap. Looser, more free-scroll feel.", config: { Track: Track7, Slide: Slide7, hasActive: false } },
  { label: "8. Scale inactive", desc: "85% center. Inactive cards scale down + fade.", config: { Track: Track8, Slide: Slide8, hasActive: true } },
  { label: "9. Rotate inactive", desc: "85% center. Inactive cards rotate + fade (3D).", config: { Track: Track9, Slide: Slide9, hasActive: true } },
  { label: "10. Stacked feel", desc: "88%. Inactive cards shift down + dim.", config: { Track: Track10, Slide: Slide10, hasActive: true } },
  { label: "11. Desktop-style stack", desc: "Full width active card, left/right peek behind + down. Swipe/button to navigate.", config: null },
  { label: "12. Infinite snap", desc: "Infinite loop (1,2,3,1...). Drag to move, snaps into place. Scale + fade on sides. Mouse + touch.", config: null },
];

const NavRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const MeasureContainer = styled.div`
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  width: 320px;
`;

const InfiniteCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const touchStartX = useRef(0);
  const trackWidth = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const SNAP_THRESHOLD = 0.15; // 15% of track width to trigger next/prev

  const getOffset = (i: number): number => {
    let diff = i - activeIdx;
    // Wrap around for infinite feel
    if (diff > cards.length / 2) diff -= cards.length;
    if (diff < -cards.length / 2) diff += cards.length;
    // Add drag offset as fraction of card width
    if (trackWidth.current > 0) {
      diff += dragX / (trackWidth.current * 0.92);
    }
    return diff;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    if (trackRef.current) trackWidth.current = trackRef.current.offsetWidth;
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    setDragX(delta);
  };

  const handleTouchEnd = () => {
    const fraction = trackWidth.current > 0 ? dragX / trackWidth.current : 0;

    setDragging(false);
    setDragX(0);

    if (fraction > SNAP_THRESHOLD) {
      setActiveIdx((i) => (i + 1) % cards.length);
    } else if (fraction < -SNAP_THRESHOLD) {
      setActiveIdx((i) => (i - 1 + cards.length) % cards.length);
    }
  };

  // Also support mouse for desktop testing
  const mouseDown = useRef(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    if (trackRef.current) trackWidth.current = trackRef.current.offsetWidth;
    setDragging(true);
    mouseDown.current = true;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseDown.current) return;
    const delta = e.clientX - touchStartX.current;
    setDragX(delta);
  };
  const handleMouseUp = () => {
    if (!mouseDown.current) return;
    mouseDown.current = false;
    handleTouchEnd();
  };

  return (
    <>
      <Counter>{activeIdx + 1} / {cards.length}</Counter>
      <InfiniteTrack
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {cards.map((c, i) => {
          const offset = getOffset(i);
          if (Math.abs(offset) > 1.5) return null;
          return (
            <InfiniteSlide key={c.title + i} $offset={offset} $dragging={dragging}>
              <MobileCard {...c} />
            </InfiniteSlide>
          );
        })}
        {/* Invisible spacer to give the track height */}
        <div style={{ visibility: "hidden" }}>
          <MobileCard {...cards[activeIdx]} />
        </div>
      </InfiniteTrack>
    </>
  );
};

const StackedCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const touchStartX = useRef(0);
  const measured = useRef(false);

  const measureCallback = useCallback((el: HTMLDivElement | null) => {
    if (!el || measured.current) return;
    measured.current = true;
    let tallest = 0;
    Array.from(el.children).forEach((child) => {
      tallest = Math.max(tallest, (child as HTMLElement).offsetHeight);
    });
    if (tallest > 0) setMaxHeight(tallest);
  }, []);

  const getPosition = (i: number): "left" | "active" | "right" | "hidden" => {
    const left = (activeIdx - 1 + cards.length) % cards.length;
    const right = (activeIdx + 1) % cards.length;
    if (i === activeIdx) return "active";
    if (i === left) return "left";
    if (i === right) return "right";
    return "hidden";
  };

  return (
    <>
      {!maxHeight && (
        <MeasureContainer ref={measureCallback}>
          {cards.map((c, i) => (
            <div key={c.title + i}>
              <MobileCard {...c} />
            </div>
          ))}
        </MeasureContainer>
      )}
      <Counter>{activeIdx + 1} / {cards.length}</Counter>
      <StackedContainer
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(delta) < 50) return;
          if (delta > 0) setActiveIdx((i) => (i + 1) % cards.length);
          else setActiveIdx((i) => (i - 1 + cards.length) % cards.length);
        }}
      >
        <StackedTrack style={{ height: maxHeight || "auto" }}>
          {cards.map((c, i) => (
            <StackedSlide key={c.title + i} $position={getPosition(i)}>
              <MobileCard {...c} />
            </StackedSlide>
          ))}
        </StackedTrack>
      </StackedContainer>
    </>
  );
};

const VariantCarousel = () => {
  const [variantIdx, setVariantIdx] = useState(0);
  const v = variants[variantIdx];
  const { index, ref, onScroll } = useScrollIndex();
  const isCustom = v.config === null;

  return (
    <Phone>
      <Label>{v.label}</Label>
      <Desc>{v.desc}</Desc>
      {isCustom ? (
        v.label.includes("12") ? <InfiniteCarousel /> : <StackedCarousel />
      ) : (
        <>
          <Counter>{index + 1} / {cards.length}</Counter>
          {(() => {
            const { Track, Slide, hasActive } = v.config!;
            return (
              <Track ref={ref} onScroll={onScroll}>
                {cards.map((c, i) => {
                  const slideProps = hasActive ? { $active: i === index } : {};
                  return (
                    // @ts-expect-error -- dynamic $active prop
                    <Slide key={c.title + i} {...slideProps}>
                      <MobileCard {...c} />
                    </Slide>
                  );
                })}
              </Track>
            );
          })()}
        </>
      )}
      <Counter>Variant {variantIdx + 1} / {variants.length}</Counter>
      <NavRow>
        <NavButton
          direction="left"
          onClick={() => setVariantIdx((i) => (i - 1 + variants.length) % variants.length)}
        />
        <NavButton
          direction="right"
          onClick={() => setVariantIdx((i) => (i + 1) % variants.length)}
        />
      </NavRow>
    </Phone>
  );
};

const meta: Meta = {
  title: "UI Library/MobileCard/Carousel Experiments",
  parameters: {
    layout: "centered",
    viewport: { defaultViewport: "mobile1" },
  },
};

export default meta;
type Story = StoryObj;

export const Experiments: Story = {
  render: () => (
    <DefaultThemeProvider>
      <VariantCarousel />
    </DefaultThemeProvider>
  ),
};
