import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Navbar from './navbar'
import About from './About'
import Projects2 from './Projects2'


export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects2 />
      <Projects />
      <Skills />
      <Contact />
    </>
    
  )
}