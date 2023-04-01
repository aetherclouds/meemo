const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        // this syntax is weird
        'zinc-800-trs': 'rgb(39 39 42 / 0.9)',
        'zinc-500-trs': 'rgba(113 113 122 / 0.2)',
      },
    },
  },

  plugins: [],
};

module.exports = config;
