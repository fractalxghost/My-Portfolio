// src/app/page.js
// This is your main homepage.

// No need to import React explicitly in Next.js 13+ App Router for simple components
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'; 
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection'; // Import the new ContactSection
import Footer from './components/Footer'; // Import the new Footer

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <TechStackSection />
        <ContactSection /> {/* Use the ContactSection component */}
      </main>
      <Footer /> {/* Use the Footer component */}
    </>
  );
}