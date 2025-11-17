import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompareForm from './components/CompareForm';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <CompareForm />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default App
