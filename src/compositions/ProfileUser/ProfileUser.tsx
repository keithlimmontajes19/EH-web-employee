import {useState} from 'react';

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
import {Avatar} from 'antd';
import UploadButton from 'components/UploadButton';

import USER_LOGO from 'assets/icons/profile-user.png';
import {useGetSingleUserQuery} from 'ducks/users/usersApiSlice';

export default function ProfileUser() {
  const [fileId, setFileId] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const {data: user} = useGetSingleUserQuery(localStorage.getItem('userId'))

  console.log('fileId uploaded:', fileId);
  return <RowContainer>
    <FlexContainer>
      <StyledText>My Profile</StyledText>
      <Avatar size={140} src={user?.profile?.avatar || USER_LOGO} style={{marginLeft: -5}} />
      <UploadContainer>
        <UploadButton
          setFileId={setFileId}
          setImageUrl={setFileUrl}
          placeholder="Change Photo"
        />
      </UploadContainer>

      <StyledLabel>First Name</StyledLabel>
      <StyledInput />

      <StyledLabel>Last Name</StyledLabel>
      <StyledInput />

      <StyledLabel style={{paddingLeft: 25}}>Phone Number </StyledLabel>
      <StyledInput />

      <ButtonContainer>
        <StyledCancel>CANCEL</StyledCancel>
        <StyledSave>SAVE</StyledSave>
      </ButtonContainer>
    </FlexContainer>
  </RowContainer>
}
