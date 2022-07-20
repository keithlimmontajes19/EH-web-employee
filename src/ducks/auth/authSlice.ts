import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {userId: null, accessToken: null},
  reducers: {
    setCredentials: (state, action) => {
      const {userId, accessToken} = action.payload

      state.userId = userId
      state.accessToken = accessToken

      localStorage.setItem('userId', userId)
      localStorage.setItem('accessToken', accessToken)
    },
    setAccessToken: (state, action) => {
      const {accessToken} = action.payload
      state.accessToken = accessToken
    },
    logOut: (state) => {
      state.userId = null
      state.accessToken = null
    }
  }
})

export const authSliceReducer = authSlice.reducer
export const {setCredentials, setAccessToken, logOut} = authSlice.actions
export const selectCurrentUserId = (state) => state.auth.userId
export const selectAccessToken = (state) => state.auth.accessToken
