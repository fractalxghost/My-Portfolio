// src/components/ContactSection.js
// NEW COMPONENT

// No need to import React explicitly
export default function ContactSection() {
    // Replace placeholder links with your actual links
    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/vibhu-thankii', icon: 'fab fa-github' }, // Example, replace
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vibhu-thankii', icon: 'fab fa-linkedin-in' }, // Example, replace
      { name: 'Twitter/X', url: 'https://twitter.com/vibhuthankii', icon: 'fab fa-twitter' }, // Example, replace
      // { name: 'Behance/Dribbble', url: '#', icon: 'fab fa-behance' }, // Uncomment and replace if you have these
    ];
  
    // Replace with your actual email
    const email = "vibhu.thankii@gmail.com";
  
    return (
      <section id="contact">
        <h2>Let&apos;s Create Something Amazing!</h2>
        <p>
          Have an exciting project in mind, or just want to connect? I&apos;m always open to new opportunities and
          collaborations. Reach out, and let&apos;s discuss how we can work together.
        </p>
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <ul className="social-links">
          {socialLinks.map((link) => (
            <li key={link.name}>
              {/* For icons, you'd typically use an icon library like Font Awesome (imported globally or as React components)
                or SVGs. For simplicity here, we're just putting the name.
                If you have Font Awesome setup, you could use: <i className={link.icon}></i> {link.name}
              */}
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name} {/* Replace with actual icons later if desired */}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }