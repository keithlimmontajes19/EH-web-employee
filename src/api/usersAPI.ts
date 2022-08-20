import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'https://engage-hub-platform-dev.herokuapp.com/api/v1'

export const usersAPI = axios.create({
  baseURL: `${baseURL}/users`,
})

export const updateUserProfile = async function({userId, body}) {
  const accessToken = localStorage.getItem('accessToken')

  const data = await usersAPI.patch(`/${userId}`, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export default usersAPI
