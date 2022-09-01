import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import {useNavigate, useParams, Outlet} from 'react-router'
import {useQuery} from 'react-query'
import {getCourseLessonsFactory} from 'api/coursesAPI'

import styles from './CourseLayout.module.css'

export function CourseLayout() {
  const navigate = useNavigate()
  const {courseId} = useParams()
  const [selected, setSelected] = useState('introduction')
  const [expandedLesson, setExpandedLesson] = useState([])

  const {isLoading, isError, error, data: lessons} = useQuery(`courses/${courseId}/lessons`, getCourseLessonsFactory(courseId), {
    select: response => response.data.data
  })

  return <div className={styles.course}>
    <div className={styles.sidenav}>
      <h3 className={styles.title}>Curriculum</h3>
      <ol className={styles.curriculum}>
        <li
          key="introduction"
          className={`${styles.lesson} ${selected === 'introduction' ? styles.selected : ''}`}
          onClick={() => {
            setSelected('introduction')
            navigate(`/learn/${courseId}`)
          }}
        >
          Introduction
        </li>
        {!isLoading && lessons.map((lesson) => {
          return <li
            key={lesson._id}
            className={`${styles.lesson} ${selected === lesson._id ? styles.selected : ''}`}
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
                  setSelected(lesson._id)
                  navigate(`lessons/${lesson._id}`)
                }}
              >
                {lesson.title}
              </span>
            </div>
          </li>
        })}
      </ol>
    </div>
    <Outlet context={{lessons: isLoading ? [] : lessons, setSelected}}/>
  </div>
}