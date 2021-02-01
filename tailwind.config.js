module.exports = {
  purge: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  darkMode: false,
  darkSelector: '.dark-mode',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-dark-mode')()],
};
