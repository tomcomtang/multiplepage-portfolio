import { useEffect, useState, useRef } from 'react';

export default function TechBackground() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initialize theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Add event listeners
    const container = containerRef.current;
    if (container) {
      const handleMouseEnter = () => {
        console.log('Mouse entered');
        container.style.transform = 'translate(-50%, -50%) scale(1.25)';
      };

      const handleMouseLeave = () => {
        console.log('Mouse left');
        container.style.transform = 'translate(-50%, -50%) scale(1)';
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Test overlay layer */}
      <div 
        className="fixed left-[270px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] 
          bg-blue-500/50 hover:bg-green-500/50 transition-colors duration-300
          z-[9999] cursor-pointer"
        onClick={() => alert('clicked!')}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          HOVER ME
        </div>
      </div>

      {/* Original background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          ref={containerRef}
          className="absolute left-[270px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] 
            bg-red-500/20 cursor-pointer"
          style={{
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src="/assets/images/tech-background.svg"
            alt="Tech Background"
            className="w-full h-full opacity-50"
          />
        </div>
      </div>
    </>
  );
} 