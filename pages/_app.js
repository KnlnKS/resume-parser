import "../styles/dataDisplay.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/inter/700.css";

import { ColorModeScript, ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Open Sans",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
