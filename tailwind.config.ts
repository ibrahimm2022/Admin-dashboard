import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "primary": "#151c2c",
        "secondary": "#2e374a",
        "bg-soft" : "#182237",
        "burbile" : "#5d57c8",
        "red-1" : "#f00",
        "text": "#fff",
        "text-soft": "#b7bac1",  
      }
    },
  },
  plugins: [],
}satisfies Config;
export default config;
