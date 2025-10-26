import girlSmilingImg from "@assets/girl smiling_1761490322615.png";
import mascotImg from "@assets/mascot club_1761490322616.png";

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
    <section className="relative min-h-screen bg-gradient-to-br from-purple-700 via-blue-700 to-purple-600 py-24 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
            What You Get
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Character - Large */}
          <div className="hidden lg:block lg:col-span-3">
            <img 
              src={girlSmilingImg} 
              alt="Student" 
              className="w-full max-w-sm drop-shadow-[0_0_60px_rgba(147,51,234,0.6)]"
              data-testid="img-student-benefits"
            />
          </div>

          {/* Benefits Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/15 backdrop-blur-sm border-2 border-white/30 rounded-md p-6 hover:bg-white/20 transition-all duration-300"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-green-400 flex-shrink-0">✓</span>
                  <p className="text-lg md:text-xl font-bold text-white">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Character - Small */}
          <div className="hidden lg:block lg:col-span-3 flex justify-end">
            <img 
              src={mascotImg} 
              alt="Voice Lab Mascot" 
              className="w-48 drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
              data-testid="img-mascot-benefits"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Stop memorizing grammar.<br />
            Start having conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
