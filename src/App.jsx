import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
