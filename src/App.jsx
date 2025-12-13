import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certificates from './Components/Certificates/Certificates'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Certificates/>
    </div>
  )
}

export default App
