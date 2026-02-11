import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2C1810",
        "espresso-light": "#3D2618",
        beige: "#E8DFD4",
        "beige-warm": "#D4C4B0",
        "forest": "#2D4A3E",
        "forest-light": "#3D5C4E",
        cream: "#F5F0E8",
        sand: "#C9B896",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(44, 24, 16, 0.08)",
        "soft-lg": "0 10px 40px rgba(44, 24, 16, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
