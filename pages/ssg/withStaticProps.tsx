export default function Home(props) {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {
    StaticDateOnBuild: `${new Date()}`
  }

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}
