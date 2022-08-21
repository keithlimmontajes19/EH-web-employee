import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080/api/v1'

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

export const updateUserAvatar = async function({userId}) {
  const accessToken = localStorage.getItem('accessToken')

  const data = await usersAPI.put(`/${userId}/avatar`, {}, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export const getUser = async function() {
  const accessToken = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  const data = await usersAPI.get(`/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}


export const getUserOrganizations = async function() {
  const accessToken = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  const data = await usersAPI.get(`/${userId}/organizations`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export const getUserCourses = async function() {
  const accessToken = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')

  const data = await usersAPI.get(`/${userId}/courses`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return data
}

export default usersAPI
