import {useQueryClient, useMutation} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const authAPI = axios.create({
  baseURL: `${baseURL}/auth`,
})

export default authAPI

export function useLogin() {
  type params = {username: string, password: string}
  type data = {userId: string, accessToken: string, refreshToken: string}

  const queryClient = useQueryClient()

  const tag = '/login'
  const login = async ({username, password}: params) => {
    queryClient.clear()
    return await authAPI.post(tag, {username, password})
  }
  const loginMutation = useMutation(login, {
    onSuccess: (response) => {
      const {userId, accessToken, refreshToken} = response.data as data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userId', userId)
    },
    onError: (err: any) => {
      return err.response.data
    }
  })

  return {tag, loginMutation}
}

// all methods below will be deprecated/deleted in the future
export const login = async function(credentials) {
  const data = await authAPI.post('/login', credentials)
  return data
}
