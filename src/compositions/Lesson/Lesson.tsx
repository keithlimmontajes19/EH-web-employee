import {useParams} from 'react-router'
import {useGetSingleLesson} from 'api/lessonsAPI'
import BlockViewer from '../../components/editor-js/BlockViewer'

import NO_IMAGE from 'assets/icons/no-image-icon.png'

import styles from './Lesson.module.css'

import DUMMY_BLOCKS from 'temp/data/dummy-blocks'

export function Lesson() {
  const {lessonId} = useParams()
  const {isLoading, isError, error, lesson, tag} = useGetSingleLesson(lessonId)

  if (isLoading) return <p>Loading...</p>

  let blocks = []
  try {
    blocks = JSON.parse(lesson?.body)?.blocks
  } catch {
    blocks = []
  }

  return <>
    {!isLoading && !isError && <div className={styles.lessonContainer}>
      <img className={`${styles.lessonPreview} ${!lesson.preview && styles.noLessonPreview}`} src={lesson.preview || NO_IMAGE} />
      <h3 className={styles.lessonTitle}>{lesson.title}</h3>
      {blocks.map((block) => {
        return <div className={styles.blockContainer}>
          <BlockViewer key={block?.id} block={block} />
        </div>
      })}
    </div>}
  </>
}
