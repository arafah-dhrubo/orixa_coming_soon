import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;