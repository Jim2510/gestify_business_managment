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
        '24': 'repeat(24, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
      },
      gridRow: {
        'span-24': 'span 24 / span 24',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
