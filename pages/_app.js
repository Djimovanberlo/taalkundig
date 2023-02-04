import Footer from '@/layout/footer'
import Template from '@/layout/template'
import '@/styles/globals.scss'
import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
      <Footer />
    </Template>
  )
}
