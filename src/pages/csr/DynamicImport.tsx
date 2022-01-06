import { useState } from 'react'
import dynamic from "next/dynamic";

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']

const DynamicComponent = dynamic(
// @ts-ignore
  () => import('../../components/DynamicComponent').then(mod=>mod.DynamicComponent),
  {
    loading: () => <p>...</p>,
    ssr: false,
    // suspense: true,
  }
);

type Result = {
  "item": string;
  "refIndex": null;
}

export default function Page() {
  const [results, setResults] = useState<Result[]|undefined>();
  console.log({results});
  return (
    <div>
      <p>Dynamically load fuse.js on input change {results === undefined ? "" : <span style={{backgroundColor:'green',color:'white'}}>Loaded!</span>}</p>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default
          const fuse = new Fuse(names)

          setResults(fuse.search(value) as unknown as Result[])
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>

      <p>{"Dynamically load react component if results contain 'Tim'"}</p>
      {results?.find(i=>i.item==='Tim')
        ? <DynamicComponent/>
        : <pre>Load State: {JSON.stringify(results?.find(i=>i.item==='Tim'), null, 2)}</pre>}
    </div>
  )
}