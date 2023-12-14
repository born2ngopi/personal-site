/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        'cerulean': { //#164fd4 https://uicolors.app/create
          '50': '#eef7ff',
          '100': '#daebff',
          '200': '#bddeff',
          '300': '#90c9ff',
          '400': '#5baaff',
          '500': '#3589fc',
          '600': '#1f69f1',
          '700': '#164fd4',
          '800': '#1944b4',
          '900': '#1b3c8d',
          '950': '#152656',
        },
      },
    },
  },
  plugins: [],
};