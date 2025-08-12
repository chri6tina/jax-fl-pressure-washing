/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004e7c', // Deep ocean blue
          dark: '#003a5e',
          light: '#006699'
        },
        secondary: {
          DEFAULT: '#00b3b8', // Bright turquoise
          dark: '#0099a3',
          light: '#00ccd1'
        },
        accent: {
          eco: '#5faa46', // Leaf green
          attention: '#f15a24', // Sunset orange
        },
        neutral: {
          text: '#333333', // Dark gray
          white: '#ffffff', // Crisp white
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
