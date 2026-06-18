import React from 'react';

const Header = () => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '32px' }}>
      <div className="badge animate-fade" style={{ marginBottom: '16px' }}>
        Barroco Deco Apps
      </div>
      <h1 className="font-heading" style={{ fontSize: '2rem', marginBottom: '8px', background: 'linear-gradient(to right, #847029, #f8f9fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Calculador CUIL
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        Generación local segura de CUIL y CUIT
      </p>
    </header>
  );
};

export default Header;
