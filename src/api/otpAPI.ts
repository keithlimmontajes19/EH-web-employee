import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const otpAPI = axios.create({
  baseURL: `${baseURL}/otp`,
})

export default otpAPI

// all methods below will be deprecated/deleted in the future
export const createOTP = async function(body) {
  const data = await otpAPI.post('/', body)
  return data
}

export const verifyOTP = async function (body) {
  const data = await otpAPI.post('/verify', body)
  return data
}
