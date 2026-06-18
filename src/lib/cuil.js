export function normalizeDNI(raw) {
  const only = (raw || "").replace(/\D+/g, '');
  if (only.length < 7 || only.length > 8) return null;
  return only.padStart(8, '0');
}

export function computeCheckDigit(prefix, body8) {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const nums = (String(prefix) + body8).split('').map(n => parseInt(n, 10));
  const sum = nums.reduce((a, n, i) => a + n * weights[i], 0);
  let dv = 11 - (sum % 11);
  if (dv === 11) dv = 0;
  return dv;
}

export function buildCUIL(initialPrefix, dni8) {
  let prefix = parseInt(initialPrefix, 10);
  let dv = computeCheckDigit(prefix, dni8);
  
  if (dv === 10) {
    prefix = 23;
    dv = computeCheckDigit(prefix, dni8);
    if (dv === 10) dv = 9;
  }
  
  return `${prefix}-${dni8}-${dv}`;
}

export function getAllVariants(dni8) {
  return [20, 23, 27].map(p => ({
    prefix: p,
    cuil: buildCUIL(p, dni8)
  }));
}
