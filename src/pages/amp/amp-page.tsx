export const config = { amp: true }

function MyAmpPage() {
  const date = new Date()

  return (
    <div>
      <p>Some time: {date.toJSON()}</p>
      {/*@ts-ignore*/}
      <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      {/*@ts-ignore*/}
      </amp-timeago>
    </div>
  )
}

export default MyAmpPage