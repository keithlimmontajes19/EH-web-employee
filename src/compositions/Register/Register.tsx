import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './Register.module.css'

export function ResetPassword() {
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
      <h1 className={`${styles.title}`}>Sign up with your email</h1>
      <form className={`${styles.form}`}  onSubmit={(e) => e.preventDefault()}>
        <input className={`${styles.textInput}`} type="text" placeholder="First Name" />
        <input className={`${styles.textInput}`} type="text" placeholder="Last Name" />
        <input className={`${styles.textInput}`} type="text" placeholder="Email Address" />
        <input className={`${styles.textInput}`} type="password" placeholder="Password" />
        <button className={`${styles.submitButton}`} type="submit">SUBMIT</button>
        <Link to="/login" className={styles.cancel}>CANCEL</Link>
      </form>
    </div>
  </AuthLayout>
}
