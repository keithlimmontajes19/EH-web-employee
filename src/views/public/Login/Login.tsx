import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectAccessToken} from 'ducks/auth/authSlice'

import {SubLogoContainer, RowContainer, FormContainer} from './styled'

import LoginForm from 'compositions/LoginForm';


export default function Login() {
  const navigate = useNavigate()
  const accessToken = useSelector(selectAccessToken)

  useEffect(() => {if (accessToken) navigate('/')}, [accessToken])

  return <div style={RowContainer}>
    <SubLogoContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </SubLogoContainer>
  </div>
}
