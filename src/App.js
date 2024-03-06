import React from 'react'
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
