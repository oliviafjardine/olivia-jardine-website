import type { BaseProps } from "../../constants";

const About: React.FC<BaseProps> = ({ isHome = false }) => {
  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="container-margins">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-4">
            Background
          </h1>
          <div className="w-16 h-0.5 bg-zinc-400 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* Left Column - Education */}
            <div className="space-y-8">
              <div className="border-l-2 border-zinc-300 pl-6">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                  <h2 className="text-xl font-light text-zinc-900 mb-6">Education</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-800">University of Washington</h3>
                      <p className="text-sm text-zinc-600 mb-2">Seattle, WA</p>
                      <p className="text-zinc-700">B.S. Discrete Mathematics & Algorithms</p>
                      <p className="text-zinc-600 text-sm">Minor in Business</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span className="text-blue-600 font-medium">Sophomore • Class of 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Philosophy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light text-zinc-900 mb-6">Philosophy</h2>
                <div className="prose prose-zinc max-w-none">
                  <p className="text-zinc-700 leading-relaxed mb-6">
                    I believe in writing code that tells a story. Every function, every variable,
                    every architectural decision should contribute to a narrative that future
                    developers can easily follow and extend.
                  </p>

                  <p className="text-zinc-700 leading-relaxed">
                    My focus is on creating maintainable, scalable solutions that solve real
                    problems elegantly. I value simplicity over complexity, clarity over cleverness.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-white/60 rounded-lg border border-zinc-200">
                  <p className="text-sm text-zinc-600 italic text-center">
                    "The best code is the code that doesn't need comments to be understood."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
