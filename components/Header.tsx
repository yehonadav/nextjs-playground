import Link from "next/link";
import {FC} from "react";
import createStore from "zustand";

type State = {
  count: number;
}

const useStore = createStore<State>(() => ({
  count: 0,
}));

export const Header:FC = () => {
  const count = useStore(s => s.count)
  return (
    <h1 className="title">
      <span onClick={() => useStore.setState(s=>({count: s.count+1}))}>
        Read{' '}
      </span>
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
      {' '}{count}
    </h1>
  )
}