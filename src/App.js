import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects2  from "./components/Projects2";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sidebar />
      <Projects />
      <Projects2 />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
