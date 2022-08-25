import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useQuery, useMutation, useQueryClient} from 'react-query'
import {Spin} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {updateUserProfile, getUser} from 'api/usersAPI'
import styles from './ProfileAccount.module.css'

export default function ProfileAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  // navigate if no user exists
  const userId = localStorage.getItem('userId')
  if (!userId) navigate('/logout')

  const queryClient = useQueryClient()

  // updates the user profile
  const updateUserProfileMutation = useMutation(updateUserProfile, {
    onSuccess: async () => {
      // refetch user again
      await queryClient.invalidateQueries(`users/${userId}`)
    }
  })

  const {isLoading, isError, error, data: user} = useQuery(`users/${userId}`, getUser, {
    select: response => response.data.data
  })

  const submitFormHandler = async (event) => {
    event.preventDefault()

    const {username, email, password, confirmPassword} = Object.fromEntries(new FormData(event.target))
    const body = {}

    if (username) body['username'] = username
    if (email && email !== user?.profile?.email) body['email'] = email
    if (password && password === confirmPassword) body['password'] = password

    if (Object.keys(body).length) {
      try {
        await updateUserProfileMutation.mutateAsync({userId, body})
      } catch (err) {
        // catch error here
      }
    }
  }

  return <div className={`${styles.container}`}>
    <h3 className={`${styles.title}`}>Account Settings</h3>
    <form className={`${styles.form}`} onSubmit={submitFormHandler}>
      {/* <input
        className={`${styles.textInput}`}
        type="email"
        name="username"
        placeholder="Username"
      /> */}
      <input
        className={`${styles.textInput}`}
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <input
        className={`${styles.textInput}`}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <input
        className={`${styles.textInput}`}
        type="password"
        name="confirmPassword"
        placeholder="Re-Type Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value.trim())}
      />
      {password !== confirmPassword && <p className={`${styles.error}`}>
        <span><FontAwesomeIcon icon={faExclamationCircle} /></span>&nbsp;Passwords don't match
      </p>}
      <div className={`${styles.submitContainer}`}>
        <a className={`${styles.cancelButton}`} onClick={() => navigate(-1)}>
          CANCEL
        </a>
        <button className={`${styles.submitButton}`} type="submit">SAVE&nbsp;<Spin spinning={updateUserProfileMutation.isLoading} /></button>
      </div>
    </form>
  </div>
}
