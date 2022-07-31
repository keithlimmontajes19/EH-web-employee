import {apiSlice} from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: {...credentials}
      }),
      transformResponse: (({userId, accessToken, refreshToken}) => {
        localStorage.setItem('userId', userId)
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
      })
    })
  })
})

export const {
  useLoginMutation
} = authApiSlice
