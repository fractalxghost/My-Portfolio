// src/components/HeroSection.js
// Component for your hero section.

// No need to import React explicitly
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-content">
        <Image
          src="/images/profile-placeholder.jpg" // Assumes image is in public/images/
          alt="Vibhu - Creative Technologist"
          className="profile-pic"
          width={150} // Ensure these are numbers
          height={150} // Ensure these are numbers
          priority
        />
        <h1>Hello, I&apos;m Vibhu.</h1>
        <h2>A Creative Technologist crafting seamless digital experiences where design meets code.</h2>
        <p className="tagline">
          I specialize in building intuitive, high-performance web applications and AI-powered tools.
          Let&apos;s create something impactful together.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="cta-button primary">View My Work</a>
          <a href="#contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}