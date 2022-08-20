import {Link} from 'react-router-dom'
import {AuthLayout} from 'layouts/AuthLayout'
import logo from 'assets/icons/logo.png'
import styles from './ForgotPassword.module.css'

export function ForgotPassword() {
  return <AuthLayout>
    <div className={`${styles.background} ${styles.container}`}>
      <img className={`${styles.logo}`} src={logo} />
      <h1 className={`${styles.title}`}>Forgot Password</h1>
      <p className={`${styles.instruction}`}>Please enter the address associated with your account.</p>
      <form className={`${styles.form}`}  onSubmit={(e) => e.preventDefault()}>
        <input className={`${styles.textInput}`} type="email" placeholder="Email Address" />
        <button className={`${styles.submitButton}`} type="submit">SUBMIT</button>
        <Link to="/login" className={styles.cancel}>CANCEL</Link>
      </form>
    </div>
  </AuthLayout>
}
