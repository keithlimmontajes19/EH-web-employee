import axios from 'axios'
import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {
  reloadUser,
  useGetSingleUserQuery,
  useUpdateUserAvatarMutation,
  useUpdateUserProfileMutation
} from 'ducks/users/usersApiSlice'

import {
  StyledText,
  RowContainer,
  FlexContainer,
  UploadContainer,
} from './styled'

import styles from './ProfileUser.module.css'
import USER_LOGO from 'assets/icons/profile-user.png'
import {Avatar, Spin, message} from 'antd'
import {imageTypes} from 'utils/file-types'

export default function ProfileUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId')
  if (!userId) navigate('/logout')

  const {data: user} = useGetSingleUserQuery(userId)
  const [updateUserAvatar, {isLoading: isLoadingUpdateUserAvatar}] = useUpdateUserAvatarMutation()
  const [updateUserProfile, {isLoading: isLoadingUpdateUserProfile}] = useUpdateUserProfileMutation()

  const onFormProfileSubmit = useCallback((event) => {
    event.preventDefault()
    // const profile = Object.fromEntries(new FormData(event.target))

    const profile = Array
      .from(new FormData(event.target))
      .filter(([, v]) => v)
      .reduce((current, value) => ({...current, [value[0]]: value[1]}), {})

    updateUserProfile({userId, profile})
      .then(() => {
        event.target.reset()
      })
      .catch(() => {
        message.error('Error in updating user profile.')
      })
  }, [])

  const onAvatarChange = useCallback((event) => {
    const file = event.target.files[0]

    if (!file) return
    if (!imageTypes.includes(file.type)) {
      message.error('Unsupported file type.')
      return
    }

    updateUserAvatar(userId)
      .then((result: any) => {
        const url = result?.data?.updateUrl

        axios
          .put(url, file, { headers: { 'Content-Type': file.type } })
          .then(() => dispatch(reloadUser(userId)))
      })
  }, [])

  return <>
    <RowContainer>
      <FlexContainer>
        <StyledText>My Profile</StyledText>
        <Spin spinning={isLoadingUpdateUserAvatar}>
          {user?.profile?.avatar && <Avatar size={140} src={user?.profile?.avatar} />}
          {!user?.profile?.avatar && <Avatar size={140} style={{fontSize: 64}}>{user?.profile?.firstName[0]}</Avatar>}
        </Spin>
        <UploadContainer>
          <input
            id="user-profile-avatar-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={onAvatarChange}
          />
          <input
            type="button"
            className={styles['upload-button']}
            value="Change Photo"
            onClick={() => {document.getElementById('user-profile-avatar-upload').click()}}
          />
        </UploadContainer>

        <form className={styles['form-profile']} onSubmit={onFormProfileSubmit}>
          <label htmlFor="firstName" className={styles['form-profile__label']}>First Name</label>
          <input
            id="firstName"
            className={styles['form-profile__input']}
            type="text"
            name="firstName"
            placeholder={user?.profile?.firstName}
          />

          <label htmlFor="lastName" className={styles['form-profile__label']}>Last Name</label>
          <input
            id="lastName"
            className={styles['form-profile__input']}
            type="text"
            name="lastName"
            placeholder={user?.profile?.lastName}
          />

          <label htmlFor="phoneNumber" className={styles['form-profile__label']}>Phone Number</label>
          <input
            id="phoneNumber"
            className={styles['form-profile__input']}
            type="text"
            name="phoneNumber"
            placeholder={user?.profile?.phoneNumber}
          />

          <div className={styles['form-profile__button-container']}>
            <button className={styles['form-profile__button-cancel']} type="reset">CANCEL</button>
            <button className={styles['form-profile__button-save']} type="submit">SAVE <Spin spinning={isLoadingUpdateUserProfile}></Spin></button>
          </div>
        </form>
      </FlexContainer>
    </RowContainer>
  </>
}
