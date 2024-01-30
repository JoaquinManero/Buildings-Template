import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#3368C0",
        secondary: "#EEF4FF",
        background: "#F7FAFF",
        darkBlue: "#1B4282",
        lightBlue: "#BDD6FF",
        dimBlue: "#F7FAFF",
        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
