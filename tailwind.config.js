/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./index.html",
    ],
  },
  variants: {},
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Bruno Ace SC", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #050014 0%, rgba(1, 2, 30, 0.89) 100%)",
      },
    },
  },
};
