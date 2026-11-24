import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { portfolioData } from "./data/portfolioData";
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { useEffect, useState } from 'react';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = portfolioData[language] || portfolioData["en"];
  const profile = portfolioData.profile;
  return (
    <div className="bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300 min-h-screen flex flex-col justify-between">
      <Navbar language={language} setLanguage={setLanguage} t={t} profile={profile} />
      <main className="flex-grow">
        <Hero t={t} profile={profile} />
      </main>
      <FloatingWhatsApp profile={profile} />
    </div>
  )
}

export default App