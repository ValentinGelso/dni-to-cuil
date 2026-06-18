import React from 'react';
import { Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '32px', 
      paddingTop: '24px', 
      borderTop: '1px solid var(--glass-border)',
      display: 'flex', 
      flexWrap: 'wrap',
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: '16px',
      fontSize: '0.85rem', 
      color: 'var(--text-dim)' 
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Valentín Gelsomino
      </p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/ValentinGelso/" target="_blank" rel="noopener noreferrer" className="social-link">
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a href="https://www.vgelsomino.com.ar" target="_blank" rel="noopener noreferrer" className="social-link">
          <Globe size={16} />
          <span>Web</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
