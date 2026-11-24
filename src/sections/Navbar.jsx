import navigation from "../data/navigation";
import ThemeToggle from "../components/buttons/ThemeToggle";
import ContactButton from "../components/buttons/LanguageSelector";
import MobileMenuButton from "../components/buttons/MobileMenuButton";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "../components/buttons/LanguageSelector";

function Navbar({ language, setLanguage, t, profile }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileControlsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedControls = mobileControlsRef.current?.contains(event.target);
      const clickedMenu = mobileMenuRef.current?.contains(event.target);

      if (!clickedControls && !clickedMenu) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      <nav id="navbar" className="glass-nav border-b border-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 focus:outline-none group">
              <span className="w-9 h-9 rounded-xl text-white brand-logo flex flex items-center justify-center font-bold text-lg shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">R</span>
              <div className="flex flex-col">
                <span className="
                text-xl font-extrabold tracking-tight brand-name transition-colors
                ">{profile?.firstName}</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--text-muted)] -mt-0.5">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="hidden xl:flex items-center gap-7">
              {navigation.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--primary-hover)] dark:hover:text-[var(--primary-color)] ${index === 0 ? "active" : ""}`}
                >
                   {t?.nav?.[item.key]}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3.5">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <LanguageSelector language={language} setLanguage={setLanguage} />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden" ref={mobileControlsRef}>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} className="p-2" />
              <LanguageSelector language={language} setLanguage={setLanguage} />
              <MobileMenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>

          </div>
        </div>

        <div id="mobile-menu" ref={mobileMenuRef}
          className={`md:hidden border-t border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 shadow-xl overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-[600px] opacity-100 py-3 pb-6 translate-y-0" : "max-h-0 opacity-0 py-0 -translate-y-2 pointer-events-none"}`}>
          <div className="space-y-1">
            {navigation.map((item, index) => {
              const Icon = item.icon;

              return (
                <a key={item.key} href={item.href} onClick={() => setIsMenuOpen(false)} className={`mobile-nav-link flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors 
                    ${index === 0 ? "active" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>
                  <Icon className={`w-4 h-4 transition-colors duration-300 ${index === 0 ? "text-white" : "text-[var(--primary-hover)] dark:text-white"}`} />
                   {t?.nav?.[item.key] || item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
