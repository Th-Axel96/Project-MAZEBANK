/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gold-background": "url('../img/gold-background.jpg')",
        "bitcoin-coin-gold": "url('../img/bitcoin-coin-gold.jpg')",
        "bitcoin-coin-billet": "url('../img/bitcoin-coin-billet.jpg')",
        "bg-gold": "url('../img/bg-gold.jpg')",
      },
    },
  },
  plugins: [],
};
