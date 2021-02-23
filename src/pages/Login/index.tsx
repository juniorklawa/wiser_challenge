import {Formik} from 'formik';
import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import FieldError from '../../components/FieldError';
import api from '../../services/api';
import showErrorMessage from '../../utils/showErrorMessage';
import {
  ClickeHereContainer,
  ClickText,
  Container,
  ErrorIcon,
  FieldContainer,
  FieldTitle,
  ForgotPassword,
  HereText,
  Input,
  InputWrapper,
  LoginCard,
  SafeArea,
  SignInButton,
  SignInGradient,
  SignInText,
  SubtitleText,
  WelcomeText,
} from './styles';

interface IUser {
  name: string;
  email: string;
  avatar: string;
}

const LoginPage = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido.')
      .required('E-mail é obrigatório.'),
    password: yup.string().required('Senha é obrigatória.'),
  });

  const [, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      if (email !== 'johndoe@gmail.com' || password !== '123123') {
        showErrorMessage('Senha ou E-mail invalidos!');
      }
      const {data} = await api.post('98bd6150-0741-447b-8791-498f69233d35');
      setUser(data);
    } catch (err) {
      showErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SafeArea>
        <Container>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={async ({email, password}) =>
              handleLogin(email, password)
            }>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <LoginCard>
                  <WelcomeText>Olá, seja bem-vindo!</WelcomeText>

                  <SubtitleText>
                    Para acessar a plataforma, faça seu login.
                  </SubtitleText>

                  <FieldContainer>
                    <FieldTitle>E-MAIL</FieldTitle>
                    <InputWrapper hasError={!!errors.email && !!touched.email}>
                      <Input
                        placeholder={'user.name@mail.com'}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                      />
                      {!!errors.email && !!touched.email && <ErrorIcon />}
                    </InputWrapper>
                  </FieldContainer>

                  {errors.email && touched.email && (
                    <FieldError errors={errors.email} />
                  )}

                  <FieldContainer>
                    <FieldTitle>SENHA</FieldTitle>
                    <InputWrapper
                      hasError={!!errors.password && !!touched.password}>
                      <Input
                        placeholder={'*******'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                      />

                      {!!errors.password && !!touched.password && <ErrorIcon />}
                    </InputWrapper>
                  </FieldContainer>

                  {errors.password && touched.password && (
                    <FieldError errors={errors.password} />
                  )}
                </LoginCard>
                <SignInButton onPress={handleSubmit}>
                  <SignInGradient>
                    {!isLoading ? (
                      <SignInText>ENTRAR</SignInText>
                    ) : (
                      <ActivityIndicator size="large" color="#fff" />
                    )}
                  </SignInGradient>
                </SignInButton>
              </>
            )}
          </Formik>

          <ForgotPassword>Esqueceu seu login ou senha?</ForgotPassword>

          <ClickeHereContainer>
            <ClickText>Clique</ClickText>
            <TouchableOpacity>
              <HereText>aqui</HereText>
            </TouchableOpacity>
          </ClickeHereContainer>
        </Container>
      </SafeArea>
    </>
  );
};

export default LoginPage;
