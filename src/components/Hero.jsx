
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Rikiansyah
            <span className="block text-blue-500">
              Aris Kurniawan
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300">
            IT Teacher & Creative Developer
          </h2>

          <p className="mt-5 max-w-lg leading-relaxed text-gray-400">
            I enjoy creating digital experiences, teaching technology,
            and exploring creative solutions through programming
            and design.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-slate-950"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 md:h-96 md:w-96">
            <span className="text-8xl font-bold text-blue-500">
              R
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
