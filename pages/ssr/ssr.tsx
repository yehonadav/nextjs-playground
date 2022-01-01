import {GetServerSidePropsContext} from 'next/types'

export async function getServerSideProps(context:GetServerSidePropsContext) {
  return {
    props: {
      SsrDatePerRequest: `${new Date()}`,
      params: context.params||"",
      url: context.req.url,
    }
  }
}

export default function Home(props) {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
}
