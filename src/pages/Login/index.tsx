import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Input from '../../components/Input';
import {
  ClickeHereContainer,
  ClickText,
  Container,
  EmailContainer,
  FieldTitle,
  ForgotPassword,
  HereText,
  LoginCard,
  PasswordContainer,
  SafeArea,
  SignInButton,
  SignInGradient,
  SubtitleText,
  WelcomeText,
} from './styles';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <SafeArea>
        <Container>
          <LoginCard>
            <WelcomeText>Olá, seja bem-vindo!</WelcomeText>

            <SubtitleText>
              Para acessar a plataforma, faça seu login.
            </SubtitleText>

            <EmailContainer>
              <FieldTitle>E-MAIL</FieldTitle>
              <Input
                fieldValue={email}
                setFieldValue={setEmail}
                placeholder={'user.name@mail.com'}
              />
            </EmailContainer>

            <PasswordContainer>
              <FieldTitle>SENHA</FieldTitle>

              <Input
                fieldValue={password}
                setFieldValue={setPassword}
                placeholder={'********'}
                secureTextEntry={true}
              />
            </PasswordContainer>
          </LoginCard>
          <SignInButton onPress={() => console.log('oi')} style={{}}>
            <SignInGradient>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                ENTRAR
              </Text>
            </SignInGradient>
          </SignInButton>

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
