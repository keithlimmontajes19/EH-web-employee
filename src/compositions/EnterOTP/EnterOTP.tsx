import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './EnterOTP.module.css'

export function EnterOTP() {
  const [otpEmail, setOTPEmail] = useState('')
  const navigate = useNavigate()

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
        <input className={`${styles.textInput}`} type="text" placeholder="Enter OTP" />
        <button className={`${styles.submitButton}`} type="submit">SUBMIT</button>
        <Link to="/login" className={styles.cancel}>CANCEL</Link>
      </form>
    </div>
  </AuthLayout>
}
