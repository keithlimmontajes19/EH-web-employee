import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useMutation} from 'react-query'
import {login} from 'api/authAPI'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

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

export default function LoginForm() {
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)

  const loginMutation = useMutation(login, {
    onSuccess: ({data}) => {
      const {accessToken, refreshToken, userId} = data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userId', userId)
    },
    onError: (err: any) => {
      setIsSubmitted(true)
      return err.response.data
    }
  })

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const userId = localStorage.getItem('userId')

    if (accessToken && refreshToken && userId) navigate('/')
  }, [])

  const [form] = Form.useForm()

  const handlesubmit = async (values: never) => {
    try {
      await loginMutation.mutateAsync(values)
      navigate('/')
    } catch (err) {
      // do nothing
    }
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
            onChange={() => {
              setFormFields('email', '')
              setIsSubmitted(false)
            }}
          />
        </Form.Item>

        <Form.Item name="password" rules={rulesConfig('Password is required.')}>
          <StyledPassword
            size="large"
            placeholder="Input Password"
            onChange={() => {
              setFormFields('password', '')
              setIsSubmitted(false)
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        {isSubmitted && loginMutation.isError && !loginMutation.isLoading && <p className={`${styles.error}`}>
          <span><FontAwesomeIcon icon={faExclamationCircle} /></span>&nbsp;{loginMutation.error.response.data.message.toString()}
        </p>}

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
            <Link to="/register" className={styles.link}>Create an account</Link>
          </LabelStyled>
        </SignupContainer>
      </Form>
    </Container>
  )
}
