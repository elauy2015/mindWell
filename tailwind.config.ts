import type { Config } from 'tailwindcss'


import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        principal: "#17c3ce",
        lightGrey: '#c2c2c2',
        backGroundGray: '#FAFAFA',
        bubbleGray: '#F5F5F5',
        bubbleBlack: "#212121",
        customRed: "#E76C6C"
      }
    },
  },
  plugins: [nextui()],
}
export default config
