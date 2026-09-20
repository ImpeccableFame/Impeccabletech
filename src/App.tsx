import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { PortfolioPillars } from "./components/PortfolioPillars";
//import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <PortfolioPillars />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
