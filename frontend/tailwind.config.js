/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1e3a8a',
        'dark-navy': '#1e2a4a',
        'light-navy': '#3b82f6',
        'orange': '#FF6600',
        'dark-orange': '#e55a00',
        'charcoal': '#333333',
        'light-charcoal': '#4a5568',
        'professional-gray': '#fafafa',
        'card-gray': '#ffffff',
        'border-gray': '#e2e8f0',
        'text-gray': '#64748b',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};