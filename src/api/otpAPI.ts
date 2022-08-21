import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080/api/v1'

export const otpAPI = axios.create({
  baseURL: `${baseURL}/otp`,
})

export const createOTP = async function(body) {
  const data = await otpAPI.post('/', body)
  return data
}

export const verifyOTP = async function (body) {
  const data = await otpAPI.post('/verify', body)
  return data
}

export default otpAPI
