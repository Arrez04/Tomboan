import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'heritage-brown': 'var(--heritage-brown)',
        'terracotta': 'var(--terracotta)',
        'golden': 'var(--golden)',
        'warm-cream': 'var(--warm-cream)',
        'earth-dark': 'var(--earth-dark)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'batik-pattern': 'var(--batik-pattern)',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
