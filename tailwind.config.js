
import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flyonui,
    flyonuiPlugin
  ],
}
