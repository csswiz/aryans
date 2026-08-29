/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#FDF5F6',
          100: '#FCE8EA',
          200: '#F7D0D4',
          300: '#EEA6AE',
          400: '#DF6D7A',
          500: '#C7384A',
          600: '#A92234',
          700: '#8E1727',
          800: '#751421',
          900: '#5F121C',
          950: '#3D070E',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#FAF8F2',
          200: '#F4F0E6',
          300: '#EBE5D6',
          400: '#DCD4C0',
          500: '#C7BCA3',
          900: '#1C1917',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D4',
          200: '#EDE0A8',
          300: '#E1CB76',
          400: '#D5B44C',
          500: '#C49E31',
          600: '#A67F23',
          700: '#7D5C1C',
          800: '#64481C',
          900: '#4D371A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'prestige': '0 20px 40px -15px rgba(95, 18, 28, 0.08), 0 0 1px 1px rgba(0,0,0,0.04)',
        'prestige-lg': '0 30px 60px -20px rgba(95, 18, 28, 0.16), 0 0 1px 1px rgba(0,0,0,0.06)',
        'gold-glow': '0 0 25px rgba(196, 158, 49, 0.28)',
        'royal-glow': '0 10px 30px rgba(142, 23, 39, 0.25)',
      },
      backgroundImage: {
        'crest-pattern': "radial-gradient(circle at 1px 1px, rgba(142, 23, 39, 0.05) 1px, transparent 0)",
        'gold-shimmer': "linear-gradient(110deg, #C49E31 0%, #F5DF88 45%, #C49E31 70%)",
        'royal-gradient': "linear-gradient(135deg, #751421 0%, #5F121C 50%, #3D070E 100%)",
        'ivory-gradient': "linear-gradient(180deg, #FFFFFF 0%, #FAF8F2 100%)",
      }
    },
  },
  plugins: [],
}
