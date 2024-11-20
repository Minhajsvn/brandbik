import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Feature from './components/Feature/Feature'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
    </div>
  )
}

export default App
