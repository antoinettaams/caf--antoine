// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',     
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/**/*.{js,ts,jsx,tsx,mdx}',      
  ],
  theme: {
    extend: {

      fontFamily: {
        news: ['var(--font-news)'],    
        amatic: ['var(--font-amatic)'], 
       
      },
      
      colors: {
        principal: '#bb3b2b', 
        cream: '#F5F5DC',     
        
      },
      
    },
  },
  plugins: [], 
};