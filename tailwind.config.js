/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          blueHover: '#2563EB',
          dark: '#0A0A0A',
          card: '#111111',
          card2: '#1A1A27',
          textMain: '#FFFFFF',
          textSec: '#A1A1AA',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(108, 99, 255, 0.8)' },
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        'gradient-dark': 'linear-gradient(135deg, #111111, #0A0A0A)',
      }
    },
  },
  plugins: [],
}
