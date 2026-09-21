import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: '#319795',
      200: '#2c7a7b',
    },
  },
  fonts: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },
  styles: {
    global: {
      'html': {
        scrollBehavior: 'smooth',
      },
      'body': {
        backgroundColor: 'gray.50',
      },
    },
  },
})

export default theme
