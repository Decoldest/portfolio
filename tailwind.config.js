/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        jiggle: 'jiggle 0.75s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [],
};
