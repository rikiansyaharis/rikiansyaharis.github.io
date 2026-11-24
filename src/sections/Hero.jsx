import { ArrowDownRight, Code, Download } from "lucide-react"
import SocialLinks from "../components/SocialLinks"

function Hero({ t, profile }) {

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32  overflow-hidden home-background">
      {/* Subtle Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Column 1: Headline & Introductions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <p className="text-sm md:text-base font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">
              {t.greeting}
            </p>
            {/* Main Headline */}
            <div className="space-y-2">

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--text)] dark:text-white/90 leading-[1.08] mb-5">
                {profile?.firstName} <br className="hidden sm:inline" />
                <span className="text-[#0F766E] relative">
                  {profile?.lastName}
                  <svg className="hidden md:inline-block absolute -bottom-2 left-0 w-full text-[#0F766E]/30 -z-10" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">{t.hero.subtitle}</p>
            </div>

            {/* Short Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 text-justify">
              {t.hero.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] shadow-md shadow-600/25 hover:shadow-lg hover:shadow-[var(--primary-color)]-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.hero.button}</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href={profile?.cv}
                download="CV-Rikiansyah-Aris-Kurniawan.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-5 h-5 text-[var(--primary-hover)] dark:text-[var(--text-light)]" />
                <span>{t.hero.buttonCV}</span>
              </a>

            </div>

            {/* Social Media Icons */}
            <SocialLinks profile={profile} t={t} />

          </div>

          {/* Column 2: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center delay-200 order-1 lg:order-2">
            <div className="relative w-full max-w-md">

              {/* Subtle Aura Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-color)]/20 via-[var(--primary-hover)]/20 to-[var(--primary-hover)]/10 rounded-3xl blur-2xl transform rotate-3"></div>

              {/* Profile Frame Card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-xl shadow-slate-200/40 dark:shadow-none">

                {/* Profile Image / Graphic */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">

                  {/* Background decoration */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    {/* Teal glow */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#0F766E]/15 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0F766E]/10 blur-3xl"></div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
                      style={{
                        backgroundImage: `linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)`,
                        backgroundSize: "35px 35px"
                      }}>
                    </div>

                    {/* Diagonal lines */}
                    <div className="absolute inset-0 opacity-20 dark:opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg,transparent,transparent 18px,#0F766E 19px,transparent 20px)`
                      }}>
                    </div>

                    {/* Abstract circle */}
                    <div className="absolute -right-16 top-10 w-64 h-64 rounded-full border border-[#0F766E]/30"></div>
                    <div className="absolute -right-10 top-16 w-48 h-48 rounded-full border border-[#0F766E]/20"></div>

                    {/* Decorative ring */}
                    <div className="absolute left-8 bottom-10 w-24 h-24 rounded-full border border-[#0F766E]/20"></div>

                    {/* Decorative dots */}
                    <div className="absolute top-8 left-8 flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]/50"></span>
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]/30"></span>
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]/20"></span>
                    </div>

                  </div>

                  {/* Photo */}
                  <img
                    src={profile?.photo}
                    alt={`${profile?.firstName} ${profile?.lastName}`}
                    className="relative z-10 w-full h-full object-contain object-center"
                    loading="eager"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>

                </div>

                {/* Floating Badges Over Card */}
                <div className="mt-4 flex items-center justify-between gap-2 px-1">

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <Code className="w-4 h-4 text-[var(--primary-color)] dark:text-[var(--text-light)]" />
                    <span>{t.hero.role}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{t.hero.availability}</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
