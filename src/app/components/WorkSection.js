// src/components/WorkSection.js
// NEW COMPONENT

import Image from 'next/image';
import Link from 'next/link'; // For Next.js internal links if you create detail pages

// Helper component for individual project cards (can be moved to its own file if it gets complex)
function ProjectCard({ title, description, imageUrl, tags, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <Image
        src={imageUrl} // Path relative to `public` folder, e.g., /images/project-thumbnail.jpg
        alt={`${title} project screenshot`}
        width={400} // Specify appropriate width
        height={250} // Specify appropriate height
        className="project-image" // Class for styling
        style={{ objectFit: 'cover' }} // Or 'contain' based on your image aspect ratio
      />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">View Live</a>}
          {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>}
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  // Data for your projects
  // You'll need to create screenshots for your AI projects and host them in `public/images/`
  // For liveLink, you'd need to deploy the Flask apps or link to a GitHub pages demo if applicable.
  const projects = [
    {
      title: "Aethelred's Orrery: Interactive 3D Website",
      description: "An immersive and fully responsive website featuring a celestial orrery theme. Users navigate a 3D solar system where each planet represents a content section, accessed via cinematic animations. Leverages react-three/fiber and GSAP for a dynamic user experience.",
      imageUrl: '/images/aethelreds-orrery-thumb.jpg', // Placeholder - add your screenshot here
      tags: ['React', 'Three.js', 'react-three/fiber', 'GSAP', '3D Web', 'Interactive Frontend'],
      liveLink: 'https://aethelreds-orrery.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/aethelreds-orrery' // Replace with your repo link
    },
    {
      title: 'Pulse: Competitive Intelligence Platform',
      description: 'A web platform that provides a complete competitive picture by tracking rivals\' key metrics, real-time news, and market trends. It turns raw data into actionable strategy with AI-powered summaries.',
      imageUrl: '/images/pulse (1).png', // **ACTION NEEDED**: Add a screenshot for Pulse to your `public/images` folder
      tags: ['React', 'Vite', 'JavaScript', 'Web Application', 'SaaS', 'Competitive Intelligence', 'AI'],
      liveLink: 'https://pulse-frontend-seven.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/pulse-frontend'
    },
    {
      title: 'Aether AI: Voice-to-Voice AI Agents',
      description: 'A platform for engaging in natural, real-time voice conversations with a universe of specialized AI agents, from personal companions to professional coaches.',
      imageUrl: '/images/aether-ai.png', // **ACTION NEEDED**: Add a screenshot for Aether AI to your `public/images` folder
      tags: ['Voice AI', 'Conversational AI', 'AI Agents', 'SaaS', 'React', 'Next.js'],
      liveLink: 'https://aether-ai-ashen.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/aether-ai'
    },
   {
      title: 'Elysian: Your AI Language Companion',
      description: 'A cutting-edge, AI-powered web application designed to offer a fully personalized and adaptive English learning experience with features like dynamic content, comprehensive skill development, and gamified learning.',
      imageUrl: '/images/Elysian.png', // **ACTION NEEDED**: Add a screenshot for Elysian to your `public/images` folder
      tags: ['React', 'Python', 'FastAPI', 'MongoDB', 'Firebase', 'AI', 'Full-Stack'],
      liveLink: 'https://elysian-nine.vercel.app/login', // Add your live link when available
      codeLink: 'https://github.com/notofearth1-jpg/Elysian' // Add your repo link when available
    },
    // Add your original "Project One" and "Project Two" from index.html here
    // Or create a 5th AI project if you prefer
    {
      title: 'Responder AI',
      description: 'A web application designed to streamline customer support by generating context-aware, AI-powered draft responses to customer inquiries. Features an interactive dashboard, confidence scoring, light/dark mode, and a scalable full-stack architecture.',
      imageUrl: '/images/responder-thumb.png',
      tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/ui",
    "Python",
    "FastAPI",
    "Pydantic",
    "Vercel",
    "Render",
    "Full-Stack",
    "AI-Powered",
    "Customer Support",
    "Web App"
  ],
     liveLink: "https://ai-support-responder-frontend.vercel.app/",
     codeLink: "https://github.com/vibhu-thankii/ai-support-responder-frontend"
     },
    
      {
        title: 'Democratise AI Platform',
        description: "A web-based platform designed to make machine learning (ML) workflows more accessible. Built with a Python FastAPI backend, SQLModel/PostgreSQL for data management, and a React/Vite frontend with Zustand and Tailwind CSS, the platform provides a unified environment for users to manage AI projects, discover pre-trained models and datasets, and initiate/track model training runs. Key features include user/project management, model and dataset hubs, and an integrated interface with dashboards and settings.",
        imageUrl: '/images/democratise-ai-thumb.png', // Update this once you've saved the image
        tags: [
          'Web Application', 
          'Full-Stack Development', 
          'Python', 
          'FastAPI', 
          'SQLModel', 
          'PostgreSQL', 
          'React', 
          'Vite', 
          'Zustand', 
          'Tailwind CSS', 
          'Machine Learning (ML)', 
          'AI Platform', 
          'Model Management', 
          'Dataset Management', 
          'Model Training', 
          'API Development'
        ],
        liveLink: '#', // Replace with your actual deployment link if available
        codeLink: '#'  // Replace with your actual code repository link
      }
  ];

  return (
    <section id="work">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
}
