import React from 'react';
import { Github, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '32px', 
      paddingTop: '24px', 
      borderTop: '1px solid var(--glass-border)',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      fontSize: '0.85rem', 
      color: 'var(--text-dim)' 
    }}>
      <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Desarrollado por Valentín Gelsomino
      </p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/ValentinGelso/" target="_blank" rel="noopener noreferrer" className="social-link">
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/valentingelsomino93" target="_blank" rel="noopener noreferrer" className="social-link">
          <Linkedin size={16} />
          <span>LinkedIn</span>
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
