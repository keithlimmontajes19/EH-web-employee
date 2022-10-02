import {useQuery} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const quizzesAPI = axios.create({
  baseURL: `${baseURL}`,
})

export function useGetQuizQuestions(quizId) {
  const tag = `/quizzes/${quizId}/questions`

  const getQuizQuestions = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await quizzesAPI.get(tag, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: questions} = useQuery(tag, getQuizQuestions, {
    select: response => response.data.data
  })

  return {isLoading, isError, error, questions, tag}
}
