import mascotImg from "@assets/mascot club_1761490322616.png";

export default function SolutionSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 py-32 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-8 text-shadow-3d">
            The Solution
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white/95 text-shadow-soft">
            Real conversations. Real people. Every week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card 1 - Regular sessions */}
          <div 
            className="lg:col-span-5 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-10 hover:bg-white/25 transition-all duration-300 shadow-xl"
            data-testid="card-monday-sessions"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-shadow-3d">
              Every Monday Evening
            </h3>
            <ul className="space-y-5 text-lg md:text-xl font-bold text-white/95">
              <li className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <span className="text-shadow-soft">1-on-1 with students across three countries</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🌍</span>
                <span className="text-shadow-soft">Talk about real topics (UN SDGs)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <span className="text-shadow-soft">1-2 hours of conversation</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <span className="text-shadow-soft">Build international friendships</span>
              </li>
            </ul>
          </div>

          {/* Mascot - Rising */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
              src={mascotImg} 
              alt="Voice Lab Mascot" 
              className="w-48 md:w-64 drop-shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-[float_6s_ease-in-out_infinite]"
              data-testid="img-mascot-solution"
              style={{ animationDelay: '1.5s' }}
            />
          </div>

          {/* Card 2 - Urgent prep session */}
          <div 
            className="lg:col-span-5 bg-gradient-to-br from-orange-400 to-pink-400 border-2 border-orange-300/50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 shadow-xl"
            data-testid="card-prep-session"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-shadow-3d">
              ⚠️ TODAY: Sunday 8 PM<br />
              <span className="text-yellow-100">ONE TIME ONLY</span>
            </h3>
            <ul className="space-y-5 text-lg md:text-xl font-bold text-white">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <span className="text-shadow-soft">EXCLUSIVE entry prep session</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🔑</span>
                <span className="text-shadow-soft">This is your ONLY way to join</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <span className="text-shadow-soft">Learn conversation techniques</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <span className="text-shadow-soft">Get matched with international partners</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">⏱️</span>
                <span className="text-shadow-soft">Limited to 10 spots - LAST CHANCE!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-block bg-white/25 backdrop-blur-md border border-white/50 rounded-full px-10 py-5 shadow-lg">
            <p className="text-xl md:text-2xl font-bold text-white text-shadow-soft">
              100% free. 100% online. All levels welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
