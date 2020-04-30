/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
      minHeight: {
        '(screen-16)': 'calc(100vh - 5.25rem)'
      },
      colors: {
        tracked: {
          dark: '#6B01FF',
          normal: '#A901FF',
          light: '#EA01FF'
        },
        purple: {
          '100': '#EECCFF',
          '200': '#DC99FF',
          '300': '#CB66FF',
          '400': '#BA33FF',
          '500': '#A901FF',
          '600': '#8700CC',
          '700': '#650099',
          '800': '#430066',
          '900': '#220033'
        },
        gray: {
          ...colors.gray,
          '700': '#282828',
          '800': '#181818',
          '900': '#121212'
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
      })
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'] // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-border-gradients')()]
};
