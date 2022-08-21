import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080/api/v1'

export const coursesAPI = axios.create({
  baseURL: `${baseURL}/courses`,
})

export const getCourses = async function() {
  const accessToken = localStorage.getItem('accessToken')

  const data = await coursesAPI.get('/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export const getSingleCourse = async function({_id}) {
  const accessToken = localStorage.getItem('accessToken')

  const data = await coursesAPI.get(`/${_id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export default coursesAPI
