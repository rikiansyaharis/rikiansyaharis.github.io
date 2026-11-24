import { ArrowDownRight, Code, Download } from "lucide-react"
import profil from '../assets/images/profil.jpg'

function Hero() {

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle Background Decorative Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Column 1: Headline & Introductions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">

              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-subtle-pulse"></span>
                <span>Hello, I'm</span>
                <span className="text-slate-400 dark:text-slate-600">|</span>
                <span className="text-slate-600 dark:text-slate-300">
                  Teacher &amp; Web Developer
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  Rikiansyah <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500">
                    Aris Kurniawan
                  </span>
                </h1>

                <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, laborum.
                </p>
              </div>

              {/* Short Bio Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">

                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>View My Projects</span>
                  <ArrowDownRight className="w-5 h-5" />
                </a>

                <a
                  href="assets/documents/cv.pdf"
                  download="CV-Rikiansyah-Aris-Kurniawan.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Download className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Download CV</span>
                </a>

              </div>

              {/* Key Quick Stats / Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 border-t border-slate-200/80 dark:border-slate-800/80">

                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    2+
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    Tahun Mengajar
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    15+
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    Proyek Selesai
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    40+
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    Siswa Dibimbing
                  </p>
                </div>

              </div>

            </div>

            {/* Column 2: Visual Profile Card */}
            <div className="lg:col-span-5 flex justify-center delay-200 order-1 lg:order-2">
              <div className="relative w-full max-w-md">

                {/* Subtle Aura Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-purple-500/10 rounded-3xl blur-2xl transform rotate-3"></div>

                {/* Profile Frame Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-xl shadow-slate-200/40 dark:shadow-none">

                  {/* Profile Image / Graphic */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">

                    <img
                      src={profil}
                      alt="Rikiansyah Aris Kurniawan"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />

                    {/* Inner gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                    {/* Floating Label at bottom of photo */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-wider font-semibold text-indigo-300">
                        Web Developer
                      </p>
                      <p className="text-sm font-bold">
                        Rikiansyah Aris Kurniawan
                      </p>
                    </div>

                  </div>

                  {/* Floating Badges Over Card */}
                  <div className="mt-4 flex items-center justify-between gap-2 px-1">

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Web Developer</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Open to Collaboration</span>
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
