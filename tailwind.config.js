/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#E1E1E1",
        header: "#000000",
      },
      fontFamily: {
        apercu: ["apercu", "sans-serif"],
        media: ["media-bold", "sans-serif"],
      },
    },
  },
  // plugins: [require("daisyui")],

  // daisyui: {
  //   // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: false, // name of one of the included themes for dark mode
  // },
}
