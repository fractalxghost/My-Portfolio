// src/components/TechStackSection.js
// NEW COMPONENT

// No need to import React explicitly
export default function TechStackSection() {
    const techSkills = [
      'JavaScript (ES6+)', 'React / Next.js', 'Node.js', 'Python (Flask/Django)',
      'HTML5', 'CSS3 / SASS', 'AI Integration (LLMs)', 'API Design & Development',
      'Figma', 'Git & GitHub', 'MongoDB', 'SQL Databases',
      'Responsive Web Design', 'UI/UX Principles' // Add or modify as per your skills
    ];
  
    return (
      <section id="tech-stack">
        <h2>My Tech Stack</h2>
        <p>A glimpse into some of the primary tools and technologies I work with regularly to bring digital products to life.</p>
        <ul className="tech-list">
          {techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }