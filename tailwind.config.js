/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        // You can add more custom values as needed
      },
      boxShadow: {
        'custom-inset': 'inset 0 4px 40px rgba(0, 0, 0, 0.05), inset 0 4px 4px rgba(0, 0, 0, 0.05), inset 0 -2px 2px rgba(0, 0, 0, 0.05)',
        'custom-inset-dark': 'inset 0 2px 40px rgba(0, 0, 0, 0.1), inset 0 2px 40px rgba(0, 0, 0, 0.1), inset 0 -4px 40px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        'custom': '0.5s',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

