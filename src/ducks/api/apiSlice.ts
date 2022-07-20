import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api/v1',
  // credentials: 'include',
  prepareHeaders: (headers, {getState}: any) => {
    const accessToken = getState().auth.accessToken

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`)
    }

    return headers
  }
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (/*builder*/) => ({})
})
