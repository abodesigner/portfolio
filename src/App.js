import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div className="App" style={{ backgroundColor: "#f8f9fa" }}>
          <Navbar />
          <Home />
          <Projects />
          <About />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
