/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- Aici e secretul, sa fie cu @
    autoprefixer: {},
  },
};

export default config;