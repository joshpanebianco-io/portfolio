import Navbar from "./Navbar"
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <div name="main">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main