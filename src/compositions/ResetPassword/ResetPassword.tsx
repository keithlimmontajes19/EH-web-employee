import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './ResetPassword.module.css'
import {updateUserProfile} from 'api/usersAPI'

export function ResetPassword() {
  const [userId, setUserId] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()

  const updateUserProfileMutation = useMutation(updateUserProfile, {
    onSuccess: () => {
      navigate('/')
    },
    onError: (err: any) => {
      console.log(err.response.data.message)
      if (err.response) {
        return err.response.data.message
      }

      return err.message
    }
  })

  useEffect(() => {
    localStorage.removeItem('otpEmail')

    const userId = localStorage.getItem('userId')

    if (!userId) {
      localStorage.removeItem('userId')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      navigate('/login')
    }

    setUserId(userId)
  }, [])

  return <AuthLayout>
    <div className={`${styles.background} ${styles.container}`}>
      <img className={`${styles.logo}`} src={logo} />
      <h1 className={`${styles.title}`}>Reset Password</h1>
      <form className={`${styles.form}`}  onSubmit={(e) => e.preventDefault()}>
        <input
          className={`${styles.textInput}`}
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          className={`${styles.textInput}`}
          type="password"
          placeholder="Confirm New Password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button
          className={`${styles.submitButton}`}
          type="submit"
          onClick={async () => {
            if (userId && password1 === password2) {
              const body = {password: password1}
              await updateUserProfileMutation.mutateAsync({userId, body})
            }
          }}
        >
          SUBMIT
        </button>
        <Link to="/login" className={styles.cancel}>CANCEL</Link>
      </form>
    </div>
  </AuthLayout>
}
