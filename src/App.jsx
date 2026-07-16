import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeToggle />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
