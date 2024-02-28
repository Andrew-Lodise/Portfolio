import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sidebar />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
