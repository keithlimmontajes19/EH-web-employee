import {useRef, useCallback} from 'react'
import {AuthLayout} from 'layouts/AuthLayout'
import LOGO from '../../assets/images/app-logo-2.png'
import styles from './Register.module.css'

export default function Register() {
  const firstName = useRef() as any
  const lastName = useRef() as any
  const email = useRef() as any
  const password = useRef() as any

  const onRegister = useCallback((e) => {
    e.preventDefault()
  }, [])

  return <AuthLayout>
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onRegister}>
        <input type="text" placeholder='First Name' ref={firstName} />
        <input type="text" placeholder='Last Name' ref={lastName} />
        <input type="email" placeholder='Email' ref={email} />
        <input type="password" placeholder='Password' ref={password} />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  </AuthLayout>
}
