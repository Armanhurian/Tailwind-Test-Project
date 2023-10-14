/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        darkblue : "#232340",
        darkColor : "#3C3C61",
        blueBg : "#323259",
        skyBlue : "#EAE4FF",
        darkWhite : "#F5F5F5",
        dark : "#110E2D",
        bgwhite : "#E8E8F4",
        pink : "#E8DCFC",
        englishColor : "#3C3C61"
      },
      width: {
        '100': '25rem',
      },
      spacing : {
        "13" : "3.2rem",
        "45" : "10.7rem;",
        "100" : "29rem;",
        '120': '41rem',
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

