import NO_IMAGE from 'assets/icons/no-image-icon.png'

import styles from './Topic.module.css'

export default function Topic(props) {
  const {topic} = props

  return <div className={`${styles.topicContainer}`}>
    <img className={`${styles.topicPreview} ${!topic.preview && styles.noTopicPreview}`}  src={topic.preview || NO_IMAGE} />
    <div className={`${styles.topicInfoContainer}`}>
      <h3 className={`${styles.topicTitle}`}>{topic.title}</h3>
      <p className={`${styles.topicDescription}`}>{topic.description}</p>
    </div>
  </div>
}
