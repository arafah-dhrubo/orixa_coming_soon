import Countdown from './components/Countdown';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Grid */}
      <div className="bg-grid" />

      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Left Column: Content Area (70%) */}
        <div className="w-full lg:w-[70%] relative flex flex-col min-h-screen p-4 lg:p-20">

          <div className="flex-1 flex items-center justify-center">
            {/* Centered Card (compact) */}
            <div className="w-full max-w-[480px] bg-white px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 flex flex-col items-center text-center border border-[#f1f5f9] rounded-md">
              {/* Logo */}
              <header className="mb-6">
                <img
                  src="/orixa_logo_official.svg"
                  alt="ORIXA Logo"
                  className="w-16"
                />
              </header>

              {/* Main Content */}
              <div className="flex flex-col items-center">
                <h1 className="mb-3 text-2xl md:text-3xl font-bold text-black leading-[1.1] tracking-tight">
                  We are launching soon!
                </h1>

                <Countdown targetDate="June 1, 2026 00:00:00" />

                <p className="text-sm mt-2 text-[#4b5563] leading-relaxed max-w-[320px] mb-4">
                  Get notified when we launch our website and be the first to experience our new platform.
                </p>

                <LeadForm />
              </div>
            </div>
          </div>

          {/* Footer below the card */}
          <div className="w-full mt-8">
            <Footer />
          </div>
        </div>

        {/* Right Column: Side Image (30%) */}
        <div className="hidden lg:block lg:w-[30%] lg:h-screen sticky top-0">
          <img
            src="/sideimg.jpg"
            alt="ORIXA Digital Agency"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
