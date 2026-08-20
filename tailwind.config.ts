import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDF8E3',
          100: '#FAF0BF',
          200: '#F5DD81',
          300: '#ECC84E',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#B8891E',
          700: '#9B7D1C',
          800: '#7A6117',
          900: '#5C4910',
          DEFAULT: '#D4AF37',
        },
        dark: {
          50:  '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          600: '#2A2A2A',
          700: '#1E1E1E',
          800: '#141414',
          900: '#0C0C0C',
          DEFAULT: '#111111',
        },
        cream: {
          DEFAULT: '#FAF5E4',
          dark:    '#F0E4C4',
          darker:  '#E8D9AA',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        script:  ['"Dancing Script"', 'cursive'],
        body:    ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #C9A227 0%, #F5DD81 50%, #C9A227 100%)',
        'dark-gradient':  'linear-gradient(180deg, #0C0C0C 0%, #1E1E1E 100%)',
      },
      keyframes: {
        'float-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        'wa-ping': {
          '75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        scroll: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'float-up':  'float-up 600ms cubic-bezier(0.23,1,0.32,1) both',
        'fade-in':   'fade-in 500ms ease-out both',
        'wa-ping':   'wa-ping 1.6s cubic-bezier(0,0,0.2,1) infinite',
        'scroll':    'scroll 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

export default config
