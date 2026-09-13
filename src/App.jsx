import { useState } from 'react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';

import { ThemeProvider } from './context/ThemeContext';
import IntroScreen from './components/IntroScreen';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProcessSection from './components/ProcessSection';
import GithubSection from './components/GithubSection';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <Layout>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <ProcessSection />
        <GithubSection />
        <EducationCertifications />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
