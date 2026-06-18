import React from 'react';
import { ShieldCheck, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
      <p style={{ marginBottom: '16px' }}>© {new Date().getFullYear()} Valentín Gelsomino</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
        <a href="https://github.com/ValentinGelso/" target="_blank" rel="noopener noreferrer" className="social-link">
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a href="https://www.vgelsomino.com.ar" target="_blank" rel="noopener noreferrer" className="social-link">
          <Globe size={18} />
          <span>Web</span>
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', opacity: 0.8 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={12} /> Seguro & Offline
        </span>
      </div>
    </footer>
  );
};

export default Footer;
