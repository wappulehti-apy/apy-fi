import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'

import Layout from 'layouts/Layout'
import Page404 from 'pages/404'
import Fonts from 'styles/fonts'
import 'styles/index.scss'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
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
