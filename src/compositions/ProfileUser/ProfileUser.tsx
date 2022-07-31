import axios from 'axios';
import Gleap from 'gleap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  StyledSave,
  StyledText,
  StyledLabel,
  StyledInput,
  StyledCancel,
  RowContainer,
  FlexContainer,
  ButtonContainer,
  UploadContainer,
} from './styled';
import {Avatar, Spin, message } from 'antd';
import UploadButton from 'components/UploadButton';

import { imageTypes } from 'utils/file-types';
import USER_LOGO from 'assets/icons/profile-user.png';
import { reloadUser, useGetSingleUserQuery, useUpdateUserAvatarMutation } from 'ducks/users/usersApiSlice';

import styles from './ProfileUser.module.css'

export default function ProfileUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId')

  if (!userId) navigate('/login')

  const { data: user } = useGetSingleUserQuery(userId)
  const [updateUserAvatar, { isLoading }] = useUpdateUserAvatarMutation()

  return <>
    <RowContainer>
      <FlexContainer>
        <StyledText>My Profile</StyledText>
        <Spin spinning={isLoading}>
          <Avatar size={140} src={user?.profile?.avatar || USER_LOGO} />
        </Spin>
        <UploadContainer>
          <input
            id="user-profile-avatar-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={(event) => {
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
                    .put(url, file, { headers: { 'Content-Type': '' } })
                    .then(() => dispatch(reloadUser(userId)))
                })
            }}
          />
          <input
            type="button"
            className={styles['upload-button']}
            value="Change Photo"
            onClick={() => { document.getElementById('user-profile-avatar-upload').click() }}
          />
        </UploadContainer>

        <StyledLabel>First Name</StyledLabel>
        <StyledInput />

        <StyledLabel>Last Name</StyledLabel>
        <StyledInput />

        <StyledLabel style={{ paddingLeft: 25 }}>Phone Number </StyledLabel>
        <StyledInput />

        <ButtonContainer>
          <StyledCancel>CANCEL</StyledCancel>
          <StyledSave>SAVE</StyledSave>
        </ButtonContainer>
      </FlexContainer>
    </RowContainer>
  </>
}
