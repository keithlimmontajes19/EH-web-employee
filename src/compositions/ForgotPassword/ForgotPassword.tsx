import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './ForgotPassword.module.css'
import {createOTP} from 'api/otpAPI'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const createOTPMutation = useMutation(createOTP, {
    onSuccess: () => {
      localStorage.setItem('otpEmail', email)
      navigate('otp')
    },
    onError: (err: any) => {
      if (err.response) {
        return err.response.data.message
      }

      return err.message
    }
  })

  return <AuthLayout>
    <div className={`${styles.background} ${styles.container}`}>
      <img className={`${styles.logo}`} src={logo} />
      <h1 className={`${styles.title}`}>Forgot Password</h1>
      <p className={`${styles.instruction}`}>Please enter the address associated with your account.</p>
      <form className={`${styles.form}`}  onSubmit={(e) => e.preventDefault()}>
        <input
          className={`${styles.textInput}`}
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`${styles.submitButton}`}
          type="submit"
          onClick={async () => {
            await createOTPMutation.mutateAsync({email})
          }}
        >
          SUBMIT
        </button>
        <Link to="/login" className={styles.cancel}>CANCEL</Link>
      </form>
    </div>
  </AuthLayout>
}
