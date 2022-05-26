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
        },
        bounceLeft: {
          '0%': { transform: 'translateX(0px)' },
          '10%': { transform: 'translateX(2px)' },
          '20%': { transform: 'translateX(0px)' },
          '30%': { transform: 'translateX(2px)' },
          '40%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(0px)' },
          '70%': { transform: 'translateX(2px)' },
          '80%': { transform: 'translateX(0px)' },
          '90%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'better-Bounce':'betterBounce 20s linear infinite',
        'pulse': 'pulse 2s linear infinite',
        'bounce-left': 'bounceLeft 10s linear infinite'
      },
      fontFamily: {
        Bebas: "'Bebas Neue', cursive"
      }
    },
  },
  plugins: [],
}
