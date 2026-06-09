import Hero from "./components/landing/Hero";
import ProblemSolution from "./components/landing/ProblemSolution";
import AiFeatures from "./components/landing/AiFeatures";
import ProductRoadmap from "./components/landing/ProductRoadmap";
import DayInLife from "./components/landing/DayInLife";
import Benefits from "./components/landing/Benefits";
import EarlyAccessBenefits from "./components/landing/EarlyAccessBenefits";
import FounderNote from "./components/landing/FounderNote";
import Waitlist from "./components/landing/Waitlist";
import FAQ from "./components/landing/FAQ";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-white overflow-x-hidden">
      {/* <Header/> */}
      <Hero />
      <ProblemSolution />
      <AiFeatures />
      <ProductRoadmap />
      <DayInLife />
      <Benefits />
      <EarlyAccessBenefits />
      <FounderNote />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}