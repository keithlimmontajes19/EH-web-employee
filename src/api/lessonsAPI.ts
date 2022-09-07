import {useQuery} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080/api/v1'

export const lessonsAPI = axios.create({
  baseURL: `${baseURL}`,
})

export function useGetAllLessons() {
  const tag = '/lessons'

  const getAllLessons = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await lessonsAPI.get(tag, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: lessons} = useQuery(tag, getAllLessons, {
    select: response => response.data
  })

  return {isLoading, isError, error, lessons, tag}
}

export function useGetSingleLesson(lessonId) {
  const tag = `/lessons/${lessonId}`

  const getSingleLesson = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await lessonsAPI.get(tag, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: lesson} = useQuery(tag, getSingleLesson, {
    select: response => response.data.data
  })

  return {isLoading, isError, error, lesson, tag}
}

export default lessonsAPI
