import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C53030",
        "background-light": "#FFFFFF",
        "background-dark": "#1A202C",
        "card-light": "#F7FAFC",
        "card-dark": "#2D3748",
        "text-light": "#2D3748",
        "text-dark": "#E2E8F0",
        "text-muted-light": "#718096",
        "text-muted-dark": "#A0AEC0"
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem"
      }
    }
  },
  plugins: [forms, typography]
};
