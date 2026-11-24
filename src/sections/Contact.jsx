
function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <p className="mt-6 leading-relaxed text-gray-400">
          Interested in working together or discussing technology?
          Feel free to contact me.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-slate-950"
          >
            GitHub
          </a>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-500">
          © 2026 Rikiansyah Aris Kurniawan. All rights reserved.
        </footer>

      </div>
    </section>
  )
}

export default Contact
