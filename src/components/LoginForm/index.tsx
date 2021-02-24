import {Formik} from 'formik';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import Input from '../Input';
import * as yup from 'yup';
import {
  FieldTitle,
  LoginCard,
  SignInButton,
  SignInGradient,
  SignInText,
  SubtitleText,
  WelcomeText,
} from './styles';

interface ILoginFormProps {
  handleLogin: (email: string, password: string) => void;
  isLoading: boolean;
}

const LoginForm: React.FC<ILoginFormProps> = ({handleLogin, isLoading}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido.')
      .required('E-mail é obrigatório.'),
    password: yup.string().required('Senha é obrigatória.'),
  });

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={async ({email, password}) => handleLogin(email, password)}>
      {({handleSubmit}) => (
        <>
          <LoginCard>
            <WelcomeText>Olá, seja bem-vindo!</WelcomeText>

            <SubtitleText>
              Para acessar a plataforma, faça seu login.
            </SubtitleText>

            <FieldTitle>E-MAIL</FieldTitle>
            <Input
              testID="email-input"
              name="email"
              placeholder={'user.name@mail.com'}
              keyboardType="email-address"
            />

            <FieldTitle>SENHA</FieldTitle>
            <Input
              testID="password-input"
              name="password"
              placeholder={'*******'}
              secureTextEntry={true}
            />
          </LoginCard>
          <SignInButton testID="submit-button" onPress={handleSubmit}>
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
  );
};

export default LoginForm;
