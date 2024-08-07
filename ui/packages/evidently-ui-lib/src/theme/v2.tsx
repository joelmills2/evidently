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
    secondary: { main: primaryColor, dark: '#c10400', light: colors.grey[200] },
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
            color: primaryColor
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: { flexContainer: { gap: '10px' }, indicator: { backgroundColor: primaryColor } }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': { background: colors.grey[800] }
        },
        outlined: {
          '&:hover': {
            color: primaryColor,
            borderColor: primaryColor,
            background: '#fff'
          }
        },
        text: {
          '&:hover': {
            color: primaryColor,
            borderColor: primaryColor
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
            background: colors.grey[200]
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
            color: primaryColor
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
          '&:hover': { color: primaryColor },
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
