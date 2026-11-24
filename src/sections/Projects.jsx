
const projects = [
  {
    title: "Student Game Project",
    category: "Game Development",
    description:
      "A simple interactive game created using Scratch.",
  },
  {
    title: "Arduino LCD Project",
    category: "Robotics",
    description:
      "An Arduino project displaying text on an LCD screen.",
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A personal website built using React and Tailwind CSS.",
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Some projects and works I have created.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-white/10 bg-slate-800 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="text-sm text-blue-400">
                {project.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
