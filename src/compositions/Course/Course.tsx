import {useParams} from 'react-router'
import {useQuery} from 'react-query'
import {getSingleCourseFactory} from 'api/coursesAPI'

import styles from './Course.module.css'

export function Course() {
  const {courseId} = useParams()

  const {isLoading, isError, error, data: course} = useQuery(`courses/${courseId}`, getSingleCourseFactory(courseId), {
    select: response => response.data.data
  })

  return <div></div>
}
