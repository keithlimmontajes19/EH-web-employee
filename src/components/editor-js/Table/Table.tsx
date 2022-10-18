import TableRow from './TableRow'

export default function Table({data}: any) {
  const withHeadings = data?.withHeadings || false
  const contents = data?.content || []

  return <table>
    {contents.map((items, index) => {
      return <TableRow key={index} items={items} />
    })}
  </table>
}
