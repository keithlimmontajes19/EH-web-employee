import axios from 'axios'

export const authAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/auth`,
})

export const login = async function(credentials) {
  const data = await authAPI.post('/login', credentials)
  return data
}

export default authAPI
