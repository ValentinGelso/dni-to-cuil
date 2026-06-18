import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { normalizeDNI, buildCUIL, getAllVariants } from './lib/cuil';

import Header from './components/Header';
import CuilForm from './components/CuilForm';
import ResultBox from './components/ResultBox';
import Variants from './components/Variants';
import Footer from './components/Footer';

const App = () => {
  const [dni, setDni] = useState('');
  const [gender, setGender] = useState('23');
  const [result, setResult] = useState(null);
  const [variants, setVariants] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleCalculate = (showAll = false) => {
    const cleanDni = normalizeDNI(dni);
    
    if (!cleanDni) {
      setError('⚠️ Ingresá un DNI válido (7 u 8 dígitos)');
      setResult(null);
      setVariants(null);
      return;
    }

    setError('');
    const cuil = buildCUIL(gender, cleanDni);
    setResult(cuil);
    
    if (showAll) {
      const all = getAllVariants(cleanDni);
      setVariants(all);
    } else {
      setVariants(null);
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#847029', '#8b1d40', '#ffffff']
    });
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCalculate();
  };

  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass glass-card"
      >
        <Header />
        
        <CuilForm 
          dni={dni}
          setDni={setDni}
          gender={gender}
          setGender={setGender}
          error={error}
          handleCalculate={handleCalculate}
          handleKeyDown={handleKeyDown}
        />

        <ResultBox 
          result={result}
          copied={copied}
          handleCopy={handleCopy}
        />

        <Variants variants={variants} />

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
