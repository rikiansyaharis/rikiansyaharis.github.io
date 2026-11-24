
const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Laravel",
  "Scratch",
  "Arduino",
  "LEGO EV3",
  "Graphic Design",
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Technologies and tools I have explored and worked with.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-white/10 bg-slate-900 px-5 py-3 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
