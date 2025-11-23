/** @type {import('tailwindcss').Config} */
module.exports = {
  files: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      // ⭐ Animasi custom
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      // ⭐ Optional: shadow sedikit lebih lembut
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
};
