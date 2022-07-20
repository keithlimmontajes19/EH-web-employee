import Gleap from 'gleap'
import {useEffect} from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import RequireAuthentication from './components/RequireAuthentication'
import Login from './views/public/Login'
import MainLayout from './views/private/MainLayout'
import Home from './views/private/Home'
import Team from './views/private/Team'
import Learn from './views/private/Learn'
import Curriculum from './views/private/Curriculum'
import ProfileUser from './compositions/ProfileUser'
import ProfileAccount from './compositions/ProfileAccount'
import ProfileOrg from './compositions/ProfileOrganization'
import ViewPageDetails from './compositions/ViewPageDetails'

export default function App() {
  useEffect(() => {
    Gleap.initialize('nBmAvOQGDtWWtYRtQAcvUTpuYVf7SUq9')
  }, [])

  return <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route path="login" element={<Login />} />

      {/* protected routes */}
      <Route element={<RequireAuthentication />}>
        <Route element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="learn">
            <Route index element={<Learn />} />
            <Route path="curriculum" element={<Curriculum />} />
          </Route>
          <Route path="team">
            <Route path="detail" element={<ViewPageDetails />} />
          </Route>
          <Route path="profile">
            <Route path="user" element={<ProfileUser />} />
            <Route path="account" element={<ProfileAccount />} />
            <Route path="organization" element={<ProfileOrg />} />
          </Route>
        </Route>
      </Route>

      {/* catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
}
