export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '19': 'repeat(19, minmax(0, 1fr))',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
