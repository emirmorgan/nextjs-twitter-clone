/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
      },
      fontFamily: {
        chirp: ["TwitterChirp", "sans-serif"],
        "chirp-extended": ["TwitterChirpExtendedHeavy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
