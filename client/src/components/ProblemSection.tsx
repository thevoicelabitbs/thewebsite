export default function ProblemSection() {
  const painPoints = [
    "Hold real conversations with Turkish students?",
    "Debate global topics under pressure?",
    "Build friendships across cultures?",
    "Tell compelling stories in job interviews?"
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-500 via-blue-550 to-blue-600 py-32 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-10 text-shadow-3d">
            The <span className="text-orange-500" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)' }}>Problem</span>
          </h2>

          <p className="text-2xl md:text-3xl font-bold text-white/95 max-w-4xl mx-auto leading-relaxed text-shadow-soft">
            You studied English for years. But can you actually{" "}
            <span className="text-orange-500 font-black" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)' }}>TALK</span>{" "}
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
                <p className="text-xl md:text-2xl font-bold text-white text-shadow-soft">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight text-shadow-3d leading-relaxed">
            That's the gap we fix. Every Monday.{" "}
            <span className="text-orange-500" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)' }}>FOR FREE.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
