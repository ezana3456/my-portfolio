import React from 'react'
import NavBar from '../component/navBar.jsx'
import Hero from '../component/Hero.jsx'
import Projects from '../component/Projects.jsx'
import Skills from '../component/Skills.jsx'
import BackToTop from '../component/BackToTop.jsx'
import Contact from '../component/Contact.jsx'
import About from '../component/About.jsx'

const Home = () => {
  return (
  <>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <BackToTop/>
  </>
 )
}

export default Home
