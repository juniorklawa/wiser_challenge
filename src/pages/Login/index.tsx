import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import Input from '../../components/Input';
import api from '../../services/api';
import {signInRequest} from '../../store/ducks/user/actions';
import showErrorMessage from '../../utils/showErrorMessage';
import {
  ClickHereButton,
  ClickHereContainer,
  ClickText,
  Container,
  FieldTitle,
  ForgotPassword,
  HereText,
  LoginCard,
  SignInButton,
  SignInGradient,
  SignInText,
  SubtitleText,
  WelcomeText,
} from './styles';

const LoginPage = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido.')
      .required('E-mail é obrigatório.'),
    password: yup.string().required('Senha é obrigatória.'),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        setIsLoading(true);
        if (
          email.toLowerCase() !== 'johndoe@gmail.com' ||
          password !== '123123'
        ) {
          return showErrorMessage('Senha ou E-mail invalidos!');
        }

        dispatch(signInRequest(email, password));

        const {data} = await api.post('98bd6150-0741-447b-8791-498f69233d35', {
          email,
          password,
        });

        navigation.navigate('ProfilePage', {user: data});
      } catch (err) {
        showErrorMessage(err);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, navigation],
  );

  return (
    <>
      <Container>
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
                  name="email"
                  placeholder={'user.name@mail.com'}
                  keyboardType="email-address"
                />

                <FieldTitle>SENHA</FieldTitle>
                <Input
                  name="password"
                  placeholder={'*******'}
                  secureTextEntry={true}
                />
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

        <ClickHereContainer>
          <ClickText>Clique</ClickText>
          <ClickHereButton>
            <HereText>aqui</HereText>
          </ClickHereButton>
        </ClickHereContainer>
      </Container>
    </>
  );
};

export default LoginPage;
