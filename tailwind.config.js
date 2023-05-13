/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "con-white":"#F7F7F7",
        "con-light-purple":"#C3ACD0",
        "con-darker-purple":"#674188",
        "con-face-gray":"#F7EFE5",
        "con-bright-purple":"#7743DB",
        "con-black":"#2E3033",
        "con-orange":"#F0943F",
        "con-red":"#F04F3F",
        "con-green":"#1EBE00",
        "admin-darkblue":"#03045E",
        "admin-cyan":"#00B4D8",
        "admin-lightblue":"#00B4D8",
        "admin-faceblue":"#CAF0F8"
      },
      width:{
        "128":"736px"
      },
      fontFamily:{
        opensans: ["Open Sans", "sans-serif"],
        natosans:['Noto Sans', 'sans-serif'],
        nunitosans:['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

