import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Talks from './components/Talks'
import Observing from './components/Observing'
import Outreach from './components/Outreach'
import Interests from './components/Interests'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Talks />
        <Observing />
        <Outreach />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}

export default App
