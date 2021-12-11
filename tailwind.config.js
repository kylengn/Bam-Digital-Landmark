module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/img/banner.jpg')",
        residences: "url('/src/img/lamp.jpg')",
        virtualTour: "url('/src/img/virtual-tour.png')",
      },
      fontSize: {
        // xTiny: "1.4rem",
      },
      letterSpacing: {
        extraWide: "0.3rem",
        life: "3rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1c1c26",
        secondary: "#ceaf70",
        danger: "#e3342f",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#1c1c26",
        secondary: "#ceaf70",
        danger: "#e3342f",
      }),
    },
  },
  variants: {
    scrollBehavior: ["motion-safe", "motion-reduce", "responsive"],
    extend: { borderStyle: ["hover"] },
  },
  plugins: [require("tailwind-scroll-behavior")()],
};
