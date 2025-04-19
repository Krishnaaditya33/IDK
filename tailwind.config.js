@tailwind base;
@tailwind components;
@tailwind utilities;

/* custom styles below */
body {
  @apply bg-gray-900 text-white;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add any other paths where you use Tailwind CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
