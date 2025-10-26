import girlSmilingImg from "@assets/girl smiling_1761490322615.png";
import mascotImg from "@assets/mascot club_1761490322616.png";

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
    <section className="relative bg-gradient-to-b from-blue-400 via-blue-450 to-blue-500 overflow-hidden pt-20 pb-32 grainy-texture">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Character - Rising effect */}
          <div className="hidden lg:block lg:col-span-2 relative z-10">
            <img 
              src={girlSmilingImg} 
              alt="Student" 
              className="w-full max-w-xs drop-shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-[float_6s_ease-in-out_infinite]"
              data-testid="img-student-hero"
              style={{ animationDelay: '0s' }}
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-8 text-center space-y-8 relative z-10">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none text-shadow-3d">
              Grow Your<br />
              Professional<br />
              International Network
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed text-shadow-soft">
              Practice English with students from Turkey, Greece & Croatia. Real conversations. Every Monday.
            </p>

            <p className="text-xl md:text-2xl font-bold text-white/90 text-shadow-soft">
              Free. Fun. Real practice.
            </p>

            <button 
              onClick={handleJoinClick}
              className="inline-block px-14 md:px-18 py-6 md:py-7 text-xl md:text-2xl font-bold text-white bg-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              data-testid="button-join-whatsapp-hero"
            >
              Join WhatsApp - Start Tonight
            </button>
          </div>

          {/* Right Character - Rising effect */}
          <div className="hidden lg:block lg:col-span-2 relative z-10">
            <img 
              src={mascotImg} 
              alt="Voice Lab Mascot" 
              className="w-full max-w-xs drop-shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-[float_6s_ease-in-out_infinite]"
              data-testid="img-mascot-hero"
              style={{ animationDelay: '3s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
