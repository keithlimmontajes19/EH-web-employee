import axios from 'axios'

export const otpAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/otp`,
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
