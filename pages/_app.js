import Footer from '@/layout/footer'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Template from '@/layout/template'
import '@/styles/globals.scss'
import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <Template>
      <Header />
      <Component {...pageProps} />
    </Template>
  )
}
