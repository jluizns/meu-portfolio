
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '0 8%' }}>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;