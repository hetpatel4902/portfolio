import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: "#0d141a",
        accent: "#67e8f9",
        ink: "#070b10",
      },
      boxShadow: {
        panel: "0 20px 45px rgba(5, 10, 14, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
