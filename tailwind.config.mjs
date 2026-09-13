/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        linen: '#FAF8F5',
        canvas: '#F5F2EB',
        charcoal: '#221F1D',
        sand: '#F0EDE6',
        'border-whisper': '#E3DED6',
        'slate-umber': '#635E59',
        'stone-muted': '#969089',
        terracotta: {
          DEFAULT: '#C86A4B',
          hover: '#B65A3C',
          light: '#F8ECE7',
        },
        rose: {
          dusty: '#DC9A89',
          light: '#FBF0EC',
        },
        sage: {
          DEFAULT: '#345C37',
          bg: '#EDF3ED',
          border: '#C6DEC7',
        },
        mustard: '#DBA346',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
