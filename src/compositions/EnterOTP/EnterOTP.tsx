import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './EnterOTP.module.css'
import {verifyOTP} from 'api/otpAPI'

export function EnterOTP() {
  const [otpEmail, setOTPEmail] = useState('')
  const [otpCode, setOTPCode] = useState(null)
  const navigate = useNavigate()

  const verifyOTPMutation = useMutation(verifyOTP, {
    onSuccess: (data: any) => {
      const {accessToken, refreshToken, userId} = data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userId', userId)
      navigate('../reset')
    },
    onError: (err: any) => {
      if (err.response) {
        return err.response.data.message
      }

      return err.message
    }
  })

  useEffect(() => {
    const otpEmail = localStorage.getItem('otpEmail')
    if (!otpEmail) navigate('/login')
    setOTPEmail(otpEmail)
  }, [])

  return <AuthLayout>
    <div className={`${styles.background} ${styles.container}`}>
      <img className={`${styles.logo}`} src={logo} />
      <h1 className={`${styles.title}`}>Enter OTP</h1>
      <p className={`${styles.instruction}`}>A 4 digit code has been sent to {`${otpEmail}`}</p>
      <form className={`${styles.form}`}  onSubmit={(e) => e.preventDefault()}>
        <input
          className={`${styles.textInput}`}
          type="text"
          placeholder="Enter OTP"
          value={otpCode}
          onChange={(e) => {
            setOTPCode(Number(e.target.value) || null)
          }}
        />
        <button
          className={`${styles.submitButton}`}
          type="submit"
          onClick={async () => {
            if (otpCode && otpCode > 999) {
              await verifyOTPMutation.mutateAsync({email: otpEmail, code: otpCode})
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
