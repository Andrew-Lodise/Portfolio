import React from 'react'
import Home from './Home'
import Experience from './Experience'
import Navbar from './navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
    
  )
}