const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        50: "50ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
      },
    },
  }
);
module.exports = animationDelay;