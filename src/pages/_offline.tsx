import Layout, {siteTitle} from "../components/layouts/Layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className={utilStyles.headingMd}>
            <p>[Your Self Introduction]</p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/images/profile.jpg" alt="Vercel Logo" className="logo" height={40} width={40} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}
