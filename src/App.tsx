import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Hero } from "@/components/layout/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { CircleDivider } from "@/components/layout/CircleDivider";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <DefaultThemeProvider>
      <>
        <GlobalStyles />
        <Hero
          shouldAnimate={true}
          showOverlayImage={true}
          svgName="Joakim Karlsson"
          svgSubtitle="Frontend Developer"
          title="Tech Support → Frontend Developer"
          subtitle="I've seen what breaks, now I build what works"
          ctaText="Get In Touch"
          onCTAClick={() => console.log("CTA clicked")}
        />

        <CircleDivider circleCount={20} circleSize={16} />

        <AboutMe
          description={[
            "I'm a frontend developer who understands users because I've solved their problems directly in tech support. Good interfaces work for real people under pressure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "As an internal audit team leader, I learned to think like an owner. I approach development the same way: understanding how my code serves both users and business objectives. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "I build with TypeScript, React, and Styled Components. Whether debugging workflows or grinding through long runs, I solve problems systematically. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            "I value learning forever - constantly building new skills and understanding.",
          ]}
        />

        <CircleDivider circleCount={20} circleSize={16} />

        <Projects
          projects={[
            {
              id: "1",
              title: "Portfolio",
              thumbnail: "/projectCardsFinal/portfolio.png",
              description:
                "Responsive portfolio site with animated canvas background, dynamic carousel, and component-driven architecture.",
              techStack: ["React", "TypeScript", "Styled Components"],
              status: "Status: Live • 2025",
              projectType: "Portfolio",
              href: "https://github.com/relevantraccoon/portfoliov2",
            },
          ]}
        />

        <CircleDivider circleCount={20} circleSize={16} />

        <Contact
          email="hello@joakimkarlsson.com"
          linkedinUrl="https://linkedin.com/in/joakim-karlsson"
          githubUrl="https://github.com/relevantraccoon"
          stravaUrl="https://strava.com/athletes/joakim-karlsson"
          cvUrl="/cv/Joakim_Karlsson_CV.pdf"
        />
      </>
    </DefaultThemeProvider>
  );
}

export default App;
