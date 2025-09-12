import Image from 'next/image';

// Helper component for individual project cards
function ProjectCard({ title, description, imageUrl, tags, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <Image
        src={imageUrl}
        alt={`${title} project screenshot`}
        width={400}
        height={220} // Adjusted to match CSS for consistency
        className="project-image"
        style={{ objectFit: 'cover' }}
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
          {liveLink && liveLink !== '#' ? (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
          ) : liveLink === '#' ? (
            <span className="wip-status">Work in Progress</span>
          ) : null}
          
          {codeLink && codeLink !== '#' && (
             <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
          )}
        </div>
      </div>
    </div>
  );
}


export default function WorkSection() {
  // Data for your projects
  const projects = [
    {
      title: "Aethelred's Orrery: Interactive 3D Website",
      description: "An immersive website featuring a celestial orrery theme. Users navigate a 3D solar system where each planet represents a content section, accessed via cinematic animations.",
      imageUrl: '/images/aethelreds-orrery-thumb.jpg',
      tags: ['React', 'Three.js', 'react-three/fiber', 'GSAP', '3D Web', 'Interactive Frontend'],
      liveLink: 'https://aethelreds-orrery.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/aethelreds-orrery'
    },
    {
      title: 'Pulse: Competitive Intelligence Platform',
      description: 'A web platform that provides a complete competitive picture by tracking rivals\' key metrics, real-time news, and market trends, turning data into actionable strategy.',
      imageUrl: '/images/pulse (1).png',
      tags: ['React', 'Vite', 'JavaScript', 'SaaS', 'Competitive Intelligence', 'AI'],
      liveLink: 'https://pulse-frontend-seven.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/pulse-frontend'
    },
    {
      title: 'Aether AI: Voice-to-Voice AI Agents',
      description: 'A platform for engaging in natural, real-time voice conversations with a universe of specialized AI agents, from personal companions to professional coaches.',
      imageUrl: '/images/aether-ai.png',
      tags: ['Voice AI', 'Conversational AI', 'AI Agents', 'SaaS', 'React', 'Next.js'],
      liveLink: 'https://aether-ai-ashen.vercel.app/',
      codeLink: 'https://github.com/vibhu-thankii/aether-ai'
    },
    {
      title: 'Elysian: Your AI Language Companion',
      description: 'An AI-powered web app offering a personalized and adaptive English learning experience with dynamic content, skill development, and gamified learning.',
      imageUrl: '/images/Elysian.png',
      tags: ['React', 'Python', 'FastAPI', 'MongoDB', 'AI', 'Full-Stack'],
      liveLink: 'https://elysian-nine.vercel.app/login',
      codeLink: 'https://github.com/notofearth1-jpg/Elysian'
    },
    {
      title: 'Responder AI',
      description: 'A web app to streamline customer support by generating context-aware, AI-powered draft responses. Features an interactive dashboard and confidence scoring.',
      imageUrl: '/images/responder-thumb.png',
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "AI-Powered"],
      liveLink: "https://ai-support-responder-frontend.vercel.app/",
      codeLink: "https://github.com/vibhu-thankii/ai-support-responder-frontend"
    },
    {
      title: 'Democratise AI Platform',
      description: "A web platform designed to make machine learning (ML) workflows more accessible, providing a unified environment for managing projects, models, and datasets.",
      imageUrl: '/images/democratise-ai-thumb.png',
      tags: ['Python', 'FastAPI', 'SQLModel', 'PostgreSQL', 'React', 'Vite', 'ML'],
      liveLink: '#',
      codeLink: '#'
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
