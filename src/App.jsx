import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LiveFeedPreview from './components/LiveFeedPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white font-sans selection:bg-[#0EA5A4]/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <LiveFeedPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
