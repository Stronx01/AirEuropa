/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2d69e1",

          "secondary": "#224faa",

          "accent": "#f6f6f6",

          "neutral": "#2d69e1",

          "base-100": "#ffffff",

          "info": "#00fff0",

          "success": "#cb6cdd",

          "warning": "#ffb516",

          "error": "#ef3e34",
        },
      },
    ],
  },
}
