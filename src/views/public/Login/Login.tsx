import {useNavigate} from 'react-router-dom'

import {SubLogoContainer, RowContainer, FormContainer} from './styled'

import LoginForm from 'compositions/LoginForm';


export default function Login() {
  const navigate = useNavigate()

  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) navigate('/')

  return <div style={RowContainer}>
    <SubLogoContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </SubLogoContainer>
  </div>
}
