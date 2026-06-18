import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Variants = ({ variants }) => {
  return (
    <AnimatePresence>
      {variants && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}
        >
          <h3 className="label" style={{ marginBottom: '12px' }}>Todas las variantes</h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {variants.map((v) => (
              <div 
                key={v.prefix} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.9rem'
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>Prefijo {v.prefix}:</span>
                <strong style={{ letterSpacing: '0.05em' }}>{v.cuil}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Variants;
