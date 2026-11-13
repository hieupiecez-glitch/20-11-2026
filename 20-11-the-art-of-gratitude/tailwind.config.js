/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: { DEFAULT: '#080d1a', deep: '#050811', soft: '#0f172a', card: '#111a2e' },
        ivory: { DEFAULT: '#f6f1e7', warm: '#ede4d3', muted: '#cfc5b4' },
        gold: { DEFAULT: '#c9a45c', light: '#e2c585', dark: '#9a7836' },
        champagne: { DEFAULT: '#f3e5ab', glow: '#faeecd' },
        burgundy: { DEFAULT: '#6e2c3b', deep: '#4d1d28', light: '#8f3d4f' },
        dusty: { DEFAULT: '#6c859d', light: '#94acc4', dark: '#3e5266' }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        hand: ['"Dancing Script"', 'cursive']
      }
    }
  },
  plugins: []
};
