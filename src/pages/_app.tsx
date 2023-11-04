
import "rsuite/dist/rsuite-no-reset.min.css"
import { GlobalStyle } from "@component/styles/styles"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


import { AppProps } from "next/app"
import Head from "next/head"


export default function MyApp({ Component, pageProps } : AppProps )   {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <GlobalStyle/> */}

      <Component {...pageProps} />
    </>
  )
}