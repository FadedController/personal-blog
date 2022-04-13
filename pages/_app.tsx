import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { MantineProvider } from '@mantine/core'
import { mantineTheme } from '../utils/mantine.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={mantineTheme} withGlobalStyles>
      <NextNProgress />
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
