import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import {useLocation, useNavigate, useParams, Outlet} from 'react-router'
import {useQuery} from 'react-query'
import {getCourseLessonsFactory} from 'api/coursesAPI'

import LessonContents from './LessonContents/LessonContents'

import styles from './CourseLayout.module.css'

export function CourseLayout() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {courseId} = useParams()
  const [selected, setSelected] = useState('')
  const [expandedLesson, setExpandedLesson] = useState([])

  const {isLoading, isError, error, data: lessons} = useQuery(`courses/${courseId}/lessons`, getCourseLessonsFactory(courseId), {
    select: response => response.data.data
  })

  useEffect(() => {
    if (pathname.startsWith(`/learn/${courseId}/lessons`)) {
      const result = pathname.split('/')[4]
      setExpandedLesson([result])
    }
    setSelected(pathname)
  }, [])

  return <div className={styles.course}>
    <div className={styles.sidenav}>
      <h3 className={styles.title}>Curriculum</h3>
      <ol className={styles.curriculum}>
        <li
          key={`/learn/${courseId}`}
          className={`${styles.lesson} ${selected === `/learn/${courseId}` ? styles.selected : ''}`}
          onClick={() => {
            setSelected(`/learn/${courseId}`)
            navigate(`/learn/${courseId}`)
          }}
        >
          <span style={{paddingLeft: '13px'}}>Introduction</span>
        </li>
        {!isLoading && lessons.map((lesson) => {
          return <>
            <li
              key={`/lessons/${lesson._id}`}
              className={`${styles.lesson} ${selected === `/learn/${courseId}/lessons/${lesson._id}` ? styles.selected : ''}`}
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
            {expandedLesson.includes(lesson._id) && <LessonContents
              key={`lessons/${lesson._id}/contents`}
              selected={selected}
              setSelected={setSelected} courseId={courseId}
              expandedLesson={expandedLesson}
              setExpandedLesson={setExpandedLesson}
              lessonId={lesson._id}
            />}
          </>
        })}
      </ol>
    </div>
    <Outlet context={{lessons: isLoading ? [] : lessons, setSelected}}/>
  </div>
}
