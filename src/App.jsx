import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  )
}

export default App