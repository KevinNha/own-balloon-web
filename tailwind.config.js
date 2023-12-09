/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        gravitas: ['Gravitas One', 'Cursive']
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}

