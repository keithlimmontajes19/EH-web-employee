import Gleap from 'gleap'
import {useEffect} from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import RequireAuthentication from './components/RequireAuthentication'
import Login from './views/public/Login'
import Logout from './views/public/Logout'
import MainLayout from './views/private/MainLayout'
import Home from './views/private/Home'
import Team from './views/private/Team'
import Learn from './views/private/Learn'
// import Curriculum from './views/private/Curriculum'
import ProfileUser from './compositions/ProfileUser'
import ProfileAccount from './compositions/ProfileAccount'
import ProfileOrg from './compositions/ProfileOrganization'
import ViewPageDetails from './compositions/ViewPageDetails'
import {ForgotPassword} from 'compositions/ForgotPassword'
import {EnterOTP} from 'compositions/EnterOTP'
import {ResetPassword} from 'compositions/ResetPassword'
import {Organization} from 'compositions/Organization'
import {CourseLayout} from 'layouts/CourseLayout'
import {Course} from 'compositions/Course'
import {Lesson} from 'compositions/Lesson'

export default function App() {
  useEffect(() => {
    // Gleap.disableConsoleLogOverwrite()
    Gleap.initialize('nBmAvOQGDtWWtYRtQAcvUTpuYVf7SUq9')
  }, [])

  return <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />

      <Route path="forgot-password">
        <Route index element={<ForgotPassword />} />
        <Route path="otp" element={<EnterOTP />} />
        <Route path="reset" element={<ResetPassword />} />
      </Route>

      {/* protected routes */}
      <Route element={<RequireAuthentication />}>
        <Route element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="learn">
            <Route index element={<Learn />} />
            <Route path=":courseId" element={<CourseLayout />}>
              <Route index element={<Course />} />
              <Route path="lessons">
                <Route path=":lessonId" element={<Lesson />} />
              </Route>
              <Route path="lessons/:lessonId/contents/:contentId" element={<div></div>} />
            </Route>
          </Route>
          <Route path="team">
            <Route path="detail" element={<ViewPageDetails />} />
          </Route>
          <Route path="profile">
            <Route path="user" element={<ProfileUser />} />
            <Route path="account" element={<ProfileAccount />} />
          </Route>
          <Route path="organizations">
            <Route index element={<ProfileOrg />} />
            <Route path=":organizationId" element={<Organization />} />
          </Route>
        </Route>
      </Route>

      {/* catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
}
