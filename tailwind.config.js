import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        'dark-gray': '#767676',
        'soft-gray': '#E3E3E3',
        'light-gray': '#E6E6E6',
        white: '#FDFDFD',
      },
      boxShadow: {
        'custom-soft': '5px 5px 15px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(to right, #D8D8D8 0%, #777777 25%, #5E5E5E 50%, #777777 75%, #D8D8D8 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hover-line': {
          position: 'relative',
          display: 'inline-block',
          transition: 'color 0.5s',
        },
        '.hover-line::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '3px',
          backgroundColor: '#000000',
          transform: 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 0.5s',
        },
        '.hover-line:hover': {
          color: '#000000',
        },
        '.hover-line:hover::after': {
          transform: 'scaleX(1)',
        },
      });

      addUtilities({});
    }),
    typography,
  ],
};
