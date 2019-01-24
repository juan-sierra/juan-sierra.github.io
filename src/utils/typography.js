import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["700"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Merriweather", "serif"],
  bodyFontFamily: [
    "Open Sans",
    "San Francisco",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

export default typography;
