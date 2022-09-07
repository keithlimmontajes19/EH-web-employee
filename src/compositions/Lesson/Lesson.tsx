import {useParams} from 'react-router'
import {useGetSingleLesson} from 'api/lessonsAPI'

import NO_IMAGE from 'assets/images/no-image.png'

import styles from './Lesson.module.css'

export function Lesson() {
  const {lessonId} = useParams()
  const {isLoading, isError, error, lesson, tag} = useGetSingleLesson(lessonId)

  return <>
    {!isLoading && !isError && <div className={styles.lessonContainer}>
      <img className={styles.lessonPreview} src={lesson.preview || NO_IMAGE} />
      <h3 className={styles.lessonTitle}>{lesson.title}</h3>
      <p className={styles.lessonDescription}>{lesson.description}</p>
    </div>}
  </>
}
