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
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24 overflow-hidden"
      data-testid="section-urgency"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          Tonight: 10 Spots Only
        </h2>

        <p className="text-3xl md:text-4xl font-black text-orange-500 mb-16">
          This is Your ONLY Entry Point
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            className="bg-white/10 backdrop-blur-md border-2 border-orange-400/50 rounded-md p-8 hover:bg-white/15 transition-all duration-300"
            data-testid="card-urgency-1"
          >
            <div className="text-5xl mb-4">⏰</div>
            <p className="text-xl md:text-2xl font-bold text-white">
              8 PM TODAY<br />
              <span className="text-orange-400">ONE-TIME Prep Session</span>
            </p>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-md border-2 border-red-400/50 rounded-md p-8 hover:bg-white/15 transition-all duration-300"
            data-testid="card-urgency-2"
          >
            <div className="text-5xl mb-4">🚨</div>
            <p className="text-xl md:text-2xl font-bold text-white">
              Miss this =<br />
              <span className="text-red-400">No entry to Monday sessions</span>
            </p>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-md border-2 border-blue-400/50 rounded-md p-8 hover:bg-white/15 transition-all duration-300"
            data-testid="card-urgency-3"
          >
            <div className="text-5xl mb-4">🌍</div>
            <p className="text-xl md:text-2xl font-bold text-white">
              Start Your<br />
              <span className="text-blue-400">International Network Tonight</span>
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed">
          This Sunday prep session happens ONCE. It's your only way in. Every week you wait isn't an option - there's no next week for entry.
        </p>

        <button 
          onClick={handleJoinClick}
          className="inline-block px-16 md:px-20 py-6 md:py-8 text-2xl md:text-3xl font-black text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow-[0_0_100px_rgba(249,115,22,0.8)] hover:shadow-[0_0_120px_rgba(249,115,22,1)] transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse"
          data-testid="button-join-urgency"
        >
          Join Now - Don't Miss Out
        </button>
      </div>
    </section>
  );
}
