import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useMutation} from 'react-query'
import {login} from 'api/authAPI'

/* styles antd */
import {
  FlexRow,
  Container,
  StyledInput,
  LabelStyled,
  TitleStyled,
  StyledButton,
  InputContaier,
  StyledTextlink,
  StyledPassword,
  SignupContainer,
} from './styled';
import {Form} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

/* redux actions helpers */
import {rulesConfig} from 'utils/helpers';

import styles from './LoginForm.module.css';

import LOGO from 'assets/icons/logo.png';
import IconImage from 'components/IconImage';

const LoginForm = (): ReactElement => {
  const loginMutation = useMutation(login, {
    onSuccess: ({data}) => {
      const {accessToken, refreshToken, userId} = data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userId', userId)
    },
    onError: (err: any) => {
      if (err.response) {
        return err.response.data.message
      }

      return err.message
    }
  })

  const navigate = useNavigate()
  const [form] = Form.useForm()

  const handlesubmit = async (values: never) => {
    await loginMutation.mutateAsync(values)
    if (!loginMutation.isError) navigate('/')
  }

  const setFormFields = (field: string, errors: string) => {
    form.setFields([{
      name: field,
      errors: [errors],
    }])
  }

  return (
    <Container>
      <FlexRow>
        <IconImage source={LOGO} height={100} width={150} />
      </FlexRow>
      <TitleStyled>Welcome back</TitleStyled>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handlesubmit}
        initialValues={{
          email: '',
          password: ''
        }}>
        <Form.Item name="email" rules={rulesConfig('Email is required.')}>
          <StyledInput
            type="email"
            size="large"
            placeholder="Input Email"
            onChange={() => setFormFields('email', '')}
          />
        </Form.Item>

        <Form.Item name="password" rules={rulesConfig('Password is required.')}>
          <StyledPassword
            size="large"
            placeholder="Input Password"
            onChange={() => setFormFields('password', '')}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <StyledButton
          size="large"
          onClick={() => form.submit()}
          loading={loginMutation.isLoading}>
          Sign In
        </StyledButton>

        <InputContaier>
          <LabelStyled>
            <StyledTextlink href="https://admin.huee.io/">
              Log in as Organization Administrator
            </StyledTextlink>
          </LabelStyled>
        </InputContaier>

        <InputContaier>
          <LabelStyled>
            <Link to="/forgot-password" className={styles.link}>Forgot Password?</Link>
          </LabelStyled>
        </InputContaier>

        <SignupContainer>
          <LabelStyled>New on our platform?</LabelStyled>
          <LabelStyled>
            <Link to="/" className={styles.link}>Create an account</Link>
          </LabelStyled>
        </SignupContainer>
      </Form>
    </Container>
  )
}

export default LoginForm
