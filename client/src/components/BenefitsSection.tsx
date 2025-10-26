// import girlSmilingImg from "@assets/girl smiling_1761490322615.png";
// import mascotImg from "@assets/mascot club_1761490322616.png";

export default function BenefitsSection() {
  const benefits = [
    "Cross-cultural communication skills",
    "Real fluency (not textbook English)",
    "International network across three countries",
    "Confidence speaking under pressure",
    "Stories to tell in interviews",
    "Weekly compounding improvement"
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-550 via-blue-500 to-blue-450 py-32 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight text-shadow-3d">
            What You Get
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-5 md:p-6 hover:bg-white/25 transition-all duration-300 shadow-lg"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl text-green-300 flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-white text-shadow-soft">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight text-shadow-3d leading-relaxed">
            Stop memorizing grammar.<br />
            Start having conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
