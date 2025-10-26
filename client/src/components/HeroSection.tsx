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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 overflow-hidden pt-20 pb-24">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Character */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <img 
              src={girlSmilingImg} 
              alt="Student" 
              className="w-full max-w-xs drop-shadow-[0_0_60px_rgba(147,51,234,0.6)]"
              data-testid="img-student-hero"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-8 text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none">
              Grow Your<br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Professional
              </span><br />
              <span className="text-transparent bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text">
                International Network
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-white/95 max-w-3xl mx-auto leading-relaxed">
              Practice English with students from Turkey, Greece & Croatia. Real conversations. Every Monday.
            </p>

            <p className="text-lg md:text-xl font-semibold text-white/70">
              Free. Fun. Real practice.
            </p>

            <button 
              onClick={handleJoinClick}
              className="inline-block px-12 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-black text-white bg-orange-500 rounded-md shadow-[0_0_60px_rgba(255,107,107,0.7)] hover:shadow-[0_0_80px_rgba(255,107,107,0.9)] transition-all duration-300 hover:scale-105 active:scale-95"
              data-testid="button-join-whatsapp-hero"
            >
              Join WhatsApp - Start Tonight
            </button>
          </div>

          {/* Right Character */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <img 
              src={mascotImg} 
              alt="Voice Lab Mascot" 
              className="w-full max-w-xs drop-shadow-[0_0_60px_rgba(59,130,246,0.6)]"
              data-testid="img-mascot-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
