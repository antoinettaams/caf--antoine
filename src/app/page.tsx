import CafeSection from "./components/CafeSection";
import Hero from "./components/Hero";
import StaticMenuShowcase from "./components/StaticMenuShowcase";
import SaveursSection from "./components/SaveursSection";
import WelcomeAntoine from "./components/WelcomeSection";
import AboutCafeAntoine from "./components/AboutCafeAntoine";

export default function Page() {
  return (
    <>
      <Hero />
      <StaticMenuShowcase/>
      <SaveursSection/>
      <CafeSection/>
      <WelcomeAntoine/>
      <AboutCafeAntoine/>
    </>
  );
}
