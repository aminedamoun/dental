import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4A5D52",
          "green-dark": "#3A4B42",
          gold: "#C5A572",
          "gold-light": "#D4B688",
          cream: "#F7F5F0",
          ink: "#2A2A2A",
          mute: "#A0A0A0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "Lato", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
