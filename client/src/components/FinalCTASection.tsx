import mascotImg from "@assets/mascot club_1761490322616.png";

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
        <div className="mb-16">
          <h2 className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tight mb-10 text-shadow-3d">
            The Voice Lab
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white/95 text-shadow-soft">
            Where ITBS Students Become Global Professionals
          </p>
        </div>

        <div className="mb-20">
          <img 
            src={mascotImg} 
            alt="Voice Lab Mascot" 
            className="w-64 md:w-80 mx-auto drop-shadow-[0_0_50px_rgba(6,182,212,0.5)] animate-[float_6s_ease-in-out_infinite]"
            data-testid="img-mascot-final"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <button 
          onClick={handleJoinClick}
          className="inline-block px-16 md:px-20 py-6 md:py-8 text-2xl md:text-3xl font-bold text-white bg-orange-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 mb-12"
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
