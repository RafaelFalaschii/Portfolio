/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
         montserrat: ['Montserrat', 'sans-serif'],
      },

      backgroundImage:{
       imgBackground: "url('../assets/imagens/background/backgrounddd.jpg')"
      },

      colors: {
        colorBackground:'rgb(29, 29, 29)',
        colorWriting:'rgb(204, 85, 0)',
        colorSWhite:'rgb(245, 245, 245)',
        colorBgWhite: 'rgb(238, 238, 238)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '22ch' },
        },
        blinking: {
          '0%, 100%': { borderColor: 'rgb(40, 148, 236)' },
          '50%': { borderColor: 'transparent' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        typing: 'typing 3s steps(22) forwards',
        blinking: 'blinking 1s step-end infinite',
        scan: 'scan 3s linear infinite', 
      },
      
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
},
}

