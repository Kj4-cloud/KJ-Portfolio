/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0B1120',
          800: '#111827',
          700: '#1E293B',
          600: '#334155',
        },
        accent: {
          blue: '#60A5FA',
          purple: '#A855F7',
          cyan: '#06B6D4',
          light: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '40px',
        'glass-heavy': '60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'aurora-1': 'aurora-1 15s ease-in-out infinite',
        'aurora-2': 'aurora-2 20s ease-in-out infinite',
        'aurora-3': 'aurora-3 25s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'draw-line': 'draw-line 1.5s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(50px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'aurora-1': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) rotate(120deg) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg) scale(0.9)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) rotate(-120deg) scale(1.15)' },
          '66%': { transform: 'translate(30px, -40px) rotate(-240deg) scale(0.85)' },
        },
        'aurora-3': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(20px, 40px) rotate(60deg) scale(1.05)' },
          '66%': { transform: 'translate(-30px, -20px) rotate(180deg) scale(0.95)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-glow': '0 0 40px rgba(96, 165, 250, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-glow-purple': '0 0 40px rgba(168, 85, 247, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
