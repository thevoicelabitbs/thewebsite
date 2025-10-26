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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 py-24 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
            How To Join
          </h2>
        </div>

        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div 
            className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-md p-8 md:p-10 transform hover:scale-105 transition-all duration-300"
            data-testid="card-step-1"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Join WhatsApp Group
                </h3>
                <p className="text-lg md:text-xl font-semibold text-white/90">
                  Get instant updates and session details
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - REQUIRED */}
          <div 
            className="bg-gradient-to-br from-orange-500 to-red-500 border-4 border-yellow-300 rounded-md p-8 md:p-10 transform hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.6)]"
            data-testid="card-step-2"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-3xl font-black text-orange-900">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Introduce Yourself <span className="text-yellow-300">[REQUIRED]</span>
                </h3>
                <p className="text-lg md:text-xl font-bold text-white mb-3">
                  Share your name, major, and why you want to join.
                </p>
                <p className="text-base md:text-lg font-semibold text-white/95">
                  This helps us build a strong community and ensures everyone is committed.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-md p-8 md:p-10 transform hover:scale-105 transition-all duration-300"
            data-testid="card-step-3"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Show Up Tonight 8 PM
                </h3>
                <p className="text-lg md:text-xl font-semibold text-white/90">
                  Your ONLY entry point to join The Voice Lab
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <p className="text-xl md:text-2xl font-bold text-white">
            No forms. No fees. Just commitment.
          </p>

          <button 
            onClick={handleJoinClick}
            className="inline-block px-12 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-black text-white bg-orange-500 rounded-md shadow-[0_0_60px_rgba(255,107,107,0.7)] hover:shadow-[0_0_80px_rgba(255,107,107,0.9)] transition-all duration-300 hover:scale-105 active:scale-95"
            data-testid="button-join-whatsapp-how"
          >
            Join WhatsApp Group Now
          </button>
        </div>
      </div>
    </section>
  );
}
