/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        bound: "#52bddd",
      },
      fontFamily: {
        general: ["General Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
