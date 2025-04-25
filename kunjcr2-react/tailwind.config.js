/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00f7ff",
        secondary: "#7f00ff",
        dark: "#0a192f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary)",
        "neon-strong":
          "0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary), 0 0 40px theme(colors.primary)",
        "neon-purple":
          "0 0 5px theme(colors.secondary), 0 0 20px theme(colors.secondary)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px #00f7ff, 0 0 20px #00f7ff" },
          "100%": {
            textShadow: "0 0 20px #00f7ff, 0 0 30px #00f7ff, 0 0 40px #00f7ff",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
