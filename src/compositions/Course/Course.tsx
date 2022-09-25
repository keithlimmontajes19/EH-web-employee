import {useParams} from 'react-router'
import {useQuery} from 'react-query'
import {getSingleCourseFactory} from 'api/coursesAPI'

import USER_ICON from 'assets/icons/profile-user.png'
import LESSONS_ICON from 'assets/icons/lessons.png'
import TOPICS_ICON from 'assets/icons/topics.png'
import RATING_ICON from 'assets/icons/rating.png'
import QUIZZES_ICON from 'assets/icons/quizzes.png'
import VIDEOS_ICON from 'assets/icons/videos.png'
import NO_IMAGE from 'assets/icons/no-image-icon.png'

import styles from './Course.module.css'

export function Course() {
  const {courseId} = useParams()

  const {isLoading, isError, error, data: course} = useQuery(`courses/${courseId}`, getSingleCourseFactory(courseId), {
    select: response => response.data.data
  })

  return (!isLoading && <div className={styles.courseContainer}>
    <img className={`${styles.coursePreview} ${!course.preview && styles.noCoursePreview}`}  src={course.preview || NO_IMAGE} />
    <div className={styles.courseInfo}>
      <h3 className={styles.courseTitle}>{course.title}</h3>
      <div className={styles.courseStats}>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={USER_ICON} />Instructor</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={RATING_ICON} />4.8</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={LESSONS_ICON} />{course.stats.lessons} Lessons</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={QUIZZES_ICON} />{course.stats.quizzes} Quizzes</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={TOPICS_ICON} />{course.stats.topics} Topics</p>
        <p className={styles.courseStat}><img className={styles.statsIcon} src={VIDEOS_ICON} />{course.stats.videos} Videos</p>
      </div>
      <p className={styles.courseDescription}>{course.description}</p>
    </div>
    <div className={styles.startCourseContainer}>
      <button className={styles.startCourse}>
        START COURSE
      </button>
    </div>
  </div>)
}
