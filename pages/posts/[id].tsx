import Layout from '../../components/layouts/Layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import {DateFormat} from "../../components/DateFormat";
import utilStyles from '../../styles/utils.module.css'
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import ErrorPage from 'next/error'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async function ({ params, preview = null }) {
  const postData = await getPostData((params?.id || '') as string);
  return {
    props: {
      preview,
      postData
    }
  }
}

export default function Post({ postData, preview }: { postData: any, preview: null | true }) {
  const router = useRouter()

  if (!router.isFallback && !postData)
    return <ErrorPage statusCode={404} />;

  return (
    <Layout>
      {router.isFallback ?
        <>
          <Head>
            <title>Loading…</title>
          </Head>
          <h3>Loading…</h3>
        </>
        :
        <>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <DateFormat dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
          </article>
          <p>
            {preview
              ? 'yay preview is on. to exit, go to /api/exit-preview'
              : 'preview mode is off. go to /api/preview?id={postId}&secret={token} to activate'
            }
          </p>
        </>
      }
    </Layout>
  )
}