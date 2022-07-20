import {Navigate, Outlet, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {setAccessToken} from '../../ducks/auth/authSlice'

export default function RequireAuthentication() {
  const dispatch = useDispatch()
  const location = useLocation()

  const accessToken = localStorage.getItem('accessToken')
  dispatch(setAccessToken({accessToken}))

  return accessToken
    ? <Outlet />
    : <Navigate to="/login" state={{from: location}} replace />
}
