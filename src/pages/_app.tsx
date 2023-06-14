
import "rsuite/dist/rsuite-no-reset.min.css"
import { GlobalStyle } from "../styles/styles"
// import "rsuite/DateRangePicker/styles/index.less"


import { AppProps } from "next/app"


export default function MyApp({ Component, pageProps } : AppProps )   {
  return (
    <Component {...pageProps} />
  )
}