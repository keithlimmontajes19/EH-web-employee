import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
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

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['Courses', 'Users'],
  endpoints: (/*builder*/) => ({})
})
