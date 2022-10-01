import {useNavigate} from 'react-router'
import {useQuery} from 'react-query'
import {getUserCourses} from 'api/usersAPI'
import noImage from 'assets/images/no-image.png'
import userIcon from 'assets/images/user-icon.png'
import styles from './MyCourses.module.css'
import CircularProgress from 'components/CircularProgress'
import Loading from 'components/Loading'

export function MyCourses() {
  const navigate = useNavigate()

  const {isLoading, isError, error, data: response} = useQuery('user_courses', getUserCourses, {
    select: response => response.data
  })

  return <div className={`${styles.card}`}>
    <h1 className={`${styles.title}`}>My Courses</h1>
    {isLoading && <Loading />}
    {!isLoading && response.data.slice(0, 3).map((course) => {
      return <div key={course._id} className={`${styles.container}`}>
        <img className={`${styles.preview}`}  src={course.preview || noImage} />
        <div className={`${styles.courseInfo}`}>
          <h3 className={`${styles.courseTitle}`}>{course.title}</h3>
          <div className={`${styles.instructor}`}>
            <img className={`${styles.instructorIcon}`} src={userIcon} />
            <span className={`${styles.instructorName}`}>{course.instructor.title} {course.instructor.name}</span>
          </div>
        </div>
        <div className={`${styles.courseProgress}`} onClick={() => {navigate(`${course._id}`)}}>
          <CircularProgress status={'ongoing'} percent={50} />
        </div>
      </div>
    })}
  </div>
}
