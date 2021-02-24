import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {IState} from '../../store';
import {IUserState} from '../../store/ducks/user/types';
import {
  Avatar,
  Container,
  ProfileCard,
  SignOutButton,
  SignOutGradient,
  SignOutText,
  UserEmail,
  UserName,
} from './styles';

interface IUser {
  avatar: string;
  email: string;
  name: string;
}

const ProfilePage = () => {
  const user = useSelector<IState, IUserState>((state) => state.user);

  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <Container>
      <ProfileCard>
        <Avatar source={{uri: user.avatar}} />
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>

        <SignOutButton onPress={handleSignOut}>
          <SignOutGradient>
            <SignOutText>SAIR</SignOutText>
          </SignOutGradient>
        </SignOutButton>
      </ProfileCard>
    </Container>
  );
};

export default ProfilePage;
