import Link from "next/link";
import {FC} from "react";
import createStore from "zustand";
import {useRouter} from "next/router";

type State = {
  count: number;
}

const useStore = createStore<State>(() => ({
  count: 0,
}));

export const Header:FC = () => {
  const count = useStore(s => s.count)
  const router = useRouter();
  return (
    <h1 className="title">
      <span onClick={() => useStore.setState(s=>({count: s.count+1}))}>
        Read{' '}
      </span>
      <Link href="/src/posts/first-post">
        <a>this page!</a>
      </Link>
      <span onClick={(e) => {
        e.preventDefault();
        router.push("/posts/first-post");
      }}>{' '}{count}</span>
    </h1>
  )
}