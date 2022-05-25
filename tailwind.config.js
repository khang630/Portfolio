module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      display: ["group-hover"],

      keyframes: {
        betterBounce: {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(10px)' },
          '20%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(10px)' },
          '40%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '60%': { transform: 'translateY(0px)' },
          '70%': { transform: 'translateY(10px)' },
          '80%': { transform: 'translateY(0px)' },
          '90%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'better-Bounce':'betterBounce 20s linear infinite',
        'pulse': 'pulse 2s linear infinite'
      }
    },
  },
  plugins: [],
}
