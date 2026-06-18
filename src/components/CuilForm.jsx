import React from 'react';
import { User, ShieldCheck, ChevronDown, Info, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const CuilForm = ({ dni, setDni, gender, setGender, error, handleCalculate, handleKeyDown }) => {
  return (
    <div className="form">
      <div className="input-group">
        <label className="label">
          <User size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Número de DNI
        </label>
        <input 
          type="text" 
          inputMode="numeric"
          placeholder="Ej: 12.345.678"
          className="input-field"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {error && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '8px' }}
          >
            {error}
          </motion.p>
        )}
      </div>

      <div className="input-group">
        <label className="label">
          <ShieldCheck size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Tipo / Prefijo
        </label>
        <div style={{ position: 'relative' }}>
          <select 
            className="input-field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="20">Masculino / Tradicional (20)</option>
            <option value="27">Femenino / Tradicional (27)</option>
            <option value="23">Sin Binario / Automático (23)</option>
          </select>
          <ChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-dim)' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Info size={12} /> Sugerimos usar 23 para evitar conflictos.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '12px', marginTop: '32px' }}>
        <button className="btn-primary" onClick={() => handleCalculate(false)}>
          <Calculator size={18} /> Calcular
        </button>
        <button className="btn-secondary" onClick={() => handleCalculate(true)}>
          Ver todos
        </button>
      </div>
    </div>
  );
};

export default CuilForm;
