import {GetServerSideProps, NextPage} from "next";

export type SsrPageProps = {
  date: string;
}

export const getServerSideProps:GetServerSideProps<SsrPageProps> = async (context) => {
  // https://nextjs.org/docs/going-to-production#caching
  // This value is considered fresh for ten seconds (s-maxage=10).
  // If a request is repeated within the next 10 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: { date: new Date().toISOString() },
  }
}

export const SsrPage:NextPage<SsrPageProps> = ({ date }) => {
  return (
    <div>
      <h3>SSR</h3>
      <b>{new Date(date).toLocaleString()}</b>
    </div>
  )
}

export default SsrPage;