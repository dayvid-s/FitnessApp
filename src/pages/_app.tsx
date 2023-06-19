
import "rsuite/dist/rsuite-no-reset.min.css"
import { GlobalStyle } from "../styles/styles"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


import { AppProps } from "next/app"


export default function MyApp({ Component, pageProps } : AppProps )   {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    })
  }, [])
  return (
    <Component {...pageProps} />
  )
}