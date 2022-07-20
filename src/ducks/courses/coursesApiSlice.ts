import {apiSlice} from '../api/apiSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<any[], void>({
      query: () => '/courses',
      transformResponse: ({data}) => data,
      providesTags: () => [{type: 'Courses', id: 'LIST'}]
    })
  })
})

export const {
  useGetCoursesQuery
} = coursesApiSlice
