import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {appConfig} from "../variables/appConfig";

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='application-name' content='playground - technology solutions' />

          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='playground - technology solutions' />
          {/*<meta name='description' content='Home Page' />*/}
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          {/*<meta name='theme-color' content='#000000' />*/}
          <meta name='keywords' content='Keywords' />

          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#5bbad5' />
          {/*<link rel='shortcut icon' href='/static/icons/favicon.ico' />*/}

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content={appConfig.url} />
          <meta name='twitter:title' content='Nyotech' />
          <meta name='twitter:description' content={appConfig.siteDescription} />
          <meta name='twitter:image' content={`${appConfig.url}/static/android-chrome-192x192.png`} />
          <meta name='twitter:creator' content={appConfig.appCreator} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={appConfig.appTitle} />
          <meta property='og:description' content={appConfig.siteDescription} />
          <meta property='og:site_name' content={appConfig.siteName} />
          <meta property='og:url' content={appConfig.url} />
          <meta property='og:image' content={`${appConfig.url}/static/apple-touch-icon.png`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument
