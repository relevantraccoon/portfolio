import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Hero } from "@/components/layout/Hero";
import { AboutMe } from "@/components/sections/AboutMe";

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
          subtitle="Reskilling Journey to Frontend Engineer"
          description="React • TypeScript • Styled Components • Storybook"
          ctaText="Get In Touch"
          onCTAClick={() => console.log("CTA clicked")}
        />
        <AboutMe
          description={[
            "Frontend developer transitioning from tech support. I understand what users need because I've solved their problems directly.",
            "Led internal audits implementing ISO 27001. I care about how my work affects the whole system, not just my piece.",
            "I value learning forever - constantly building new skills and understanding.",
          ]}
        />
      </>
    </DefaultThemeProvider>
  );
}

export default App;
