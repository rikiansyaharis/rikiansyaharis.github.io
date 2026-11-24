
function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              I'm an IT graduate with a passion for technology,
              education, and creative problem solving.
            </p>

            <p className="mt-5 leading-relaxed text-gray-400">
              I have experience in web development, graphic design,
              and teaching programming to students.
              I enjoy helping others understand technology
              through practical and creative learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-slate-800 p-5">
              <h3 className="text-3xl font-bold text-blue-500">IT</h3>
              <p className="mt-2 text-gray-400">Graduate</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-800 p-5">
              <h3 className="text-3xl font-bold text-blue-500">3+</h3>
              <p className="mt-2 text-gray-400">Tech Fields</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-800 p-5">
              <h3 className="text-3xl font-bold text-blue-500">Web</h3>
              <p className="mt-2 text-gray-400">Development</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-800 p-5">
              <h3 className="text-3xl font-bold text-blue-500">Edu</h3>
              <p className="mt-2 text-gray-400">Technology</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
