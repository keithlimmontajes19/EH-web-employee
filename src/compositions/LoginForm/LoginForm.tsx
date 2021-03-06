import {ReactElement, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useLoginMutation} from 'ducks/auth/authApiSlice';

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
import {Form, Modal, Spin} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

/* redux actions helpers */
import {useSelector, useDispatch} from 'react-redux';
import {postLogin} from 'ducks/authentication/actionCreator';
import {RootState} from 'ducks/store';
import {rulesConfig} from 'utils/helpers';

import styles from './LoginForm.module.css';

import LOGO from 'assets/icons/logo.png';
import IconImage from 'components/IconImage';
import {setCredentials} from 'ducks/auth/authSlice';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = (): ReactElement => {
  const [login, {isLoading}] = useLoginMutation()

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {data, loading}: any = useSelector<RootState>(
    (state) => state.authentication,
  );

  const handlesubmit = async (values: never) => {
    try {
      const result = await login(values).unwrap()
      dispatch(setCredentials(result))
    } catch (err) {
      console.log(err)
    }

    // dispatch(postLogin(values));
  };

  const setFormFields = (field: string, errors: string) => {
    form.setFields([
      {
        name: field,
        errors: [errors],
      },
    ]);
  };

  useEffect(() => {
    const email = form.getFieldValue('email');
    const password = form.getFieldValue('password');

    if (!data?.success && email.length) {
      setFormFields('email', data?.message);
    }

    if (!data?.success && password.length) {
      setFormFields('password', data?.message);
    }
  }, [data]);

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
        initialValues={INITIAL_VALUES}>
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
          loading={loading}>
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
            <Link to="/forgot" className={styles.link}>Forgot Password?</Link>
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
  );
};

export default LoginForm;
