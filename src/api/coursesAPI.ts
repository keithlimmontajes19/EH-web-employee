import axios from 'axios'
import {useQuery} from 'react-query'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const coursesAPI = axios.create({
  baseURL: `${baseURL}/courses`,
})

export default coursesAPI

// all methods below will be deprecated/deleted in the future
export const getCourses = async function() {
  const accessToken = localStorage.getItem('accessToken')

  const data = await coursesAPI.get('/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export const getSingleCourseFactory = function(courseId) {
  return async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await coursesAPI.get(`/${courseId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }
}

export const getCourseLessonsFactory = function(courseId) {
  return async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await coursesAPI.get(`/${courseId}/lessons`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }
}

export function useGetCourseFullCurriculum(courseId) {
  const tag = `/courses/${courseId}/full-curriculum`

  const getCourseFullCurriculum = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await coursesAPI.get(`/${courseId}/full-curriculum`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: courseCurriculum} = useQuery(tag, getCourseFullCurriculum, {
    select: response => response.data.data
  })

  return {isLoading, isError, error, courseCurriculum, tag}
}
