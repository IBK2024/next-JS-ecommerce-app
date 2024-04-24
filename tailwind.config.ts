import type {Config} from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#2c2c2c',
        accent: '#4356ff',
        smallNavbar: 'rgba(0,0,0,0.3)',
      },
      height: {
        navbar: '60px',
      },
      width: {
        smallNavbar: '300px',
        smallNavbar2: 'unset',
      },
      padding: {
        '1/2': '2px',
      },
    },
  },
  plugins: [],
};
export default config;
