const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    underlineOffset: {
      sm: "2px",
      md: "4px",
      lg: "6px",
    },
    extend: {
      colors: {
        primary: "#5138EE",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-underline-utils")],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
