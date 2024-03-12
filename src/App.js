import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/**<Projects /> */}
      {/** <Skills />*/}
      <Contact />
    </div>
  );
}

export default App;
