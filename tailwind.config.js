/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      padding: {
        navbar: '5.25rem',
        'navbar-sm': '4.75rem'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem'
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
      minHeight: {
        '(screen-16)': 'calc(100vh - 4.75rem)'
      },
      colors: {
        tracked: {
          main: '#101123',
          secondary: '#C80498',
          accent: '#810590',
          text: '#E4E4E4',
          pink: '#EA00FF',
          purple: '#6A00FF',
          background: '#1C1F32'
        },
        gray: {
          ...colors.gray,
          '700': '#282828',
          '800': '#181818',
          '900': '#121212'
        },
        teal: {
          ...colors.teal,
          '400': '#65D6AD',
          '900': '#014D40'
        }
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      },
      linearBorderGradients: {
        directions: {
          // defaults to these values
          t: 'to top',
          tr: 'to top right',
          r: 'to right',
          br: 'to bottom right',
          b: 'to bottom',
          bl: 'to bottom left',
          l: 'to left',
          tl: 'to top left'
        },
        colors: {
          'pink-purple': ['#EA00FF', '#6A00FF']
        }
      },
      repeatingLinearBorderGradients: theme => ({
        directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
        colors: theme('linearBorderGradients.colors'), // defaults to {}
        lengths: {
          // defaults to {}
          sm: '25px',
          md: '50px',
          lg: '100px'
        }
      }),
      linearGradientDirections: {
        // defaults to these values
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left'
      },
      linearGradientColors: {
        // defaults to {}
        'pink-purple': ['#EA00FF', '#6A00FF']
      },
      radialGradientShapes: {
        // defaults to this value
        default: 'ellipse'
      },
      radialGradientSizes: {
        // defaults to this value
        default: 'closest-side'
      },
      radialGradientPositions: {
        // defaults to these values
        default: 'center',
        t: 'top',
        tr: 'top right',
        r: 'right',
        br: 'bottom right',
        b: 'bottom',
        bl: 'bottom left',
        l: 'left',
        tl: 'top left'
      },
      radialGradientColors: {
        // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff']
      },
      conicGradientStartingAngles: {
        // defaults to this value
        default: '0'
      },
      conicGradientPositions: {
        // defaults to these values
        default: 'center',
        t: 'top',
        tr: 'top right',
        r: 'right',
        br: 'bottom right',
        b: 'bottom',
        bl: 'bottom left',
        l: 'left',
        tl: 'top left'
      },
      conicGradientColors: {
        // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        checkerboard: ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg']
      },
      repeatingLinearGradientDirections: theme => theme('linearGradientDirections'), // defaults to this value
      repeatingLinearGradientColors: theme => theme('linearGradientColors'), // defaults to {}
      repeatingLinearGradientLengths: {
        // defaults to {}
        sm: '25px',
        md: '50px',
        lg: '100px'
      },
      repeatingRadialGradientShapes: theme => theme('radialGradientShapes'), // defaults to this value
      repeatingRadialGradientSizes: {
        // defaults to this value
        default: 'farthest-corner'
      },
      repeatingRadialGradientPositions: theme => theme('radialGradientPositions'), // defaults to this value
      repeatingRadialGradientColors: theme => theme('radialGradientColors'), // defaults to {}
      repeatingRadialGradientLengths: {
        // defaults to {}
        sm: '25px',
        md: '50px',
        lg: '100px'
      },
      repeatingConicGradientStartingAngles: theme => theme('conicGradientStartingAngles'), // defaults to this value
      repeatingConicGradientPositions: theme => theme('conicGradientPositions'), // defaults to this value
      repeatingConicGradientColors: {
        // defaults to {}
        red: '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        starburst: ['white 0 5deg', 'blue 5deg']
      },
      repeatingConicGradientLengths: {
        // defaults to {}
        sm: '10deg',
        md: '20deg',
        lg: '40deg'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderRadius: ['responsive', 'hover', 'focus'],
    linearBorderGradients: ['responsive', 'hover', 'group-hover', 'focus'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive', 'hover', 'group-hover', 'focus'], // defaults to ['responsive']
    backgroundImage: ['responsive'], // this is for the "bg-none" utility
    linearGradients: ['responsive', 'hover', 'group-hover', 'focus'],
    radialGradients: ['responsive'],
    conicGradients: ['responsive'],
    repeatingLinearGradients: ['responsive'],
    repeatingRadialGradients: ['responsive'],
    repeatingConicGradients: ['responsive']
  },
  plugins: [require('tailwindcss-gradients'), require('tailwindcss-border-gradients')()]
}
