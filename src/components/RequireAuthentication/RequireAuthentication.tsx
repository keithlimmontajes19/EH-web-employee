import {Navigate, Outlet, useLocation} from 'react-router-dom'

export default function RequireAuthentication() {
  const location = useLocation()

  const accessToken = localStorage.getItem('accessToken')

  return accessToken
    ? <Outlet />
    : <Navigate to="/login" state={{from: location}} replace />
}
