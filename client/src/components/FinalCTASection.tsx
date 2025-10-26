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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-blue-800 py-24 overflow-hidden flex items-center">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center w-full">
        <div className="mb-12">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tracking-tighter mb-8">
            The Voice Lab
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white/95">
            Where ITBS Students Become Global Professionals
          </p>
        </div>

        <div className="mb-16">
          <img 
            src={mascotImg} 
            alt="Voice Lab Mascot" 
            className="w-64 md:w-80 mx-auto drop-shadow-[0_0_80px_rgba(147,51,234,0.8)]"
            data-testid="img-mascot-final"
          />
        </div>

        <button 
          onClick={handleJoinClick}
          className="inline-block px-16 md:px-20 py-6 md:py-8 text-2xl md:text-3xl font-black text-white bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_100%] rounded-md shadow-[0_0_80px_rgba(249,115,22,0.8)] hover:shadow-[0_0_100px_rgba(249,115,22,1)] transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-right animate-pulse mb-12"
          data-testid="button-join-final"
        >
          Join WhatsApp Group
        </button>

        <p className="text-xl md:text-2xl font-bold text-white/90">
          Tonight, 8 PM. Your international network starts here.
        </p>
      </div>
    </section>
  );
}
