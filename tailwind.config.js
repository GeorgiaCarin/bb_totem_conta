
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 40px -20px rgba(0, 0, 0)',
        'text-background' : 'drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
      },
      borderRadius : {
        '4xl' : '36px'
      },
      colors:{
        bb: {
        lightyellow:'var(--bg-yellow-bb)',
        yellow: 'var(--yellow-bb)',
        lblue: 'var(--bg-blue-bb)',
        blue: 'var(--blue-bb)',
        lpink: 'var(--bg-pink-bb)',
        pink: 'var(--pink-bb)',
        gray: 'var(--gray-bb)',
        'primary': 'var(--primary-color)',
        'secundary': 'var(--second-color)',
        'disabled-button': 'var(--disabled-button)',
        'active-button': 'var(--active-button)',
        'text-primary': 'var(--text-color)',
        'text-secundary': 'var(--text-color-secondary)'
      }
      
      },
      backgroundImage: {
        primary: "url('./src/assets/background.png')",
        vertical: "url('./src/assets/bg_vertical.png')",
        formulario: "url('./src/assets/bg_formulario.png')",
        qrcode: "url('./src/assets/bg_qrcode.png')",
        secondary: "url('./src/assets/background2.png')",
        conta: "url('./src/assets/bg_conta_inicio.png')",
        dados: "url('./src/assets/bg_dados.png')",
        qrcodeh: "url('./src/assets/bg_qrcode2.png')"

      },
      animation: {
        'bounce-slow': 'bounce 3s infinite'
      }, 
      screens: {
        'tablet' : '640px',
        'laptop': '1024px',
        'toten': '1080px',

        'desktop': '1280px',
        '2xdesktop': '1920px',
      }
      
    },
  },
  plugins: [],
}