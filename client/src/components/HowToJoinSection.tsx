interface HowToJoinSectionProps {
  onJoinClick?: () => void;
}

export default function HowToJoinSection({ onJoinClick }: HowToJoinSectionProps) {
  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      window.open('https://chat.whatsapp.com/G5ncFqtqtmT5gSBewjD93m', '_blank');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 py-24 overflow-hidden grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight text-shadow-3d">
            How To Join
          </h2>
        </div>

        <div className="space-y-8 mb-20">
          {/* Step 1 */}
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 hover:bg-white/25 transition-all duration-300 shadow-lg"
            data-testid="card-step-1"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-shadow-3d">
                  Join WhatsApp Group
                </h3>
                <p className="text-lg md:text-xl font-medium text-white/90 text-shadow-soft">
                  Get instant updates and session details
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - REQUIRED */}
          <div 
            className="bg-gradient-to-br from-orange-400 to-pink-400 border-2 border-orange-300/50 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 shadow-xl"
            data-testid="card-step-2"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-orange-500">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-shadow-3d">
                  Introduce Yourself <span className="text-yellow-100">[REQUIRED]</span>
                </h3>
                <p className="text-lg md:text-xl font-semibold text-white mb-3 text-shadow-soft">
                  Share your name, major, and why you want to join.
                </p>
                <p className="text-base md:text-lg font-medium text-white/95 text-shadow-soft">
                  This helps us build a strong community and ensures everyone is committed.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-10 hover:bg-white/25 transition-all duration-300 shadow-lg"
            data-testid="card-step-3"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-shadow-3d">
                  Show Up Tonight 8 PM
                </h3>
                <p className="text-lg md:text-xl font-medium text-white/90 text-shadow-soft">
                  Your ONLY entry point to join The Voice Lab
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <p className="text-xl md:text-2xl font-semibold text-white text-shadow-soft">
            No forms. No fees. Just commitment.
          </p>

          <button 
            onClick={handleJoinClick}
            className="inline-block px-12 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-shadow-soft"
            data-testid="button-join-whatsapp-how"
          >
            Join WhatsApp Group Now
          </button>
        </div>
      </div>
    </section>
  );
}
