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

        maxWidth: '400',
      },
    },
  },
  textStyles: {
    userName: {
      marginTop:'-9',
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
    button1: {
      fontSize: '22px',
      fontWeight: 'bold',
      textAlign: 'right',
      letterSpacing:'2px',
      textShadow: '2px 2px 8px #000',
    },
  }
})