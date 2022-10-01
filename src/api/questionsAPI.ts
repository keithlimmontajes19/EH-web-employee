import {useQuery} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const questionsAPI = axios.create({
  baseURL: `${baseURL}`,
})

export function useGetSingleQuestion(questionId) {
  const tag = `/questions/${questionId}`

  const getSingleQuestion = async () => {
    const accessToken = localStorage.getItem('accessToken')

    const data = await questionsAPI.get(tag, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }

  const {isLoading, isError, error, data: question} = useQuery(tag, getSingleQuestion, {
    select: response => response.data.data
  })

  return {isLoading, isError, error, question, tag}
}
