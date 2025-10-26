// import girlSmilingImg from "@assets/girl smiling_1761490322615.png";
// import mascotImg from "@assets/mascot club_1761490322616.png";

interface HeroSectionProps {
  onJoinClick?: () => void;
}

export default function HeroSection({ onJoinClick }: HeroSectionProps) {
  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      window.open('https://chat.whatsapp.com/G5ncFqtqtmT5gSBewjD93m', '_blank');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-400 via-blue-450 to-blue-500 overflow-hidden pt-20 pb-16 md:pb-32 grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
          {/* Center Content */}
          <div className="text-center space-y-6 md:space-y-8 relative z-10 w-full px-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[0.95] text-shadow-3d">
              Grow Your<br />Professional<br />International Network
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed text-shadow-soft px-2">
              Practice English with students from Turkey, Greece & Croatia. Real conversations. Every Monday.
            </p>

            <p className="text-base md:text-xl lg:text-2xl font-bold text-white/90 text-shadow-soft">
              Free. Fun. Real practice.
            </p>

            <button 
              onClick={handleJoinClick}
              className="inline-block w-full max-w-sm px-8 py-5 md:px-14 md:py-6 text-lg md:text-xl lg:text-2xl font-bold text-white bg-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
              data-testid="button-join-whatsapp-hero"
            >
              Join WhatsApp - Start Tonight
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
