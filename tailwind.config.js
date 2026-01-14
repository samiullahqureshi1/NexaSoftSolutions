/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
extend: {
  animation: {
    marquee: "marquee 25s linear infinite",
      marqueeLeft: "marqueeLeft 35s linear infinite",
    marqueeRight: "marqueeRight 40s linear infinite",
  },
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-50%)" },
    },
     marqueeLeft: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-50%)" },
    },
    marqueeRight: {
      "0%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0%)" },
    },
  },
},
  },
  plugins: [],
}
