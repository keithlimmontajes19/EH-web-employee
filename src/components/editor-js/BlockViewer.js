import CheckList from './CheckList/CheckList'
import Code from './Code/Code'
import Delimiter from './Delimiter/Delimiter'
import Header from './Header/Header'
import Image from './Image/Image'
import LinkTool from './LinkTool/LinkTool'
import List from './List/List'
import Paragraph from './Paragraph/Paragraph'
import Quote from './Quote/Quote'
import RawHtml from './RawHtml/RawHtml'
import Table from './Table/Table'
import Video from './Video/Video'
import Warning from './Warning/Warning'

export default function BlockViewer(props) {
  const block = props.block

  if (block?.type === 'checklist') return <CheckList data={props.data} />
  if (block?.type === 'code') return <Code data={props.data} />
  if (block?.type === 'delimiter') return <Delimiter data={props.data} />
  if (block?.type === 'header') return <Header data={props.data} />
  if (block?.type === 'image') return <Image data={props.data} />
  if (block?.type === 'linkTool') return <LinkTool data={props.data} />
  if (block?.type === 'list') return <List data={props.data} />
  if (block?.type === 'paragraph') return <Paragraph data={props.data} />
  if (block?.type === 'quote') return <Quote data={props.data} />
  if (block?.type === 'raw') return <RawHtml data={props.data} />
  if (block?.type === 'table') return <Table data={props.data} />
  if (block?.type === 'video') return <Video data={props.data} />
  if (block?.type === 'warning') return <Warning data={props.data} />

  return <p>Unsupported block type...</p>
}
