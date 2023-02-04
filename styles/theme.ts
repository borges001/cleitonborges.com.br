import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme ({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, 
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '181818',
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: '35',
      fontWeight: 'extrabold',
      textAlign: 'center',
    },
    desc: {
      fontSize: '17',
      fontWeight: 'light',
      textAlign: 'center',
    }
  }
})