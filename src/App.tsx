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
              title: "Portfolio Website",
              thumbnail: "/projectCardDemo/project-card-portfolio-img.png",
              description:
                "Modern animated portfolio website built with React, TypeScript, and Styled Components featuring responsive design and smooth animations",
              techStack: ["React", "TypeScript", "Styled Components"],
              status: "Status: Live • 2025",
              projectType: "Portfolio",
              href: "https://github.com/relevantraccoon/portfoliov2",
            },
            {
              id: "2",
              title: "Project Two",
              thumbnail: "/projectCardDemo/image2.png",
              description:
                "Modern web application built with React and TypeScript featuring responsive design and real-time updates",
              techStack: ["React", "TypeScript"],
              status: "Completed • 2023",
              projectType: "Web App",
              href: "https://project-two-demo.vercel.app",
            },
            {
              id: "3",
              title: "Project Three",
              thumbnail: "/projectCardDemo/image3.png",
              description:
                "RESTful API backend with Vue.js frontend providing seamless data integration and user experience",
              techStack: ["Vue", "Node.js"],
              status: "In Development • 2024",
              projectType: "API",
              href: "https://api.project-three.com",
            },
            {
              id: "4",
              title: "Project Four",
              thumbnail: "/projectCardDemo/image.png",
              description:
                "Cross-platform mobile application with native performance and intuitive user interface design",
              techStack: ["React Native", "Expo"],
              status: "Prototype • 2023",
              projectType: "Mobile App",
              href: "https://github.com/example/project-four",
            },
            {
              id: "5",
              title: "Project Five",
              thumbnail: "/projectCardDemo/image2.png",
              description:
                "AI-powered application with real-time data processing and machine learning integration for intelligent insights",
              techStack: ["Python", "TensorFlow"],
              status: "Live • 2024",
              projectType: "AI Application",
              href: "https://project-five-ai.netlify.app",
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
