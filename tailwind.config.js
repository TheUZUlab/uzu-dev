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
        'light-gray': '#E6E6E6',
        white: '#FDFDFD',
      },
      boxShadow: {
        'custom-soft': '5px 5px 15px rgba(0, 0, 0, 0.15)',
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
          backgroundColor: '#405d72',
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

      addUtilities({
        '.text-base': {
          fontSize: '16px',
          lineHeight: '1.5',
          fontWeight: '500',
        },
        '.text-lg': {
          fontSize: '20px',
          lineHeight: '1.75',
          fontWeight: '800',
        },
        '.text-xl': {
          fontSize: '24px',
          lineHeight: '2',
          fontWeight: '800',
        },
      });
    }),
    typography,
  ],
};
