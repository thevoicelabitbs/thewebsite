import mascotImg from "@assets/mascot club_1761490322616.png";

export default function SolutionSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-600 py-24 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent tracking-tighter mb-6">
            The Solution
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white/95">
            Real conversations. Real people. Every week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card 1 - Regular sessions */}
          <div 
            className="lg:col-span-5 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-md p-10 transform lg:rotate-[-2deg] hover:scale-105 transition-all duration-300"
            data-testid="card-monday-sessions"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Every Monday Evening
            </h3>
            <ul className="space-y-4 text-lg md:text-xl font-semibold text-white/95">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <span>1-on-1 with students across three countries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <span>Talk about real topics (UN SDGs)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <span>1-2 hours of conversation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <span>Build international friendships</span>
              </li>
            </ul>
          </div>

          {/* Mascot */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
              src={mascotImg} 
              alt="Voice Lab Mascot" 
              className="w-48 md:w-64 drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]"
              data-testid="img-mascot-solution"
            />
          </div>

          {/* Card 2 - Urgent prep session */}
          <div 
            className="lg:col-span-5 bg-gradient-to-br from-orange-500 to-red-500 border-4 border-orange-300 rounded-md p-10 transform lg:rotate-[2deg] hover:scale-105 transition-all duration-300 animate-pulse"
            data-testid="card-prep-session"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              ⚠️ TODAY: Sunday 8 PM<br />
              <span className="text-yellow-300">ONE TIME ONLY</span>
            </h3>
            <ul className="space-y-4 text-lg md:text-xl font-bold text-white">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span>EXCLUSIVE entry prep session</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <span>This is your ONLY way to join</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span>Learn conversation techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <span>Get matched with international partners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <span>Limited to 10 spots - LAST CHANCE!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-8 py-4">
            <p className="text-xl md:text-2xl font-bold text-white">
              100% free. 100% online. All levels welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
