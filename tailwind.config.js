module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
      honk: "Honk",
      nabla: "Nabla",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",

        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",

        accent: "#EEF7F9",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    backgroundImage: (theme) => ({
      "portfolio-background":
        "url('/Users/azul/Desktop/myStuff/portfolio/myportfolio/src/img/background12.gif')",
    }),
  },
  plugins: [],
};
