import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
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
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
