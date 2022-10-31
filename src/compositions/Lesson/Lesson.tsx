import {useParams} from 'react-router'
import {useGetSingleLesson} from 'api/lessonsAPI'
import BlockViewer from '../../components/editor-js/BlockViewer'

import NO_IMAGE from 'assets/icons/no-image-icon.png'

import styles from './Lesson.module.css'

import DUMMY_BLOCKS from 'temp/data/dummy-blocks'

import ReactPlayer from 'react-player'
import {ReactPlayerProps} from 'react-player/types/lib'
import { Avatar } from 'antd'

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


  const ReactPlayerProps = ReactPlayer as unknown as React.FC<ReactPlayerProps>;

  return <>
    {!isLoading && !isError && <div className={styles.lessonContainer}>
      {/* {lesson?.preview && <img className={`${styles.lessonPreview} ${!lesson.preview && styles.noLessonPreview}`} src={lesson.preview || NO_IMAGE} />} */}
      {/* <h3 className={styles.lessonTitle}>{lesson.title}</h3> */}
      {lesson?.preview && <Avatar
        src={lesson?.preview}
        size="large"
        shape="square"
        style={{
          width: '100%',
          minHeight: 350,
          maxHeight: 350,
          borderRadius: 15,
        }}
        icon={(
          <ReactPlayerProps
            playing
            width={'100%'}
            height={'100%'}
            controls={true}
            url={lesson?.preview}
            // url={[
            //   {
            //     src: lesson.preview,
            //     type: 'video/mpeg',
            //   },
            // ]}
          />
        )}
      />}
      {blocks.map((block) => {
        return <div className={styles.blockContainer}>
          <BlockViewer key={block?.id} block={block} />
        </div>
      })}
    </div>}
  </>
}
