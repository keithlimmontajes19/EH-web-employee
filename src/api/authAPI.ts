import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'https://engage-hub-platform-dev.herokuapp.com/api/v1'

export const authAPI = axios.create({
  baseURL: `${baseURL}/auth`,
})

export const login = async function(credentials) {
  const data = await authAPI.post('/login', credentials)
  return data
}

export default authAPI
