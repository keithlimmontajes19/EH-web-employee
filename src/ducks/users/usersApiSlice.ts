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
    }),
    updateUserAvatar: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/avatar`,
        method: 'PATCH'
      }),
      transformResponse: ({data}) => data
    })
  })
})

export const reloadUser = (userId) => usersApiSlice.util.invalidateTags([{type: 'Users', id: userId}])
export const {
  useGetSingleUserQuery,
  useUpdateUserAvatarMutation,
} = usersApiSlice
