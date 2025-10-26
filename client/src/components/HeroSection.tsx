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
    <section className="relative bg-gradient-to-b from-blue-550 via-blue-450 to-blue-650 overflow-hidden pt-20 pb-20 md:pb-32 grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-10rem)]">
          {/* Center Content */}
          <div className="text-center space-y-8 md:space-y-12 relative z-10 w-full px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-[0.9] text-shadow-3d">
              Grow Your<br />Professional<br />International Network
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 max-w-4xl mx-auto leading-relaxed text-shadow-soft px-4">
              Practice English with students from Turkey, Greece & Croatia. Real conversations. Every Monday.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white/90 text-shadow-soft">
              Free. Fun. Real practice.
            </p>

            <button 
              onClick={handleJoinClick}
              className="inline-block w-full max-w-md px-10 py-6 md:px-16 md:py-8 text-xl md:text-2xl lg:text-3xl font-bold text-white bg-orange-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
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
