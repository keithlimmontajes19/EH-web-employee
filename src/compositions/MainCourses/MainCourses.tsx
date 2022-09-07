import {useNavigate} from 'react-router'
import {useQuery} from 'react-query'
import {getUserCourses} from 'api/usersAPI'
import noImage from 'assets/images/no-image.png'
import userIcon from 'assets/images/user-icon.png'
import styles from './MainCourses.module.css'

export function MainCourses() {
  const navigate = useNavigate()

  const {isLoading, isError, error, data: response} = useQuery('user_courses', getUserCourses, {
    select: response => response.data
  })

  return <div className={`${styles.container}`}>
    <h2 className={`${styles.title}`}>Main Courses</h2>
    <div className={`${styles.coursesContainer}`}>
      {!isLoading && response.data.map((course) => {
        return <div className={`${styles.courseCard}`} onClick={() => {navigate(`${course._id}`)}}>
          <img className={`${styles.preview}`}  src={course.preview || noImage} />
          <div className={`${styles.courseInfo}`}>
            <h3 className={`${styles.courseTitle}`}>{course.title}</h3>
            <div className={`${styles.instructor}`}>
              <img className={`${styles.instructorIcon}`} src={userIcon} />
              <span className={`${styles.instructorName}`}>{course.instructor.title} {course.instructor.name}</span>
            </div>
          </div>
        </div>
      })}
    </div>
  </div>
}
