import { ThemeProvider } from './components/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-[#FFF5FB] to-[#F0F8FF] dark:from-[#0a0e1f] dark:via-[#0f1729] dark:to-[#1a1f3a] text-gray-900 dark:text-white overflow-x-hidden transition-all duration-500">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}