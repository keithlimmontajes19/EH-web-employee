import axios from 'axios'

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
