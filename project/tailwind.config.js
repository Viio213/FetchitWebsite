/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5A'
        },
        dark: {
          DEFAULT: '#292F36',
          light: '#3D4550'
        },
        offwhite: {
          DEFAULT: '#F7F7F7',
          dark: '#EFEFEF'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5'
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7'
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};