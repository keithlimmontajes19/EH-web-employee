import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {userId: null, accessToken: null},
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload)
      const {userId, accessToken} = action.payload

      state.userId = userId
      state.accessToken = accessToken

      localStorage.setItem('userId', userId)
      localStorage.setItem('accessToken', accessToken)
    },
    logOut: (state, action) => {
      state.userId = null
      state.accessToken = null
    }
  }
})

export const authSliceReducer = authSlice.reducer
export const {setCredentials, logOut} = authSlice.actions
export const selectCurrentUserId = (state) => state.auth.userId
export const selectAccessToken = (state) => state.auth.accessToken
