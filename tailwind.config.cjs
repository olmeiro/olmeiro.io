/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gleaming-fate': "url('../public/images/gleaming-fate.jpg')",
        'blurry-gradient': "url('../public/images/blurry-gradient.png')"
      },
      backgroundColor: theme => (
        {
          ...theme('colors'),
          primary: '#4B6587',
          secondary: '#C8C6C6',
          terciary: '#F7F6F2',
          customwhite: '#F7F6F2'
        }
      )
    }
  },
  plugins: []
}
