import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
     colors: {
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#FFDE59',
        red: {
          100: '#E40000',
          200: '#9E1C1C',
        },
        green: {
          100: '#00BF63',
          200: '#006E6D',
          300: '#00D4D2',
        },
        grey: {
          100: '#60857A',
          200: '#CEDCB7',
        }
     },
  },
  plugins: [],
};
export default config;
