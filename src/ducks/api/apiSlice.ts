import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:8080/api/v1',
  baseUrl: 'https://engage-hub-platform-dev.herokuapp.com/api/v1',
  // credentials: 'include',
  prepareHeaders: (headers/*, {getState}: any*/) => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      headers.set("Accept", "*/*")
      headers.set("Accept-Encoding", "gzip, deflate, br")
      headers.set("Connection", "keep-alive")
      headers.set("Authorization", `Bearer ${accessToken}`)
    }

    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 403 || result?.error?.status === 401) {
    const refreshArgs = {url: '/auth/refresh-access', method: 'POST',
      body: {
        refreshToken: localStorage.getItem('refreshToken')
      }
    }
    const refreshResult = await baseQuery(refreshArgs, api, extraOptions)

    const {userId, accessToken, refreshToken}: any = refreshResult

    if (userId && accessToken && refreshToken) {
      localStorage.setItem('userId', userId)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      result = await baseQuery(args, api, extraOptions)
    } else {
      localStorage.clear()
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth', 'Courses', 'Users'],
  endpoints: (/*builder*/) => ({})
})
