import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
      <p>© {new Date().getFullYear()} Valentín Gelsomino</p>
      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={12} /> Seguro & Offline
        </span>
      </div>
    </footer>
  );
};

export default Footer;
