type AboutProps = {
  isHome?: boolean;
};

const About: React.FC<AboutProps> = ({ isHome = false }) => {
  return (
    <div className="flex flex-col items-center section-outer container-margins space-y-20">
      {/* Page Title */}
      <h1 className="text-center">
        {isHome
          ? "Welcome"
          : "Hey, it's Olivia! A full-stack developer based in Seattle, WA."}
      </h1>

      {/* A Little About Me */}
      <div className="w-full max-w-3xl relative rounded overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/flower.jpg')" }}
        ></div>

        {/* Text Overlay */}
        <div className="relative z-10 bg-opacity-80 p-16 pt-30 pb-60">
          <h2 className="mb-16 italic">A Little About Me :)</h2>
          <p>
            I'm currently a sophomore at the{" "}
            <span className="text-blue-900">University of Washington</span>{" "}
            pursing a B.S. in Discrete Math and Algorithms along with a minor in Business.
          </p>
        </div>
      </div>

      {/* Current Work */}
      <div className="w-full max-w-3xl relative rounded overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/rail.jpg')" }}
        ></div>

        {/* My Studies */}
        <div className="relative z-10 bg-opacity-80 p-16 pt-30 pb-100">
          <h2 className="mb-16 italic">What I Do</h2>
          <p>
            I build full-stack web applications that help businesses streamline their
            marketing workflows and boost productivity. I specialize in bridging clean
            design with computational efficiency—creating responsive, user-focused
            interfaces powered by optimized backend logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
