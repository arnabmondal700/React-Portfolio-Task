import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import App from './App';
import { AlertProvider } from './context/AlertContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AlertProvider>
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
)
