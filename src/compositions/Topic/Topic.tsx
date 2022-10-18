import NO_IMAGE from 'assets/icons/no-image-icon.png'
import BlockViewer from 'components/editor-js/BlockViewer'

import styles from './Topic.module.css'

export default function Topic(props) {
  const {topic} = props

  let blocks
  try {
    blocks = JSON.parse(topic?.body)?.blocks
  } catch {
    blocks = []
  }

  return <div className={`${styles.topicContainer}`}>
    <img className={`${styles.topicPreview} ${!topic.preview && styles.noTopicPreview}`}  src={topic.preview || NO_IMAGE} />
    <div className={`${styles.topicInfoContainer}`}>
      <h3 className={`${styles.topicTitle}`}>{topic.title}</h3>
      {blocks.map((block) => {
        return <BlockViewer key={block?.id} block={block} />
      })}
    </div>
  </div>
}
