// src/components/Footer.js
// NEW COMPONENT

// No need to import React explicitly
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>&copy; {currentYear} Vibhu. Crafted with passion and code.</p>
      </footer>
    );
  }