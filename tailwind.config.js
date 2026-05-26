/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          cream: "#FAF8F5",
          white: "#FFFFFF",
          gold: "#D4AF37",
          "gold-light": "#EEDEB2",
          "gold-dark": "#AA7C11",
          beige: "#F5F2EB",
          skin: "#FAF5ED",
          charcoal: "#1C1917",
          slate: "#4A4740",
        }
      },
      fontFamily: {
        luxury: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(212, 175, 55, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(212, 175, 55, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.03)',
      }
    },
  },
  plugins: [],
}
