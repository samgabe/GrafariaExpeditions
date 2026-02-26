/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'safari-green': '#2d5016',
        'safari-orange': '#ff6b35',
        'safari-charcoal': '#333333',
        'safari-beige': '#f5f5dc'
      },
      fontFamily: {
        'serif': ['Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
