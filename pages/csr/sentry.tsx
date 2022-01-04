export default function Page() {
  return (
    <>
      <button type="button" onClick={() => {
        throw new Error("Sentry Frontend Error");
      }}>
        Throw sentry client error
      </button>

      <button type="button" onClick={() => {
        fetch("/api/throwError");
      }}>
        Throw sentry server error
      </button>
    </>
  )
}