import path from 'path';

export default {
  buildModules: [
    path.resolve(__dirname, 'my-scripts.js'),
    // other build modules
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}
