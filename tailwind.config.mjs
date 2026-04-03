/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5bbce4',
          dark: '#3aa8d8',
          light: '#7fcced',
        },
        navy: {
          DEFAULT: '#2c3e50',
          dark: '#1a252f',
          light: '#34495e',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
