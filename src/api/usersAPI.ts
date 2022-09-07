import {useCallback, useState, useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const usersAPI = axios.create({
  baseURL: `${baseURL}/users`,
})

export default usersAPI

export function useGetUserCourses(userId) {
  const [tag, setTag] = useState('')

  useEffect(() => {
    setTag(`/${userId}/courses`)
  }, [userId])

  const getUserCourses = async () => {
    const accessToken = localStorage.getItem('accessToken')
    return await usersAPI.get(tag, {headers: {Authorization: `Bearer ${accessToken}`}})
  }

  const {isLoading, isError, error, data: courses} = useQuery(tag, getUserCourses, {select: response => response.data.data})

  return {isLoading, isError, error, courses, tag}
}

// all methods below will be deprecated/deleted in the future
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

export const getSingleUserFactory = async function(userId) {
  return async function() {
    const accessToken = localStorage.getItem('accessToken')

    const data = await usersAPI.get(`/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }
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
