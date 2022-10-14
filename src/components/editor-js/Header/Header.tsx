export default function Header({data}: any) {
  if (data?.level === 1) {
    return <h1>{data?.text}</h1>
  }

  if (data?.level === 2) {
    return <h2>{data?.text}</h2>
  }

  if (data?.level === 3) {
    return <h3>{data?.text}</h3>
  }

  if (data?.level === 4) {
    return <h4>{data?.text}</h4>
  }

  if (data?.level === 5) {
    return <h5>{data?.text}</h5>
  }

  if (data?.level === 6) {
    return <h6>{data?.text}</h6>
  }

  return <p>Loading...</p>
}
