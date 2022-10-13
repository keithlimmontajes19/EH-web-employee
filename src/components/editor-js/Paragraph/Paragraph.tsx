export default function Paragraph({data}: any) {
  return <p>{data?.text || ''}</p>
}
