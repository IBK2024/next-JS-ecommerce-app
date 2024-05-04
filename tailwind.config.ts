import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1024px',
        tablet: '800px',
        phone: '640px',
      },
      colors: {
        primary: colors.white,
        secondary: colors.black,
        // biome-ignore lint/style/useNamingConvention: <explanation>
        accent: {...colors.blue, DEFAULT: colors.blue[600]},
        smallNavbar: 'rgba(0,0,0,0.3)',
      },
      height: {
        navbar: '60px',
        hero: 'calc(100dvh - 60px)',
      },
      width: {
        smallNavbar: '300px',
        notFoundImage: '280px',
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
