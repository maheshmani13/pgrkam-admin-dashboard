/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#D5E2CD",
        darkorange: "#ff8c00",
        orange: "#ffa87c",
        darkblue: "#7893ff",
        lightblue: "#D8E3FF",
        lightyellow: "#fffac6",
        white: "#FFFFFF",
        bgyellow: "#F2C48B",
        logogreen: "#017E52",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
