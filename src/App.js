import About from "./containers/About";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
