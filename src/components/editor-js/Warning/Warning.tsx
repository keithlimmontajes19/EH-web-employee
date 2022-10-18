export default function Warning({data}: any) {
  return <div>
    <h3>{data?.title || ''}</h3>
    <p>{data?.message || ''}</p>
  </div>
}
