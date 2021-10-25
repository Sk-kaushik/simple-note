module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};
