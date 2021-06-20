import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ttred: {
          '500': '#fe3500',
          '900': '#da1100'
        },
        ttyellow: {
          '300': '#feedb2',
          '500': '#fec500'
        }
      },
    },
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    }
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    plugin(({ addBase, theme }) => {
      addBase({
        'p a': {
          color: theme('colors.blue.500'),
          textDecorationLine: 'underline',
          textUnderlineOffset: '1px',
          '&:hover': {
            color: theme('colors.blue.800'),
            textUnderlineOffset: '3px',
          }
        },
        h1: {
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: '600'
        }
      })
    }),
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn': {
          padding: '.5rem',
          borderRadius: '.25rem',
          marginTop: '.5rem',
          display: 'block',
          width: '100%',
          backgroundColor: theme('colors.gray.300'),
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme('colors.ttyellow.300')
          },
          '&:disabled': {
            cursor: 'default',
            backgroundColor: theme('colors.gray.200'),
            color: theme('colors.gray.500')
          }
        },
        'form:invalid .btn': {
          cursor: 'default',
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.500')
        },

        '.trick-level': {
          '&:before': {
            right: '100%'
          },
          '&:after': {
            left: '100%'
          },
          '&:before, &:after': {
            content: '" "',
            borderBottomWidth: '2px',
            borderColor: theme('colors.gray.300'),
            position: 'absolute',
            width: '100%',
            maxWidth: '20vw',
            top: '50%'
          }
        }
      })
    })
  ]
})
