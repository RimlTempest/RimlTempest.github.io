import * as React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
