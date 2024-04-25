import type {Config} from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '900px',
      phone: '500px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#2c2c2c',
        accent: '#4356ff',
        smallNavbar: 'rgba(0,0,0,0.3)',
      },
      height: {
        navbar: '60px',
        hero: 'calc(100vh - 60px)',
      },
      width: {
        smallNavbar: '300px',
        notFoundImage: '280px',
      },
      padding: {
        '1/2': '2px',
      },
      animation: {
        notFoundSlideDown: 'notFoundSlideDown 0.4s linear',
        notFoundSlideUp: 'notFoundSlideUp 0.4s linear',
      },
      keyframes: {
        notFoundSlideDown: {
          from: {
            transform: 'translate(-50px,-30px)',
          },
          to: {
            transform: 'translate(0px)',
          },
        },
        notFoundSlideUp: {
          from: {
            transform: 'translateY(50px)',
          },
          to: {
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
