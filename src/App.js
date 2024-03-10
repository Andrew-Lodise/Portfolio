import React from 'react'
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills2 from "./components/Skills2";
import Projects2 from "./components/Projects2";
import Skills3 from "./components/Skills3"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects2 />
      <Skills3 />
      <Contact />
    </div>
  );
}

export default App;
