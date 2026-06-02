import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#17212b",
        steel: "#273849",
        safety: "#f59e0b",
        ember: "#ea580c",
        fog: "#f4f7f9"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 33, 43, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
