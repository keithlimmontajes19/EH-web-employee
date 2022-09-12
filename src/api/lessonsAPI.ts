import {useQuery} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const lessonsAPI = axios.create({
  baseURL: `${baseURL}`,
})

export default lessonsAPI

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
    select: response => response.data.data
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

export function useGetLessonContents(lessonId) {
  const tag = `/lessons/${lessonId}/contents`

  const getLessonContents = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await lessonsAPI.get(tag, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: lessonContents} = useQuery(tag, getLessonContents, {
    select: response => response.data.data
  })

  return {isLoading, isError, error, lessonContents, tag}
}
