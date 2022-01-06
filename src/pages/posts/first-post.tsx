import {FC} from "react";
import Link from 'next/link'
import Head from "next/head";
import Script from 'next/script'
import Layout from "../../components/layouts/Layout";
import {Button} from "../../components/button/Button";
import Alert from "../../components/alert/Alert";

const FirstPost:FC = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Button/>
      <Alert type={'success'}>
        yay
      </Alert>
      <Alert type={'error'}>
        shit
      </Alert>
      <Alert type={'default'}>
        meh
      </Alert>
    </Layout>
  )
}

export default FirstPost