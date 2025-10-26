export default function ProblemSection() {
  const painPoints = [
    "Hold real conversations with Turkish students?",
    "Debate global topics under pressure?",
    "Build friendships across cultures?",
    "Tell compelling stories in job interviews?"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 py-24 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-10 text-shadow-3d">
            The <span className="text-orange-400">Problem</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium text-white/95 max-w-4xl mx-auto leading-relaxed text-shadow-soft">
            You studied English for years. But can you actually{" "}
            <span className="text-orange-400 font-bold">TALK</span>{" "}
            to people from other countries?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg"
              data-testid={`card-pain-point-${index}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl text-red-300 flex-shrink-0">❌</span>
                <p className="text-xl md:text-2xl font-semibold text-white text-shadow-soft">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-shadow-3d leading-relaxed">
            That's the gap we fix. Every Monday.{" "}
            <span className="text-orange-400">FOR FREE.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
