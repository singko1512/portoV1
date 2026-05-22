/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#0d0000',
          900: '#1a0000',
          800: '#2d0505',
          700: '#4a0404',
          600: '#6b1010',
        },
        cream: {
          50: '#fdf5e6',
          100: '#f5e6d3',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', '"Arial Black"', 'sans-serif'],
      },
      boxShadow: {
        cinematic: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 40px rgba(127, 29, 29, 0.15)',
        glow: '0 0 30px rgba(220, 38, 38, 0.35), 0 0 60px rgba(127, 29, 29, 0.2)',
      },
      backgroundImage: {
        'red-mesh':
          'radial-gradient(ellipse at 20% 20%, rgba(127,29,29,0.35), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(69,10,10,0.4), transparent 50%)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
