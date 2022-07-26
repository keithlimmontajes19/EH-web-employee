import {apiSlice} from 'ducks/api/apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query<any, string>({
      query: (userId) => `/users/${userId}`,
      transformResponse: ({data}) => data,
      providesTags: (result, /*err, arg*/) => {
        const {_id: id} = result
        return [{type: 'Users', id}]
      }
    })
  })
})

export const {
  useGetSingleUserQuery
} = usersApiSlice
