/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'hsl(79, 72%, 55%)',
        'first-color-light': 'hsl(79, 97%, 77%)',
        'first-color-alt': 'hsl(79, 67%, 52%)',
        'first-color-dark': 'hsl(79, 63%, 50%)',
        'first-color-gray': 'hsl(79, 6%, 64%)',
        'title-color': 'hsl(180, 4%, 98%)',
        'title-color-black': 'hsl(180, 4%, 12%)',
        'text-color': 'hsl(180, 4%, 72%)',
        'text-color-light': 'hsl(180, 4%, 65%)',
        'body-color': 'hsl(180, 12%, 8%)',
        'bg-blur': '#2c2c2c10',
      },
      height:{
        '120vh': '120vh',
        '130': '130%'
      },
      width:{
        '45': '45%',
      },
      maxWidth:{
        '90': '90%',
        '400': '600px',
      },
      padding:{
        '5%': '5%'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'sms': {'max': '510px'}
        // => @media (max-width: 510px) { ... }
      }
    },
  },
  plugins: [],
}

