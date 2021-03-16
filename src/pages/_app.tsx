import { useEffect } from 'react'

import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'

import * as gtag from '../lib/gtag'

import Layout from 'layouts/Layout'
import Page404 from 'pages/404'
import Fonts from 'styles/fonts'
import 'styles/index.scss'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={Page404}
        onError={(err) => console.log(err)}
      >
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
