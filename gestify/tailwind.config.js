export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '26': 'repeat(26, minmax(0, 1fr))',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
