import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, .clickable');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', () => setHidden(false));
    window.addEventListener('mouseleave', () => setHidden(true));
    
    // Set up link hover events after a short delay to ensure DOM is ready
    setTimeout(handleLinkHoverEvents, 1000);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('mouseleave', () => setHidden(true));
    };
  }, []);

  return (
    <div className="cursor-container">
      <div 
        className={`custom-cursor ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      />
      <div 
        className={`cursor-follower ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      />
      <style jsx>{`
        .cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }
        .custom-cursor {
          position: fixed;
          width: 8px;
          height: 8px;
          background-color: #ff3333;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, background-color 0.2s;
          z-index: 9999;
        }
        .cursor-follower {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 51, 51, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.2s ease-out;
          z-index: 9998;
        }
        .custom-cursor.hidden, .cursor-follower.hidden {
          opacity: 0;
        }
        .custom-cursor.clicked {
          width: 16px;
          height: 16px;
          background-color: #ff3333;
        }
        .cursor-follower.clicked {
          width: 30px;
          height: 30px;
          border-width: 2px;
        }
        .custom-cursor.link-hovered {
          width: 16px;
          height: 16px;
          background-color: #ff3333;
        }
        .cursor-follower.link-hovered {
          width: 60px;
          height: 60px;
          border-width: 2px;
          border-color: rgba(255, 51, 51, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;