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
        bg: '#181818',
      },
    },
  },
  textStyles: {
    userName: {
      marginTop:'-12',
      fontSize: '35px',
      fontWeight: 'extrabold',
      textAlign: 'center',
    },
    bio: {
      mb: '21',
      fontSize: '17px',
      fontWeight: 'light',
      textAlign: 'center',
      lineHeight: '100%',
    },
    footerText: {
      fontSize: '10px',
      fontWeight: 'light',
      textAlign: 'center',
    },
  }
})