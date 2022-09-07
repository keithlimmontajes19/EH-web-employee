import {useParams, useOutletContext, useNavigate} from 'react-router'
import {useQuery} from 'react-query'
import {getSingleCourseFactory} from 'api/coursesAPI'

import USER_ICON from 'assets/icons/profile-user.png'
import LESSONS_ICON from 'assets/icons/lessons.png'
import TOPICS_ICON from 'assets/icons/topics.png'
import RATING_ICON from 'assets/icons/rating.png'
import QUIZZES_ICON from 'assets/icons/quizzes.png'
import VIDEOS_ICON from 'assets/icons/videos.png'

import styles from './Course.module.css'

export function Course() {
  const navigate = useNavigate()
  const {lessons, setSelected} = useOutletContext() as any
  const {courseId} = useParams()

  const {isLoading, isError, error, data: course} = useQuery(`courses/${courseId}`, getSingleCourseFactory(courseId), {
    select: response => response.data.data
  })

  return (!isLoading && <div className={styles.courseContainer}>
    <img className={styles.coursePreview}  src={course.preview} />
    <div className={styles.courseInfo}>
      <h3 className={styles.courseTitle}>{course.title}</h3>
      <div className={styles.courseStats}>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={USER_ICON} />Instructor</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={RATING_ICON} />4.8</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={LESSONS_ICON} />1 Lessons</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={QUIZZES_ICON} />1 Quizzes</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={TOPICS_ICON} />1 Topics</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={VIDEOS_ICON} />1 Videos</p>
      </div>
      <p className={styles.courseDescription}>{course.description}</p>
    </div>
    <div className={styles.startCourseContainer}>
      <button
        className={styles.startCourse}
        onClick={() => {
          navigate(`lessons/${lessons[0]._id}`)
          setSelected(`${lessons[0]._id}`)
        }}
      >
        START COURSE
      </button>
    </div>
  </div>)
}
