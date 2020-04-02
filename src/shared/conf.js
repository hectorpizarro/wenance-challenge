const apiUrl = 'https://swapi.co/api/people';
export const theme = {
  borderRadius: '6px',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  fontSize: {
    tiny: '0.75rem',
    small: '1rem',
    medium: '1.25rem',
    large: '1.5rem'
  },
  // Color palette copied from TailWindCSS
  color: {
    gray200: '#edf2f7',
    gray300: '#e2e8f0',
    gray400: '#cbd5e0',
    gray500: '#a0aec0',
    gray600: '#718096',
    gray700: '#4a5568',
    red: '#e53e3e',
    blue: '#4299e1'
  },
  dim: {
    d1: '0.25rem',
    d2: '0.5rem',
    d3: '0.75rem',
    d4: '1rem',
    d5: '1.25rem',
    d6: '1.5rem',
    d7: '2rem',
    d8: '2.5rem',
    d9: '3rem',
    d10: '4rem'
  }
};

const conf = {
  apiUrl
};

export default conf;
