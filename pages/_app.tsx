import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <NextNProgress />
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
