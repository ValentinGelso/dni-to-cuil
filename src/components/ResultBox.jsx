import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

const ResultBox = ({ result, copied, handleCopy }) => {
  return (
    <AnimatePresence>
      {result && (
        <motion.div 
          initial={{ opacity: 0, height: 0, scale: 0.95 }}
          animate={{ opacity: 1, height: 'auto', scale: 1 }}
          exit={{ opacity: 0, height: 0 }}
          className="result-box animate-fade"
          style={{ overflow: 'hidden' }}
        >
          <span className="label" style={{ color: 'var(--text-muted)' }}>CUIL Calculado</span>
          <div 
            className="cuil-display"
            onClick={() => handleCopy(result)}
          >
            {result}
          </div>
          <div className="copy-hint" onClick={() => handleCopy(result)} style={{ cursor: 'pointer' }}>
            {copied ? (
              <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={14} /> ¡Copiado!
              </span>
            ) : (
              <>
                <Copy size={12} /> Click para copiar
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultBox;
