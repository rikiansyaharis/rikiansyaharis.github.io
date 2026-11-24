
function About() {
  return (
    <section id="about" className="py-24 bg-[var(--surface-alt)] border-t border-[var(--card-border)] dark:border-none relative dark:bg-[var(--surface-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            About <span className="title-accent">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] dark:text-[var(--text-light)] mt-4">
            Mengenal lebih dekat dedikasi saya dalam dunia pendidikan teknologi, pengembangan web, dan inovasi kreatif.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
