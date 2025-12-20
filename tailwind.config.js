/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Blue 800
          light: '#3B82F6',   // Blue 500
          dark: '#1E3A8A',    // Blue 900
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amber 500
          light: '#FBBF24',   // Amber 400
          dark: '#D97706',    // Amber 600
        },
        slate: {
          850: '#1e293b', // Custom dark slate
        },
        service: {
          web: '#1E40AF', // Blue
          design: '#9333EA', // Purple
          marketing: '#F59E0B', // Amber/Orange
          software: '#059669', // Emerald
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
