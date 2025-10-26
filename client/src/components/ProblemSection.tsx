export default function ProblemSection() {
  const painPoints = [
    "Hold real conversations with Turkish students?",
    "Debate global topics under pressure?",
    "Build friendships across cultures?",
    "Tell compelling stories in job interviews?"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 py-24 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-8">
            The <span className="text-orange-500">Problem</span>
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-white/95 max-w-4xl mx-auto leading-relaxed">
            You studied English for years. But can you actually{" "}
            <span className="text-orange-500 font-black">TALK</span>{" "}
            to people from other countries?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-md p-8 transform hover:scale-105 transition-all duration-300"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` 
              }}
              data-testid={`card-pain-point-${index}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl text-red-400 flex-shrink-0">❌</span>
                <p className="text-xl md:text-2xl font-bold text-white">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            That's the gap we fix. Every Monday.{" "}
            <span className="text-orange-500">FOR FREE.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
