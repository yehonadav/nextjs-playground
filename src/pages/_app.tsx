import '../styles/global.css'
import type {AppProps, NextWebVitalsMetric /*, AppContext */} from 'next/app'
// import variables from '../styles/scss/variables.module.scss'

export function reportWebVitals(metric:NextWebVitalsMetric ) {
  console.log("WebVital Metric:", metric);

  // const body = JSON.stringify(metric)
  // const url = 'https://example.com/analytics'
  //
  // // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // if (navigator.sendBeacon) {
  //   navigator.sendBeacon(url, body)
  // } else {
  //   fetch(url, { body, method: 'POST', keepalive: true })
  // }

  // const { id, name, label, value } = metric;
  // // @ts-ignore
  // // Use `window.gtag` if you initialized Google Analytics as this example:
  // // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  // window.gtag('event', name, {
  //   event_category:
  //     label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
  //   value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  //   event_label: id, // id unique to current page load
  //   non_interaction: true, // avoids affecting bounce rate.
  // })
}



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp