const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-margins">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-4">
            Background
          </h1>
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
                      <p className="text-zinc-600">B.S. Discrete Mathematics & Algorithms</p>
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
                <h2 className="text-xl font-light text-zinc-900 mb-6">My Philosophy</h2>
                
                <div className="prose prose-zinc max-w-none text-lg">
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Currently leading development of a critical public-sector application for King County's 
                    Hazardous Waste Management Program, I've found that the best technical solutions 
                    come from deep collaboration and diverse perspectives.
                  </p>
                  
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Working closely with government IT professionals has shown me the value of building 
                    inclusive environments where different viewpoints strengthen both code quality and team 
                    dynamics. Great software engineering extends beyond writing efficient code—it's about 
                    respecting varied expertise and creating systems that genuinely serve communities.
                  </p>
                  
                  <p className="text-zinc-600 leading-relaxed">
                    I approach each challenge with enthusiasm for learning and dedication to maintaining 
                    inclusive engineering cultures where everyone can do their best work.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-white/60 rounded-lg border border-zinc-200">
                  <p className="text-base text-zinc-600 italic text-center">
                    "The best engineers are those who elevate others while staying curious, 
                    authentic, and open to new perspectives."
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