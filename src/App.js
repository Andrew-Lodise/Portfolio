import React from 'react'
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects2 />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
