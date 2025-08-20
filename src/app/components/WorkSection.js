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
      title: 'Mini FAQ Chatbot',
      description: 'An interactive chatbot (Flask backend, mocked responses) with a light, friendly UI, designed to answer frequently asked questions on a specific topic.',
      imageUrl: '/images/faq-chatbot-thumb.png', // Placeholder
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Chat UI'],
      liveLink: '#',
      codeLink: 'https://github.com/yourusername/faq_chatbot'
    },
    {
      title: 'Product Description Generator',
      description: 'A tool (Flask backend, mocked AI) for generating product descriptions based on product name, features, and target customer. Features a professional SaaS-like UI.',
      imageUrl: '/images/product-desc-generator-thumb.png', // Placeholder
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Copywriting Tool'],
      liveLink: '#',
      codeLink: 'https://github.com/yourusername/product_description_generator'
    },
    // Add your original "Project One" and "Project Two" from index.html here
    // Or create a 5th AI project if you prefer
    {
        title: 'Audio Chatting AI Agent', // Or your chosen title
        description: 'An interactive mobile application built with Expo React Native, allowing users to engage in voice conversations with various AI agents. Features voice input/output, speech-to-text, text-to-speech, and a selection screen for different AI personalities.',
        imageUrl: '/images/ai-audio-agent-expo-thumb.png', // The image we generated
        tags: [
          'Expo',
          'React Native',
          'AI Agent',
          'Voice UI',
          'Speech Recognition (STT)',
          'Text-to-Speech (TTS)',
          'Expo AV',
          'Expo Speech',
          'Mobile App',
          'JavaScript',
          // 'TypeScript', // If you used TypeScript in parts like ConvAI.tsx
          // '@11labs/react', // If you want to highlight specific AI/voice services used
          'Conversational AI'
        ],
        liveLink: 'https://dynamic-trifle-d0c910.netlify.app/', // If you deploy a web version
        codeLink: 'https://github.com/fractalxghost/AI_agents' // Your GitHub link
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
