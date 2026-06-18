import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import Navbar from "./components/Navbar";
import LearningOutcomes from "./components/ LearningOutcomes";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <LearningOutcomes />
      <WorkshopDetails />
      <FAQ />
      
    </>
  );
}

export default App;