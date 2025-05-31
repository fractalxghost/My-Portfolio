// src/components/ExperienceSection.js
// UPDATED with more detailed illustrative content and skills

export default function ExperienceSection() {
  const experiences = [
    {
      align: 'left', // This class will be used by CSS for alternating layout on wider screens
      title: 'Co-Founder, Director & COO',
      company: 'Rejoice Media Private Limited',
      date: 'June 2023 – Present',
      description: 'Leading the development and comprehensive operations for "V Prosper," an innovative wellness platform designed to connect certified trainers (Yoga, counselling, Marma therapy, etc.) with individuals seeking wellness services.',
      responsibilities: [
        'Direct strategic oversight of all company operations, including Technology, Marketing & Sales initiatives, Financial planning, and continuous platform development.',
        'Define product vision, roadmap, and feature prioritization for V Prosper, ensuring alignment with market needs and business objectives.',
        'Manage and mentor cross-functional teams, fostering a collaborative environment to ensure timely delivery and high-quality execution of platform milestones.',
        'Successfully launched the MVP of V Prosper, leading to the onboarding of 50+ certified trainers and an initial user base of 200+ within the first three months.',
        'Implemented agile methodologies across tech and product teams, improving development velocity by an estimated 25%.'
      ],
      skillsUtilized: ['Operations Management', 'Product Management', 'Technical Leadership', 'Agile Methodologies', 'Team Leadership', 'Strategic Planning', 'Full-Stack Development Oversight']
    },
    {
      align: 'right',
      title: 'Software Development Engineer',
      company: 'Amazon | Berlin, Germany',
      date: 'April 2021 – May 2023 ',
      description: 'Contributed to the development of backend services for Amazon\'s European marketplace, focusing on seller analytics and inventory management systems using Java, Python, and AWS technologies.',
      responsibilities: [
        'Designed and implemented new microservices to process and visualize seller performance data, handling over 1 million daily transactions with high availability.',
        'Optimized database queries and caching strategies for critical inventory APIs, reducing average latency by 20% and improving system reliability.',
        'Collaborated in a global Agile team, participating in system design reviews, code reviews, and contributing to the successful deployment of three major feature releases.'
      ],
      skillsUtilized: ['Java', 'Python', 'AWS (Lambda, S3, DynamoDB)', 'Microservices', 'Distributed Systems', 'API Design', 'SQL/NoSQL', 'Agile (Scrum)', 'CI/CD']
    },
    {
      align: 'left',
      title: 'Software Engineer (Tools & Engine)',
      company: 'Ubisoft | Düsseldorf, Germany',
      date: 'July 2019 – March 2021 ',
      description: 'Worked within the core engine team contributing to the development of internal tools and engine components for "The Settlers" franchise, primarily using C++ and Python scripting.',
      responsibilities: [
        'Developed and maintained asset pipeline tools, automating processes for artists and designers and reducing asset integration time by an estimated 15%. ',
        'Contributed to the debugging and optimization of game engine subsystems, improving stability and performance on target platforms. ',
        'Collaborated closely with gameplay programmers and level designers to provide engine support and develop custom editor functionalities. '
      ],
      skillsUtilized: ['C++', 'Python (Scripting)', 'Game Engine Development', 'Tools Development', 'Debugging', 'Performance Optimization', 'Version Control (Perforce/Git)']
    }
  ];

  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${exp.align}`} key={index}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="date">{exp.date}</span>
              <p>{exp.description}</p>
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}
              {exp.skillsUtilized && exp.skillsUtilized.length > 0 && (
                <div className="skills-utilized">
                  <strong>Skills Utilized:</strong>
                  {exp.skillsUtilized.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}