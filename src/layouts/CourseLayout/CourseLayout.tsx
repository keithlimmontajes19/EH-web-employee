import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import {useNavigate, useParams, Outlet} from 'react-router'
import {useGetCourseFullCurriculum} from 'api/coursesAPI'

import styles from './CourseLayout.module.css'

export function CourseLayout() {
  const navigate = useNavigate()
  const {courseId} = useParams()
  const {isLoading, isError, error, courseCurriculum, tag} = useGetCourseFullCurriculum(courseId)

  const [selected, setSelected] = useState(`/learn/${courseId}`)
  const [expandedLesson, setExpandedLesson] = useState([])

  return <div className={styles.course}>
  <div className={styles.sidenav}>
    <h3 className={styles.title}>Curriculum</h3>
    <ol className={styles.curriculum}>
      <li
        className={`${styles.lesson} ${selected === `/learn/${courseId}` ? styles.selected : ''}`}
        onClick={() => {
          setSelected(`/learn/${courseId}`)
          navigate(`/learn/${courseId}`)
        }}
      >
        <span style={{paddingLeft: '13px'}}>Introduction</span>
      </li>

      {!isLoading && courseCurriculum.lessons.map((lesson) => {
        return <>
          <li
            key={`/lessons/${lesson._id}`}
            className={`${styles.lesson} ${selected === `/lessons/${lesson._id}` ? styles.selected : ''}`}
            onClick={() => {
              setSelected(`/lessons/${lesson._id}`)
              navigate(`/learn/${courseId}/lessons/${lesson._id}`)
            }}
          >
            <div>
                <span
                  className={styles.expandLesson}
                  onClick={() => {
                    if (expandedLesson.includes(lesson._id)) setExpandedLesson((prev) => prev.filter((lessonId) => lessonId !== lesson._id))
                    else setExpandedLesson((prev) => [...prev, lesson._id])
                  }}
                >
                  <FontAwesomeIcon icon={!expandedLesson.includes(lesson._id) ? faCaretRight : faCaretDown}/>
                </span>
                <span
                  onClick={() => {
                    setSelected(`/learn/${courseId}/lessons/${lesson._id}`)
                    navigate(`lessons/${lesson._id}`)
                  }}
                >
                  {lesson.title}
                </span>
              </div>
          </li>
          {expandedLesson.includes(lesson._id) && lesson.contents.map((content) => {
            return <li
              key={`/${content.contentType}/${content._id}`}
              className={`${styles.lessonContent} ${selected === `/${content.contentType}/${content._id}` ? styles.selected : ''}`}
              onClick={() => {
                setSelected(`/${content.contentType}/${content._id}`)
                navigate(`/learn/${courseId}/lessons/${lesson._id}/contents/${content._id}`)
              }}
            >
              {content.title}
            </li>
          })}
        </>
      })}
    </ol>
  </div>
  <Outlet context={{setSelected, setExpandedLesson}} />
</div>
}
