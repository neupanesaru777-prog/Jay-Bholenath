import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#04060f',
          900: '#071326',
          800: '#0c1f3b'
        },
        saffron: '#f6a623',
        ember: '#ff7a18'
      },
      boxShadow: {
        aura: '0 0 30px rgba(59,130,246,0.35)',
        saffron: '0 0 24px rgba(246,166,35,0.45)'
      },
      backgroundImage: {
        'cosmic-radial': 'radial-gradient(circle at top, rgba(37,99,235,0.30), rgba(4,6,15,1) 42%, rgba(0,0,0,1) 100%)'
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.9', textShadow: '0 0 10px rgba(246,166,35,0.35), 0 0 24px rgba(59,130,246,0.35)' },
          '50%': { opacity: '1', textShadow: '0 0 18px rgba(246,166,35,0.65), 0 0 36px rgba(59,130,246,0.65)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite'
      },
      fontFamily: {
        heading: ['Palatino', '"Book Antiqua"', 'Georgia', 'ui-serif', 'serif'],
        body: ['"Trebuchet MS"', '"Segoe UI"', 'Tahoma', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
