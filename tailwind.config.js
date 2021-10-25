module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: ["bg-blue-400", "bg-pink-400", "bg-red-400", "bg-purple-400", "bg-green-400", "text-blue-400", "text-pink-400", "text-red-400", "text-purple-400", "text-green-400"],
  },
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
