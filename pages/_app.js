import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

import '@fontsource/raleway/500.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/montserrat/500.css'
import '../styles/globals.css'

const theme = extendTheme({
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="1250" margin="0 auto" padding="0 2em">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
