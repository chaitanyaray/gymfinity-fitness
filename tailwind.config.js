/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rawBg: '#050505',
        rawSurface: '#101010',
        rawCard: '#181818',
        rawPrimary: '#FF5A1F',
        rawSecondary: '#FFC107',
        rawAccent: '#00F5D4',
        rawWhite: '#FFFFFF',
        rawMuted: '#A5A5A5',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 15px rgba(255, 90, 31, 0.4)',
        'glow-orange-lg': '0 0 25px rgba(255, 90, 31, 0.6)',
        'glow-teal': '0 0 15px rgba(0, 245, 212, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #FF5A1F 0%, #FFC107 100%)',
        'gradient-dark': 'linear-gradient(180deg, #101010 0%, #050505 100%)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
