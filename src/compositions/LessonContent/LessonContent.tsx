import {useParams} from 'react-router'
import {useGetLessonContents} from 'api/lessonsAPI'
import styles from './LessonContent.module.css'
import Topic from 'compositions/Topic'

export default function LessonContent() {
  const {lessonId, contentId} = useParams()

  const {isLoading, isError, error, lessonContents, tag} = useGetLessonContents(lessonId)
  const lessonContent = lessonContents?.find((lc) => lc._id === contentId)

  return (!isLoading && <div className={`${styles.lessonContent}`}>
    {lessonContent.contentType === 'topic' && <Topic topic={lessonContent} />}
  </div>)
}
