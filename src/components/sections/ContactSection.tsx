const About: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-neutral-50 text-zinc-700">
      <div className="container-margins">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
            Background
          </h1>
          <div className="w-16 h-0.5 bg-zinc-400 mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

          {/* Education Tile */}
          <div className="bg-white/70 border border-zinc-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <h2 className="text-xl font-light text-zinc-800">Education</h2>
            </div>

            <div>
              <p className="text-zinc-800 text-base">University of Washington</p>
              <p className="text-sm text-zinc-500">Seattle, WA</p>
              <p className="text-sm text-zinc-600 mt-2">
                B.S. Discrete Mathematics & Algorithms
              </p>
              <p className="text-sm text-zinc-500">Minor in Business</p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600">Sophomore • Class of 2027</span>
            </div>
          </div>

          {/* Philosophy Tile */}
          <div className="bg-white/70 border border-zinc-200 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
            <h2 className="text-xl font-light text-zinc-800 mb-2">Philosophy</h2>

            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>
                Leading development of a public-sector tool for King County’s
                Hazardous Waste Management Program, I’ve found that strong engineering
                comes from cross-disciplinary collaboration and shared purpose.
              </p>

              <p>
                Working with government IT teams has highlighted the power of inclusive,
                respectful environments that elevate both code and community impact.
              </p>

              <p>
                I approach every challenge with a mindset of curiosity, humility, and
                the belief that good systems empower people.
              </p>
            </div>

            <div className="mt-6 bg-zinc-100/70 p-4 rounded-lg border border-zinc-200 text-sm italic text-center text-zinc-600">
              "The best engineers are those who elevate others while staying curious,
              authentic, and open to new perspectives."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
