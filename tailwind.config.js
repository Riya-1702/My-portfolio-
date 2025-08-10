/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'neon-gray': '0 0 5px rgba(200, 200, 200, 0.5), 0 0 10px rgba(200, 200, 200, 0.3)',
        'neon-gray-hover': '0 0 8px rgba(200, 200, 200, 0.7), 0 0 15px rgba(200, 200, 200, 0.5), 0 0 20px rgba(200, 200, 200, 0.3)',
        'neon-black': '0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)',
        'neon-black-hover': '0 0 8px rgba(0, 0, 0, 0.7), 0 0 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)',
        'thin-black-neon': '0 0 2px rgba(0, 0, 0, 0.6), 0 0 4px rgba(0, 0, 0, 0.3)',
        'thin-black-neon-hover': '0 0 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(200, 200, 200, 0.5)' },
          '50%': { borderColor: 'rgba(230, 230, 230, 0.8)' },
        },
        'border-pulse-black': {
          '0%, 100%': { borderColor: 'rgba(0, 0, 0, 0.5)' },
          '50%': { borderColor: 'rgba(50, 50, 50, 0.8)' },
        },
      },
      animation: {
        'border-pulse': 'border-pulse 3s ease-in-out infinite',
        'border-pulse-black': 'border-pulse-black 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
