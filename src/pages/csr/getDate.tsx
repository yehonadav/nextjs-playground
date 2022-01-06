import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error, mutate, isValidating } = useSWR('/api/getDate', fetcher)
  console.log({ data, error, mutate, isValidating });
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <h3>{data.date}</h3>
    </>
  )
}