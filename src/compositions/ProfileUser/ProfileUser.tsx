import axios from 'axios'
import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import {
  StyledText,
  RowContainer,
  FlexContainer,
  UploadContainer,
} from './styled'

import {useQuery, useMutation, useQueryClient} from 'react-query'
import {updateUserProfile, updateUserAvatar, getUser} from 'api/usersAPI'

import styles from './ProfileUser.module.css'
import {Avatar, Spin, message} from 'antd'
import {imageTypes} from 'utils/file-types'

export default function ProfileUser() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const userId = localStorage.getItem('userId')
  if (!userId) navigate('/logout')

  const {isLoading, isError, error, data: user} = useQuery(`users/${userId}`, getUser, {
    select: response => response.data.data
  })

  const updateUserAvatarMutation = useMutation(updateUserAvatar, {
    onSuccess: async () => {
      // do nothing because the endpoint will return a presignedUploadUrl
      await queryClient.invalidateQueries(`users/${userId}`)
    }
  })

  const updateUserProfileMutation = useMutation(updateUserProfile, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(`users/${userId}`)
    }
  })

  const onFormProfileSubmit = useCallback((event) => {
    event.preventDefault()

    const profile = Array
      .from(new FormData(event.target))
      .filter(([, v]) => v)
      .reduce((current, value) => ({...current, [value[0]]: value[1]}), {})

    // remove this in the future
    // we need a way to set the country and phone number
    profile['country'] = 'usa'

    updateUserProfileMutation.mutateAsync({userId, body: profile})
      .then(async () => {
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
      message.error('Unsupported file type.', 3)
      return
    }

    updateUserAvatarMutation.mutateAsync({userId})
      .then(async (result: any) => {
        const url = result?.data?.data?.uploadUrl

        await axios.put(url, file, { headers: { 'Content-Type': file.type } })

        setTimeout(async () => {
          await queryClient.invalidateQueries(`users/${userId}`)
        }, 1000)
      })
  }, [])

  return <>
    <RowContainer>
      <FlexContainer>
        <StyledText>My Profile</StyledText>
        <Spin spinning={updateUserAvatarMutation.isLoading}>
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
            defaultValue={user?.profile?.firstName}
            placeholder="First Name"
          />

          <label htmlFor="lastName" className={styles['form-profile__label']}>Last Name</label>
          <input
            id="lastName"
            className={styles['form-profile__input']}
            type="text"
            name="lastName"
            defaultValue={user?.profile?.lastName}
            placeholder="Last Name"
          />

          <label htmlFor="phoneNumber" className={styles['form-profile__label']}>Phone Number</label>
          <input
            id="phoneNumber"
            className={styles['form-profile__input']}
            type="text"
            name="phoneNumber"
            defaultValue={user?.profile?.phoneNumber}
            placeholder="Phone Number"
          />

          <div className={styles['form-profile__button-container']}>
            <button className={styles['form-profile__button-cancel']} type="reset" onClick={() => navigate(-1)}>CANCEL</button>
            <button className={styles['form-profile__button-save']} type="submit">SAVE <Spin spinning={updateUserProfileMutation.isLoading} /></button>
          </div>
        </form>
      </FlexContainer>
    </RowContainer>
  </>
}
