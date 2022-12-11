import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Snow from '@components/Snow'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Snow />
      <Component {...pageProps} />
    </>
  )
}
