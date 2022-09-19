import {useNavigate} from 'react-router-dom'
import {useGetLessonContents} from 'api/lessonsAPI'
import styles from './LessonContents.module.css'

export default function LessonContents(props: any) {
  const {courseId, lessonId, selected, setSelected} = props
  const navigate = useNavigate()
  const {isLoading, isError, lessonContents} = useGetLessonContents(lessonId)

  return <>
    {!isLoading && !isError && lessonContents.map((lessonContent) => {
      return <li
        key={`lessons/${lessonId}/contents/${lessonContent._id}`}
        className={`${styles.lessonContent} ${selected === `/learn/${courseId}/lessons/${lessonId}/contents/${lessonContent._id}` ? styles.selected : ''}`}
        onClick={() => {
          setSelected(`/learn/${courseId}/lessons/${lessonId}/contents/${lessonContent._id}`)
          navigate(`/learn/${courseId}/lessons/${lessonId}/contents/${lessonContent._id}`)
        }}
      >
        {lessonContent.title}
      </li>
    })}
  </>
}
