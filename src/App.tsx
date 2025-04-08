import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';
import BackgroundGif from './components/BackgroundGif.tsx';

const App: React.FC = () => {
  return (

    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      <BackgroundGif />
      <div className="relative z-10">
        <Header />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App