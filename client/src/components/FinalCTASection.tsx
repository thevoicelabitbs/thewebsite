// import mascotImg from "@assets/mascot club_1761490322616.png";

interface FinalCTASectionProps {
  onJoinClick?: () => void;
}

export default function FinalCTASection({ onJoinClick }: FinalCTASectionProps) {
  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      window.open('https://chat.whatsapp.com/G5ncFqtqtmT5gSBewjD93m', '_blank');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-550 via-blue-500 to-blue-450 py-32 overflow-hidden flex items-center grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center w-full z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight mb-6 md:mb-10 text-shadow-3d">
            The Voice Lab
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/95 text-shadow-soft px-4">
            Where ITBS Students Become Global Professionals
          </p>
        </div>

        <button 
          onClick={handleJoinClick}
          className="inline-block w-full max-w-sm md:max-w-lg px-8 md:px-16 lg:px-20 py-5 md:py-6 lg:py-8 text-lg md:text-xl lg:text-2xl font-bold text-white bg-orange-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 mb-8 md:mb-12 touch-manipulation"
          data-testid="button-join-final"
        >
          Join WhatsApp Group
        </button>

        <p className="text-xl md:text-2xl font-bold text-white/90 text-shadow-soft">
          Tonight, 8 PM. Your international network starts here.
        </p>
      </div>
    </section>
  );
}
