import {useNavigate} from 'react-router-dom'
import {useGetLessonContents} from 'api/lessonsAPI'
import styles from './LessonContents.module.css'

export default function LessonContents({lessonId, selected, setSelected}: any) {
  const navigate = useNavigate()
  const {isLoading, isError, error, lessonContents, tag} = useGetLessonContents(lessonId)

  return <>
    {!isLoading && !isError && lessonContents.map((lessonContent) => {
      return <li
        key={`lessons/${lessonId}/contents/${lessonContent._id}`}
        className={`${styles.lessonContent} ${selected === `lessons/${lessonId}/contents/${lessonContent._id}` ? styles.selected : ''}`}
        onClick={() => {
          setSelected(`lessons/${lessonId}/contents/${lessonContent._id}`)
          navigate(`lessons/${lessonId}/contents/${lessonContent._id}`)
        }}
      >
        {lessonContent.title}
      </li>
    })}
  </>
}
