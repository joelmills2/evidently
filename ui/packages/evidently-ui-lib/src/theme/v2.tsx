import { colors } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const { transitions } = createTheme()

const primaryColor = '#02b3e3'
const borderColorGrey = '#ded5d5'

console.log('colors in v2 theme', colors)
export const theme = createTheme({
  shape: { borderRadius: 5 },
  palette: {
    primary: { main: colors.grey[900], light: colors.grey[200] },
    // we use `secondary` color for interactive elements
    secondary: { main: `${primaryColor} !important`, dark: '#c10400', light: colors.grey[200] },
    background: { default: '#fff', paper: '#fff' }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          transition: transitions.create('color', {
            duration: transitions.duration.enteringScreen
          }),
          '&:hover': {
            color: `${primaryColor} !important`
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: { gap: '10px' },
        indicator: {
          backgroundColor: `${primaryColor} !important`,
          '&.MuiTabs-indicator': {
            backgroundColor: `${primaryColor} !important`,
          },
          '&:hover': {
            color: `${primaryColor} !important`
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: `${primaryColor} !important`,
          }
        },
        contained: {
          '&:hover': {
            background: colors.grey[800],
            color: `${primaryColor} !important`,
          }
        },
        outlined: {
          '&:hover': {
            color: `${primaryColor} !important`,
            borderColor: `${primaryColor} !important`,
            background: '#fff'
          }
        },
        text: {
          '&:hover': {
            color: `${primaryColor} !important`,
            borderColor: `${primaryColor} !important`
          }
        }
      }
    },
    MuiTab: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: '5px',
          '&:hover': {
            background: colors.grey[200],
            color: `${primaryColor} !important`,
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: transitions.create('color', {
            duration: transitions.duration.enteringScreen
          }),
          color: colors.grey[900],
          '&:hover': {
            color: `${primaryColor} !important`
          }
        }
      }
    },
    MuiSwitch: { defaultProps: { color: 'secondary' } },
    MuiToggleButton: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          transition: transitions.create('color', {
            duration: transitions.duration.enteringScreen
          }),
          color: colors.grey[900],
          '&:hover': { color: `${primaryColor} !important` },
          '&.Mui-disabled': {
            border: 'unset',
            background: colors.grey[100]
          }
        }
      }
    },
    MuiToggleButtonGroup: { defaultProps: { color: 'secondary' } },
    MuiLinearProgress: { defaultProps: { color: 'secondary' } },
    MuiPaper: {
      styleOverrides: {
        root: { boxShadow: 'unset', border: '1px solid', borderColor: borderColorGrey }
      }
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    button: {
      fontWeight: 'bold',
      textTransform: 'none'
    }
  }
})
