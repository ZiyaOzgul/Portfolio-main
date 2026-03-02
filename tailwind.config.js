/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252926",
        secondary: "#A7B1A9",
        tertiary: "#333834",
        "black-100": "#333834",
        "black-200": "#252926",
        "white-100": "#D6E0D9",
        accent: "#B5D6B8",
        "accent-light": "#C8E2ED",
        "accent-dark": "#8FB89A",
        warm: "#C0AE96",
        "glass-bg": "rgba(37, 41, 38, 0.6)",
        "glass-border": "rgba(181, 214, 184, 0.15)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1a1d1b",
        glow: "0 0 20px rgba(181, 214, 184, 0.3)",
        "glow-lg": "0 0 40px rgba(181, 214, 184, 0.4)",
        "glow-sm": "0 0 10px rgba(181, 214, 184, 0.2)",
        "glow-warm": "0 0 20px rgba(192, 174, 150, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background-1.png')",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "typing-cursor": "blink 1s step-end infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(181, 214, 184, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(181, 214, 184, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
