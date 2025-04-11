/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerbg: "#131313",
        footertext: "#FFFFFF",
        textcol: "#0C2D57",
        bgcolor: "#09264B",
        text_col: "#131842",
        text_black: "#000000",
        customblack: "#262626",
        customblacks: "#1D1D1D",
        pearl_black: "#0F1620",
        norm_black: "#212121",
        Light_Peach: "#FCDDBA",
        orange_text: "#F15D2C",
        mapbg: "#2AA7EF",
        customorange: "#F15D2C",
        orange: "#FFA43C",
        customgray: "#484848",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"], 
        lato: ["var(--font-lato)"], 
      },
    },
  },
  plugins: [],
};