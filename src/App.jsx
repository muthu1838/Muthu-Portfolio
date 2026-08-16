import { useEffect } from 'react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import Layout from './components/Layout'
// Import components (to be created)
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GithubSection from './components/GithubSection'
import EducationCertifications from './components/EducationCertifications'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <GithubSection />
      <EducationCertifications />
      <Contact />
    </Layout>
  )
}

export default App
