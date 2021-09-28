const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const colors = {
  yellow: {
    700: "#FFCE00",
    500: "#FFDC48",
    300: "#FFE783",
    100: "#FFF1B7"
  },
  pink: {
    700: "#DE2085",
    500: "#E74099",
    300: "#F173B6",
    100: "#FFB5DC"
  },
  green: {
    700: "#71B739",
    500: "#8BCE55",
    300: "#A2E170",
    100: "#C1EF9C"
  },
  black: {
    900: "#1F1F1F",
    700: "#333333",
    500: "#666666",
    300: "#B3B3B3",
    100: "#DAD8D8"
  }
};

module.exports = {
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {
        body: "#F9F9F9",
        ...colors
      },
      colors: {
        ...colors
      },
      boxShadow: {
        down: "-3px 3px 0px rgba( 0, 0, 0, 1)",
        top: "-4px -4px 0px rgba( 0, 0, 0, 1)"
      },
      fontSize: {
        title: "40px"
      },
      letterSpacing: {
        title: "-1.5px",
        button: "-1px",
        text: "-0.25px"
      },
      scale: {
        "-1": "-1"
      },
      rotate: {
        "-21": "-21.7deg"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: theme("backgroundColor.body"),
          fontFamily: theme("fontFamily.body")
        }
      });
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
