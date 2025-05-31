// src/app/layout.js
// UPDATED: Added Cursor Glow Effect Logic

'use client'; // Required for using hooks like useEffect and useState

import './globals.css'; 
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react'; // Import useEffect and useState

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

// Metadata should be defined outside the component if not dynamic
// export const metadata = { // This needs to be handled differently if layout.js is a client component
//   title: 'Vibhu - Creative Technologist',
//   description: 'Portfolio of Vibhu, a Creative Technologist crafting seamless digital experiences.',
// };
// For client components, set title in Head component or in page.js metadata

export default function RootLayout({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || window.getComputedStyle(event.target).cursor === 'pointer') {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);

    // Set title dynamically for client component
    if (typeof window !== "undefined") {
        document.title = 'Vibhu - Creative Technologist';
    }


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <html lang="en" className={poppins.className}> 
      <body>
        <div 
          className={`cursor-glow ${isPointer ? 'pointer' : ''}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}