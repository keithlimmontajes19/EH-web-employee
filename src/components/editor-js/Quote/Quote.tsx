export default function Quote({data}: any) {
  const {text, caption, alignment} = data

  return <blockquote>
    <p>{text}</p>
  </blockquote>
}
