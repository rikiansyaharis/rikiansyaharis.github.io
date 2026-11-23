
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          RIKI<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-gray-300 hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-blue-400">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-blue-400">
            Projects
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Contact Me
        </a>

      </div>
    </nav>
  )
}

export default Navbar
