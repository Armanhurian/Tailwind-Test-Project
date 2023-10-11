/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        darkblue : "#232340",
        darkColor : "#3C3C61",
        blueBg : "#323259",
      },
      width: {
        '100': '25rem',
      },
      fontFamily:{
        'vazir' : ['vazir'],
        'vazirmatn' : ['vazirmatn'],
        'yekan' : ['yekan'],
        'yekanbakh' : ['yekanbakh'],
        'steretch' : ['steretch'],
      },
    },
  },
  plugins: [],
}

