// Example: App.jsx
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Explore from './Components/Explore'
import Special from './Components/Spacial'
import SpecialistsGrid from './Components/Specialist'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="explore"><Explore /></section>
      <section id="consulting"><Special /></section>
      <section id="specialist"><SpecialistsGrid /></section>
      <section id="feedback"><Feedback /></section>
      <Footer />
    </>
  )
}

export default App
