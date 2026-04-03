import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Hero } from "@/components/layout/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { CircleDivider } from "@/components/layout/CircleDivider";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Link } from "@/components/ui-library/Link";
import plixitImg from "@/assets/images/projects/plixit.png";
import portfolioImg from "@/assets/images/projects/portfolio.png";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.sections.wrapper};
`;

function App() {
  return (
    <DefaultThemeProvider>
      <>
        <GlobalStyles />
        <ContentWrapper>
          <Hero
          shouldAnimate={true}
          showOverlayImage={true}
          name="Joakim Karlsson"
          subtitle="Tech Support → Frontend Developer"
        />
        <CircleDivider circleCount={20} circleSize={16} />
        <AboutMe
          description={[
            <>
              I'm the frontend guy behind{" "}
              <strong>Plixit</strong>, a browser-based multiplayer territory
              game. Plixit came out of a hackathon where I built the{" "}
              <strong>client-side part of the game engine</strong> Kubic Kode,
              and the game is being built on top of it. The entire stack is
              Dockerized on a self-hosted machine with monitoring.
            </>,
            <>
              Plixit is actively developed: I run playtests, collect data
              through in-game surveys and a Jira integration, and use it to
              drive the roadmap. Every change goes through{" "}
              <strong>
                AI-driven code review, security checks and quality assurance
              </strong>{" "}
              before it ships. It's live at{" "}
              <Link href="https://www.plixit.io" variant="bold" external>
                plixit.io
              </Link>
            </>,
            <>
              By day, I'm the <strong>sole technical support</strong> at
              Collegial, a Swedish learning transformation company. Between
              handling tickets, I'm shipping real frontend work: Figma designs
              get turned into <strong>type-safe components</strong>, bugs get
              squashed, and
              features get wired up to a GraphQL backend. The role is broad, but
              the direction is clear.
            </>,
            <>
              Having been on Collegial's internal audit team for a couple of
              years, I stepped up as{" "}
              <strong>internal audit lead</strong> in 2025 and delivered our ISO
              27001 internal audit to management. Control objectives, evidence
              gathering, compliance: another lens into how systems hold
              together.
            </>,
            <>
              Away from the keyboard, I'm a distance runner. Two marathons down,
              currently chasing a faster 10K. At our home in Stockholm, it's all
              about my fiancee and our cats.
            </>,
          ]}
        />

        <CircleDivider circleCount={20} circleSize={16} />
        <Projects
          projects={[
            {
              id: "1",
              title: "Plixit",
              thumbnail: plixitImg,
              description:
                "Multiplayer territory game built on a custom game engine (Kubic Kode). Real-time sync over WebSockets. Self-hosted Docker stack with Grafana/Loki monitoring, in-game playtesting pipeline, and a structured ship process.",
              techStack: ["React", "TypeScript", "Node.js", "Docker", "Grafana"],
              status: "Live \u2022 Active Development \u2022 2026",
              projectType: "Multiplayer Game",
              href: "https://www.plixit.io",
            },
            {
              id: "2",
              title: "Portfolio",
              thumbnail: portfolioImg,
              description:
                "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
              techStack: ["React", "TypeScript", "Styled Components"],
              status: "Live • 2025",
              projectType: "Portfolio",
              href: "https://www.joakimkarlsson.com",
            },
          ]}
        />
        <CircleDivider circleCount={20} circleSize={16} />
        </ContentWrapper>
        <Contact
          email="hello@joakimkarlsson.com"
          linkedinUrl="https://www.linkedin.com/in/joakim-t-karlsson/"
          githubUrl="https://github.com/relevantraccoon"
          stravaUrl="https://www.strava.com/athletes/71140950"
          cvUrl="/cv/Joakim_Karlsson_CV.pdf"
        />
      </>
    </DefaultThemeProvider>
  );
}

export default App;
