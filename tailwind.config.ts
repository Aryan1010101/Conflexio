import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        dark: { 1: '#1C1F2E', 2: '#161925', 3: '#252A41', 4: '#1E2757' },
        blue: { 1: '#0E78F9', 2: '#3B82F6', 3: '#BFDBFE' },
        sky: { 1: '#C9DDFF', 2: '#ECF0FF', 3: '#F5FCFF' },
        orange: { 1: '#FF742E', 2: '#F97316', 3: '#FED7AA'},
        purple: { 1: '#830EF9', 2: '#8B5CF6', 3: '#DDD6FE'},
        yellow: { 1: '#F9A90E', 2: '#FACC15', 3: '#FEF9C3'},
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: { 'accordion-down': 'accordion-down 0.2s ease-out', 'accordion-up': 'accordion-up 0.2s ease-out' },
      backgroundImage: { hero: "url('/images/hero-background.jpg')" },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
