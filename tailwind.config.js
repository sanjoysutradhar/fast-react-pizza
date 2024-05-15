/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mone, monospace",
    },
    extend: {
      // colors: {
      //   pizza: "#123456",
      // },
      fontSize: {
        huge: ["8rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
