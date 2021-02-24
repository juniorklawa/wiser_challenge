import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import api from '../../services/api';
import {signInRequest} from '../../store/ducks/user/actions';
import showErrorMessage from '../../utils/showErrorMessage';
import {
  ClickHereButton,
  ClickHereContainer,
  ClickText,
  Container,
  ForgotPassword,
  HereText,
} from './styles';

const LoginPage = () => {
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
        <LoginForm handleLogin={handleLogin} isLoading={isLoading} />

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
