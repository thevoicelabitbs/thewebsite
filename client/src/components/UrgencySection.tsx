interface UrgencySectionProps {
  onJoinClick?: () => void;
}

export default function UrgencySection({ onJoinClick }: UrgencySectionProps) {
  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      window.open('https://chat.whatsapp.com/G5ncFqtqtmT5gSBewjD93m', '_blank');
    }
  };

  return (
    <section 
      id="urgency-section"
      className="relative min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 py-24 overflow-hidden grainy-texture"
      data-testid="section-urgency"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-400/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight mb-8 text-shadow-3d">
          Tonight: 10 Spots Only
        </h2>

        <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-20 text-shadow-soft">
          This is Your ONLY Entry Point
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 hover:bg-white/25 transition-all duration-300 shadow-lg"
            data-testid="card-urgency-1"
          >
            <div className="text-5xl mb-6">⏰</div>
            <p className="text-xl md:text-2xl font-semibold text-white text-shadow-soft">
              8 PM TODAY<br />
              <span className="text-orange-300">ONE-TIME Prep Session</span>
            </p>
          </div>

          <div 
            className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 hover:bg-white/25 transition-all duration-300 shadow-lg"
            data-testid="card-urgency-2"
          >
            <div className="text-5xl mb-6">🚨</div>
            <p className="text-xl md:text-2xl font-semibold text-white text-shadow-soft">
              Miss this =<br />
              <span className="text-red-300">No entry to Monday sessions</span>
            </p>
          </div>

          <div 
            className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 hover:bg-white/25 transition-all duration-300 shadow-lg"
            data-testid="card-urgency-3"
          >
            <div className="text-5xl mb-6">🌍</div>
            <p className="text-xl md:text-2xl font-semibold text-white text-shadow-soft">
              Start Your<br />
              <span className="text-cyan-200">International Network Tonight</span>
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-medium text-white/95 max-w-3xl mx-auto mb-20 leading-relaxed text-shadow-soft">
          This Sunday prep session happens ONCE. It's your only way in. Every week you wait isn't an option - there's no next week for entry.
        </p>

        <button 
          onClick={handleJoinClick}
          className="inline-block px-16 md:px-20 py-6 md:py-8 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-shadow-soft"
          data-testid="button-join-urgency"
        >
          Join Now - Don't Miss Out
        </button>
      </div>
    </section>
  );
}
