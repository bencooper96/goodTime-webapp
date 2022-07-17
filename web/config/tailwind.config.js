/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
      display: ['Chicle', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.9rem', '1rem'],
      sm: ['1.2rem', '1.3rem'],
      base: ['1.6rem', '2rem'],
      lg: ['2.4rem', '2.6rem'],
      xl: ['2.8rem', '3.3rem'],
      '2xl': ['3.6rem', '4.3rem'],
      '3xl': ['4.8rem', '5.8rem'],
    },
    extend: {
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      colors: {
        background: '#F6F6F6',
        transparent: 'rgba(0,0,0,0)',
        'light-gray': '#E6E8E9',
        'dark-gray': '#ADB3B6',
        white: '#FDFDFD',
        black: '#211F1F',
        text: {
          default: '#433E3E',
          subtle: '#7E7E73',
        },
        turquoise: {
          100: '#EFF8F7',
          200: '#CFEAE8',
          300: '#AFDBD8',
          400: '#8FCDC9',
          500: '#6FBFB9',
          600: '#4EB1AA',
          700: '#40908B',
          800: '#32706C',
          900: '#24504D',
        },
        maroon: {
          100: '#FBF0EC',
          200: '#F3D2C5',
          300: '#ECB49E',
          400: '#E49678',
          500: '#DC7851',
          600: '#D55A2A',
          700: '#AE4A23',
          800: '#87391B',
          900: '#612913',
        },
        beige: {
          100: '#ECEAD4',
          300: '#D6D3B6',
          500: '#BFBDA2',
          700: '#ABA987',
          900: '#939072',
        },
        orange: {
          100: '#F5B45D',
          300: '#E19D42',
          500: '#D28B2C',
          700: '#9C6112',
          900: '#7D4E10',
        },
      },
    },
  },
  plugins: [],
}
