import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Hero } from "@/components/layout/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { CircleDivider } from "@/components/layout/CircleDivider";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import portfolioImg from "@/assets/images/projects/portfolio.png";

function App() {
  return (
    <DefaultThemeProvider>
      <>
        <GlobalStyles />
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
              I'm the <strong>sole</strong> technical support at a startup, and
              I'm working on{" "}
              <strong>crossing over to the development side</strong>. Between
              handling user tickets,{" "}
              <strong>I'm shipping real frontend features</strong> - turning
              Figma designs into type-safe React components and wiring them up
              to a GraphQL backend.
            </>,
            <>
              Me working at <strong>Collegial</strong>, a company driving
              transformation through learning, isn't a coincidence. I thrive on
              acquiring new knowledge - and I'm selective:{" "}
              <strong>
                learn the right things, and then apply them for maximum impact
              </strong>
              .
            </>,
            <>
              Having been embedded in a product & tech team for years, I'm
              completely at home with the agile rhythm - sprints, standups,
              retros, and the controlled chaos that comes with the territory.
            </>,
            <>
              This year, I've been entrusted with stepping up as{" "}
              <strong>internal audit lead for our ISO 27001 ISMS</strong>.
              Having been on the internal audit team for a couple of years, I
              know my way around control objectives, evidence gathering, and
              compliance - another lens into how companies scale.
            </>,
            <>
              Away from the keyboard, I'm passionate about long distance running
              (2-time marathon finisher, working on 10k speed). At home, it's all
              about my fiancée and our cats.
            </>,
          ]}
        />

        <CircleDivider circleCount={20} circleSize={16} />
        <Projects
          projects={[
            {
              id: "1",
              title: "Portfolio",
              thumbnail: portfolioImg,
              description:
                "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
              techStack: ["React", "TypeScript", "Styled Components"],
              status: "Live • 2025",
              projectType: "Portfolio",
              href: "https://github.com/relevantraccoon/portfolio",
            },
          ]}
        />
        <CircleDivider circleCount={20} circleSize={16} />
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
