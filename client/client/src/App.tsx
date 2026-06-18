import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import Navbar from "./components/Navbar";
import LearningOutcomes from "./components/ LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/ RegistrationForm"; 

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <LearningOutcomes />
      <WorkshopDetails />
      <FAQ />
      <RegistrationForm />
      
    </>
  );
}

export default App;